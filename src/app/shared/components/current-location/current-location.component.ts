import {Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter} from '@angular/core';
import {I5DaysForecast} from '../../../interfaces/5-days-forcasts.interface';
import {ICurrentLocationForcast} from '../../../interfaces/current-location.interface';
import {IAutoComplete} from '../../../interfaces/auto-complete.interface';
import {TrackByService} from '../../../services/trackby.service';

@Component({
  selector: 'sl-current-location',
  template: `
    <div class="forecast-table">
      <div class="container">
        <div class="forecast-container">
          <div class="today forecast">
            <div class="forecast-header">
              <div class="day">{{currentLocationForecast.LocalObservationDateTime | date : 'EEEE'}}</div>
              <div class="date">
                <span (click)="onToggleFavorite(isFavoriteLocation)">
                  <button nbButton status="success" *ngIf="!isFavoriteLocation">add to favorite</button>
                  <button nbButton status="danger" *ngIf="isFavoriteLocation">remove from favorite</button>
                </span>
                {{currentLocationForecast.LocalObservationDateTime | date : 'd'}}
                {{currentLocationForecast.LocalObservationDateTime | date : 'MMM'}}
              </div>
            </div> <!-- .forecast-header -->
            <sl-forecast-location
              [currentLocation]="currentLocation"
              [currentLocationForecast]="currentLocationForecast"
            ></sl-forecast-location>

          </div>
          <sl-forecast-daily-content
            *ngFor="let dailyForecast of currentLocation5DaysForecast.DailyForecasts; trackBy: trackByService.index"
            [dailyForecast]="dailyForecast"
          ></sl-forecast-daily-content>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./current-location.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CurrentLocationComponent implements OnInit {

  @Input() currentLocationForecast: ICurrentLocationForcast.RootObject;
  @Input() currentLocation5DaysForecast: I5DaysForecast.RootObject;
  @Input() currentLocation: IAutoComplete.RootObject;
  @Input() isFavoriteLocation: boolean;

  @Output() toggleFavorite = new EventEmitter<boolean>();

  constructor(public trackByService: TrackByService) {
  }

  ngOnInit(): void {
  }

  onToggleFavorite(condition: boolean) {
    this.toggleFavorite.emit(!condition);
  }

}
