import { UserLoginAction, UserLogoutAction } from './Auth';
import { FetchRestaurantsAction, FetchSelectedRestaurantAction } from './Restaurants';

// eslint-disable-next-line no-shadow
export enum ActionsTypes {
  FetchRestaurants,
  FetchSelectedRestaurant,
  UserLogin,
  UserLogout,
}

export type RestaurantsAction = FetchRestaurantsAction;
export type SelectedRestaurantAction = FetchSelectedRestaurantAction;
export type AuthAction = UserLoginAction | UserLogoutAction
