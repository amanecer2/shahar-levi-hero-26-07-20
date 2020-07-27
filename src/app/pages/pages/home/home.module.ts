import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {SharedModule} from '../../../shared/shared.module';
import {LocationAutoCompleteComponent} from './location-auto-complete/location-auto-complete.component';
import {CurrentLocationComponent} from '../../../shared/components/current-location/current-location.component';


@NgModule({
  declarations: [
    HomeComponent,
    LocationAutoCompleteComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule {
}
