import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NbThemeModule, NbLayoutModule, NbButtonModule, NbToastrModule} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import {CoreModule} from './core/core.module';
import { PagesModule } from './pages/pages/pages.module';
import {SharedModule} from './shared/shared.module';
import {TypeaheadModule} from 'ngx-bootstrap/typeahead';
import {AccuWeatherService} from './services/accu-weather.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TypeaheadModule.forRoot(),
    NbThemeModule.forRoot({ name: 'corporate' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbButtonModule,
    NbToastrModule.forRoot(),
    CoreModule,
    SharedModule,
    PagesModule,
  ],
  providers: [
    AccuWeatherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
