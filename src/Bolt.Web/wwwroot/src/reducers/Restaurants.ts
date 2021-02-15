import { RestaurantsAction, ActionsTypes, SelectedRestaurantAction } from '../actions';
import { Restaurant } from '../models/Restaurant';
import { RestaurantCategory } from '../models/RestaurantCategory';

export const RestaurantReducer = (state: Restaurant[] = [], action: RestaurantsAction) => {
  switch (action.type) {
    case ActionsTypes.FetchRestaurants:
      return action.payload;
    default:
      return state;
  }
};

export const SelectedRestaurantReducer = (state : Restaurant = new Restaurant(), action: SelectedRestaurantAction) => {
  switch (action.type) {
    case ActionsTypes.FetchSelectedRestaurant:
      return action.payload;
    default:
      return state;
  }
};
