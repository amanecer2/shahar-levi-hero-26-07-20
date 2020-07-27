import {Injectable} from '@angular/core';
import {AccuWeatherService} from '../../../services/accu-weather.service';
import {BehaviorSubject, merge, throwError} from 'rxjs';
import {ICurrentLocationForcast} from '../../../interfaces/current-location.interface';
import {I5DaysForecast} from '../../../interfaces/5-days-forcasts.interface';
import {catchError, switchMap, tap} from 'rxjs/operators';
import {IAutoComplete} from '../../../interfaces/auto-complete.interface';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private _currentLocationForecast$ = new BehaviorSubject<ICurrentLocationForcast.RootObject>(undefined);
  private _currentLocation5DaysForecast$ = new BehaviorSubject<I5DaysForecast.RootObject>(undefined);
  private _currentLocation$ = new BehaviorSubject<IAutoComplete.RootObject>(undefined);

  currentLocationForecast$ = this._currentLocationForecast$.asObservable();
  currentLocation5DaysForecast$ = this._currentLocation5DaysForecast$.asObservable();
  currentLocation$ = this._currentLocation$.asObservable();

  constructor(private weatherService: AccuWeatherService) {
  }

  getUserCurrentLocation() {
    return this.weatherService.getUserCurrentLocation()?.LocalizedName;
  }

  getCurrentLocation(search) {
    return this.weatherService.getAutoComplete(search)
      .pipe(
        tap(res => {
          const autoCompleteLocation = res[0];
          this.setCurrentLocation(autoCompleteLocation);
        }),
        switchMap(res => {
          const autoCompleteLocation = res[0];
          return merge(
            this.fetchLocation(autoCompleteLocation.Key),
            this.fetchLocation5DaysForecast(autoCompleteLocation.Key)
          );
        }),
        catchError( err => {
          return throwError(err);
        })
      );
  }

  fetchLocation(locationKey: string) {
    return this.weatherService.getCurrentLocation(locationKey).pipe(
      tap(res => {
        this._currentLocationForecast$.next(res[0]);
      })
    );
  }

  fetchLocation5DaysForecast(locationKey: string) {
    return this.weatherService.get5DaysForecast(locationKey)
      .pipe(
        tap(res => {
          this._currentLocation5DaysForecast$.next(res);
        })
      );
  }

  setCurrentLocation(currentLocation: IAutoComplete.RootObject) {
    this._currentLocation$.next(currentLocation);
  }
}
