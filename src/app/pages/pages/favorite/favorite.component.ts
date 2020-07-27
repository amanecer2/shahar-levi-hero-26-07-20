import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {AppFavoriteStateService, IFavoriteState} from '../../../state/app-favorite-state.service';
import {Observable} from 'rxjs';
import {TrackByService} from '../../../services/trackby.service';
import {IAutoComplete} from '../../../interfaces/auto-complete.interface';
import {AccuWeatherService} from '../../../services/accu-weather.service';
import {Router} from '@angular/router';
import {STRINGS} from '../../../constant/string.constant';

@Component({
  selector: 'sl-favorite',
  template: `
    <section>

      <ng-container *ngIf="favorites$ | async as state">
        <div class="row">
          <div class="forecast-table col-sm-6 p-2" *ngFor="let location of state.locations; let i = index; trackBy: trackByService.index">
            <div class="container">
              <div class="forecast-container">
                <div class="today forecast" (click)="onFavoriteLocationHandler(location)">
                  <sl-forecast-location
                    [currentLocation]="location"
                    [currentLocationForecast]="state.locationsForecasts[i]"
                  ></sl-forecast-location>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ng-container>
    </section>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavoriteComponent implements OnInit {

  favorites$: Observable<IFavoriteState>;

  constructor(private favoriteStateService: AppFavoriteStateService,
              public trackByService: TrackByService,
              private weatherService: AccuWeatherService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.favorites$ = this.favoriteStateService.state$;
  }

  onFavoriteLocationHandler(location: IAutoComplete.RootObject) {
    this.weatherService.setUserCurrentLocation(location);
    this.router.navigate([STRINGS.HOME]);
  }
}
