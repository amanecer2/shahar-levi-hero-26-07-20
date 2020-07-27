import {
  Action,
  createReducer, on,
} from '@ngrx/store';
import {__INIT_FAVORITE_STATE, IFavoriteState, setMapper} from '../app-favorite-state.service';
import {addFavorite, removeFavorite} from './favorite.action';

export type FavoriteStateStore = IFavoriteState;
export type FavoriteState = IFavoriteState;


export const _favoriteReducer =  createReducer(
  __INIT_FAVORITE_STATE,
  on(addFavorite, (state, {payload}) => {
    const _oldState = {...state};

    const locations = [..._oldState.locations, payload.location];
    const locationsForecasts = [..._oldState.locationsForecasts, payload.locationForecast];

    _oldState.locations = locations;
    _oldState.locationsForecasts = locationsForecasts;
    _oldState.mapper = setMapper(locations);

    return {...state, ..._oldState};
  }),
  on(removeFavorite, (state, {payload}) => {
    const _oldState = {...state};
    const index = _oldState.locations.findIndex(l => l.Key === payload.location.Key);

    if (index > -1) {

      const locations = _oldState.locations.filter((l, __index) => __index !== index);
      const locationsForecasts = _oldState.locationsForecasts.filter((l, __index) => __index !== index);
      _oldState.locations = locations;
      _oldState.locationsForecasts = locationsForecasts;

      _oldState.mapper = setMapper(locations);
    }


    return {...state, ..._oldState};
  })
);


export interface IFavoriteStateStore {
  favorite: IFavoriteState;
}

export function favoriteReducer(state: FavoriteStateStore | undefined, action: Action) {
  return _favoriteReducer(state, action);
}

