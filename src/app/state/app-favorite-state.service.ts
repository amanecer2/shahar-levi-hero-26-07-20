import {Injectable} from '@angular/core';

import {ICurrentLocationForcast} from '../interfaces/current-location.interface';
import {BehaviorSubject, of} from 'rxjs';
import {STRINGS} from '../constant/string.constant';
import {getLocalStorage, setLocalStorage} from '../shared/utils/local-strorage';
import {IAutoComplete} from '../interfaces/auto-complete.interface';
import {IFavoriteStateStore} from './reducers/favorite.reducer';
import {Store} from '@ngrx/store';
import {selectFavoriteStore} from './reducers/favorite.selector';
import {addFavorite, removeFavorite} from './reducers/favorite.action';

export interface IFavoriteState {
  mapper: { [locationId: string]: number };
  locations: IAutoComplete.RootObject[];
  locationsForecasts: ICurrentLocationForcast.RootObject[];
}

export const __INIT_FAVORITE_STATE: IFavoriteState = {
  mapper: {},
  locations: [],
  locationsForecasts: []
};

const INIT_STATE: IFavoriteState = getLocalStorage<IFavoriteState>(STRINGS.STATE) || __INIT_FAVORITE_STATE;

@Injectable({
  providedIn: 'root'
})
export class AppFavoriteStateService {
  constructor(private store: Store<IFavoriteStateStore>) {
  }

  state$ = this.store.select(selectFavoriteStore);

  addFavorite(location: IAutoComplete.RootObject,
              locationForecast: ICurrentLocationForcast.RootObject): void {
    this.store.dispatch(addFavorite({payload: {location, locationForecast}}));

  }

  removeFavorite(location: IAutoComplete.RootObject): void {
    this.store.dispatch(removeFavorite({payload: {location}}));
    }

}




///// this is self implement.. you wanted state management/
// but because you wanted NGRX to implemented i used the above code

/**
 * State (ish) management
 * I could used NGRX but it's over kill for small usage
 * i used the same pattern (immutable) and API for updating the state
 *
 * @deprecated not in used
 */
@Injectable({
  providedIn: 'root'
})
export class AppFavoriteStateService2 {
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

export function setMapper(locations: IAutoComplete.RootObject[]) {
  const mapper = {};
  locations.forEach((l, index) => mapper[l.Key] = index);
  return mapper;
}
