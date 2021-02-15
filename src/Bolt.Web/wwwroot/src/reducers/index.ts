import { combineReducers } from 'redux';
import { Restaurant } from '../models/Restaurant';
import { RestaurantReducer, SelectedRestaurantReducer } from './Restaurants';

export interface StoreState {
  restaurants : Restaurant[]
  selectedRestaurant: Restaurant | undefined
}

export const reducers = combineReducers<StoreState>({
  restaurants: RestaurantReducer,
  selectedRestaurant: SelectedRestaurantReducer,
});
