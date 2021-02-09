import { combineReducers } from 'redux';
import { Restaurant } from '../models/Restaturant';
import { RestaurantReducer } from './Restaurants';

export interface StoreState {
  restaurants : Restaurant[]
}

export const reducers = combineReducers<StoreState>({
  restaurants: RestaurantReducer,
});
