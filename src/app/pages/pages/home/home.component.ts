import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {HomeService} from './home.service';
import {IAutoComplete} from '../../../interfaces/auto-complete.interface';
import {combineLatest, merge, Observable, throwError} from 'rxjs';
import {ICurrentLocationForcast} from '../../../interfaces/current-location.interface';
import {I5DaysForecast} from '../../../interfaces/5-days-forcasts.interface';
import {AppFavoriteStateService, IFavoriteState} from '../../../state/app-favorite-state.service';
import {catchError} from 'rxjs/operators';
import {NbGlobalLogicalPosition, NbToastrService} from '@nebular/theme';

@Component({
  selector: 'sl-home',
  template: `
    <p>
      <sl-location-auto-complete
        [search]="defaultLocation"
        (onLocationSelected)="locationSelectedHandler($event)"
      ></sl-location-auto-complete>
      <ng-container *ngIf="locationData$ | async as data">

        <sl-current-location *ngIf="data[mapper.FIVE_DAYS_FORECASTS] && data[mapper.CURRENT_LOCATION_FORECAST]"
                             [currentLocation]="data[mapper.CURRENT_LOCATION]"
                             [currentLocation5DaysForecast]="data[mapper.FIVE_DAYS_FORECASTS]"
                             [currentLocationForecast]="data[mapper.CURRENT_LOCATION_FORECAST]"
                             [isFavoriteLocation]="data[mapper.FAVORITE_LOCATION].mapper[data[mapper.CURRENT_LOCATION].Key] > -1"
                             (toggleFavorite)="onToggleFavoriteHandler($event, data[mapper.CURRENT_LOCATION], data[mapper.CURRENT_LOCATION_FORECAST])"
        ></sl-current-location>
      </ng-container>

    </p>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  defaultLocation = this.homeService.getUserCurrentLocation() || 'Tel Aviv';
  mapper = {
    CURRENT_LOCATION_FORECAST: 0,
    FIVE_DAYS_FORECASTS: 1,
    CURRENT_LOCATION: 2,
    FAVORITE_LOCATION: 3
  };
  locationData$: Observable<[
    ICurrentLocationForcast.RootObject,
    I5DaysForecast.RootObject,
    IAutoComplete.RootObject,
    IFavoriteState
    ]>;

  constructor(private homeService: HomeService,
              private favoriteStateService: AppFavoriteStateService,
              private toasterService: NbToastrService
  ) {
  }

  ngOnInit(): void {
    this.locationData$ = combineLatest(
      this.homeService.currentLocationForecast$,
      this.homeService.currentLocation5DaysForecast$,
      this.homeService.currentLocation$,
      this.favoriteStateService.state$
    );

    this.homeService.getCurrentLocation(this.defaultLocation)
      .pipe(
        catchError(err => {
          this.errorToaster(err);
          return throwError(err);
        })
      )
      .subscribe();
  }

  locationSelectedHandler(location: IAutoComplete.RootObject) {
    merge(
      this.homeService.fetchLocation5DaysForecast(location.Key),
      this.homeService.fetchLocation(location.Key)
    )
      .pipe(
        catchError(err => {
          this.errorToaster(err);
          return throwError(err);
        })
      ).subscribe();
    this.homeService.setCurrentLocation(location);
  }

  onToggleFavoriteHandler(condition: boolean,
                          location: IAutoComplete.RootObject,
                          forecast: ICurrentLocationForcast.RootObject) {
    if (condition) {
      this.favoriteStateService.addFavorite(location, forecast);
    } else {
      this.favoriteStateService.removeFavorite(location);
    }
  }

  errorToaster(err) {
    this.toasterService
      .warning(
        `the  accuweather server return an error: ${err.statusText}`,
        'huston we have a problem',
        {duration: 2000, position: NbGlobalLogicalPosition.TOP_START});
  }
}
