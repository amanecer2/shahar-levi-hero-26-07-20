import {ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {I5DaysForecast} from '../../../../interfaces/5-days-forcasts.interface';

@Component({
  selector: 'sl-forecast-daily-content',
  template: `
    <div class="forecast">
      <div class="forecast-header">
        <div class="day">{{dailyForecast.Date | date : 'EEEE'}}</div>
      </div> <!-- .forecast-header -->
      <div class="forecast-content">
        <div class="forecast-icon">
          <img
            [src]="'https://demo.themezy.com/system/resources/demo_themes/000/000/128/images/icons/icon-' + dailyForecast.Day.Icon  + '.svg'"
            alt="" width="48">
        </div>
        <div class="degree">{{dailyForecast.Temperature.Maximum.Value}}<sup>o</sup>{{dailyForecast.Temperature.Maximum.Unit}}</div>
        <small>{{dailyForecast.Temperature.Minimum.Value}}<sup>o</sup></small>
      </div>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class ForecastDailyContentComponent implements OnInit {

  @Input() dailyForecast: I5DaysForecast.DailyForecast;

  constructor() {
  }

  ngOnInit(): void {
  }

}
