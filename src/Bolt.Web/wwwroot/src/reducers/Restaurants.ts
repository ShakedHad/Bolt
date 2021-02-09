import { Action, ActionsTypes } from '../actions';
import { Restaurant } from '../models/Restaturant';

export const RestaurantReducer = (state: Restaurant[] = [], action: Action) => {
  switch (action.type) {
    case ActionsTypes.FetchRestaurants:
      return action.payload;
    default:
      return state;
  }
};
