import {createSelector} from '@ngrx/store';
import {FavoriteState, IFavoriteStateStore} from './favorite.reducer';

export const selectFavoriteState = (state: IFavoriteStateStore) => state.favorite;
export const selectFavoriteStore = createSelector(selectFavoriteState, (state: FavoriteState) => state);
