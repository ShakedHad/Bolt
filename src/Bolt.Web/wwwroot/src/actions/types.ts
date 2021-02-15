import { FetchRestaurantsAction, FetchSelectedRestaurantAction } from './Restaurants';

// eslint-disable-next-line no-shadow
export enum ActionsTypes {
  FetchRestaurants,
  FetchSelectedRestaurant
}

export type RestaurantsAction = FetchRestaurantsAction;
export type SelectedRestaurantAction = FetchSelectedRestaurantAction;
