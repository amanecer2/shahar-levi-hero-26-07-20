import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {IAutoComplete} from '../../../../interfaces/auto-complete.interface';
import {ICurrentLocationForcast} from '../../../../interfaces/current-location.interface';

@Component({
  selector: 'sl-forecast-location',
  template: `
    <div class="forecast-content">
      <div class="location">{{currentLocation.LocalizedName}}</div>
      <div class="degree">
        <div class="num">{{currentLocationForecast.Temperature.Metric.Value}}
          <sup>o</sup>{{currentLocationForecast.Temperature.Metric.Unit}}</div>
        <div class="forecast-icon">
          <img
            [src]="'https://demo.themezy.com/system/resources/demo_themes/000/000/128/images/icons/icon-' + currentLocationForecast.WeatherIcon + '.svg'"
            alt="" width="90">
        </div>
      </div>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ForecastLocationComponent implements OnInit {

  @Input() currentLocationForecast: ICurrentLocationForcast.RootObject;
  @Input() currentLocation: IAutoComplete.RootObject;

  constructor() {
  }

  ngOnInit(): void {
  }

}
