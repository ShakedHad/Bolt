import { combineReducers } from 'redux';

export interface StoreState {
  placeholder
}

export const reducers = combineReducers<StoreState>({
  placeholder: () => '',
});
