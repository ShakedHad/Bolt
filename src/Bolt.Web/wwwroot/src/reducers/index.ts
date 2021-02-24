import { combineReducers } from 'redux';
import { Restaurant } from '../models/Restaurant';
import { RestaurantsReducer, SelectedRestaurantReducer } from './Restaurants';
import { authReducer } from './Auth';
import { User } from '../models/User';

export interface StoreState {
  restaurants : Restaurant[]
  selectedRestaurant: Restaurant,
  user: User
}

export const reducers = combineReducers<StoreState>({
  restaurants: RestaurantsReducer,
  selectedRestaurant: SelectedRestaurantReducer,
  user: authReducer,
});
