import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import {environment} from '../../../environments/environment';
import {favoriteReducer} from './favorite.reducer';
import {IFavoriteState} from '../app-favorite-state.service';

export interface State {
  favorite: IFavoriteState
}

export const reducers: ActionReducerMap<State> = {
  favorite: favoriteReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
