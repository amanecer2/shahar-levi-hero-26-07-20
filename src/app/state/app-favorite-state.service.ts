import {Injectable} from '@angular/core';

import {ICurrentLocationForcast} from '../interfaces/current-location.interface';
import {BehaviorSubject} from 'rxjs';
import {STRINGS} from '../constant/string.constant';
import {getLocalStorage, setLocalStorage} from '../shared/utils/local-strorage';
import {IAutoComplete} from '../interfaces/auto-complete.interface';

export interface IFavoriteState {
  mapper: { [locationId: string]: number };
  locations: IAutoComplete.RootObject[];
  locationsForecasts: ICurrentLocationForcast.RootObject[];
}

const INIT_STATE: IFavoriteState = getLocalStorage(STRINGS.STATE) ||{
  mapper: {},
  locations: [],
  locationsForecasts: []
};

/**
 * State (ish) management
 * I could used NGRX but it's over kill for small usage
 * i used the same pattern (immutable) and API for updating the state
 */
@Injectable({
  providedIn: 'root'
})
export class AppFavoriteStateService {
  private _state$ = new BehaviorSubject<IFavoriteState>(INIT_STATE);
  state$ = this._state$.asObservable();

  constructor() {
  }


  get state(): IFavoriteState {
    return this._state$.getValue();
  }

  set state(__state: IFavoriteState) {
    setLocalStorage(STRINGS.STATE, __state);
    this._state$.next(__state);
  }

  addFavorite(location: IAutoComplete.RootObject,
              locationForecast: ICurrentLocationForcast.RootObject): void {
    const _oldState = {...this.state};

    const locations = [..._oldState.locations, location];
    const locationsForecasts = [..._oldState.locationsForecasts, locationForecast];

    _oldState.locations = locations;
    _oldState.locationsForecasts = locationsForecasts;
    _oldState.mapper = setMapper(locations);

    this.state = {...this.state, ..._oldState};
  }

  removeFavorite(location: IAutoComplete.RootObject): void {
    const _oldState = {...this.state};
    const index = _oldState.locations.findIndex(l => l.Key === location.Key);

    if (index > -1) {

      const locations = _oldState.locations.filter((l, __index) => __index !== index);
      const locationsForecasts = _oldState.locationsForecasts.filter((l, __index) => __index !== index);
      _oldState.locations = locations;
      _oldState.locationsForecasts = locationsForecasts;

      _oldState.mapper = setMapper(locations);
    }


    this.state = {...this.state, ..._oldState};
  }

}

function setMapper(locations: IAutoComplete.RootObject[]) {
  const mapper = {};
  locations.forEach((l, index) => mapper[l.Key] = index);
  return mapper;
}
