import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import {TypeaheadModule} from 'ngx-bootstrap/typeahead';
import {FormsModule} from '@angular/forms';
import {CurrentLocationComponent} from './current-location/current-location.component';
import { ForecastDailyContentComponent } from './current-location/forecast-daily-content/forecast-daily-content.component';
import { ForecastLocationComponent } from './current-location/forecast-location/forecast-location.component';
import {NbButtonModule} from '@nebular/theme';



@NgModule({
  declarations: [
    AutoCompleteComponent,
    CurrentLocationComponent,
    ForecastDailyContentComponent,
    ForecastLocationComponent
  ],
  imports: [
    CommonModule,
    NbButtonModule,
    TypeaheadModule,
    FormsModule
  ],
  exports: [
    AutoCompleteComponent,
    CurrentLocationComponent,
    ForecastLocationComponent
  ]
})
export class ComponentsModule { }
