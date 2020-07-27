import {createAction, props} from '@ngrx/store';
import {IAutoComplete} from '../../interfaces/auto-complete.interface';
import {ICurrentLocationForcast} from '../../interfaces/current-location.interface';

export const  FAVORITE  = '[favorite]';

export const addFavorite = createAction(`${FAVORITE} add favorite`, props<{payload: {
    location: IAutoComplete.RootObject,
    locationForecast: ICurrentLocationForcast.RootObject
  }

}>());
export const removeFavorite = createAction(`${FAVORITE} remove favorite`, props<{
  payload: {location: IAutoComplete.RootObject}
}>());

