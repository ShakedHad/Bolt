import axios from 'axios';
import { plainToClass } from 'class-transformer';
import { Guid } from 'guid-typescript';
import { Dispatch } from 'redux';
import { ActionsTypes } from '.';
import { Restaurant } from '../models/Restaurant';

export interface FetchRestaurantsAction {
  type: ActionsTypes.FetchRestaurants,
  payload: Restaurant[];
}

export interface FetchSelectedRestaurantAction {
  type: ActionsTypes.FetchSelectedRestaurant,
  payload: Restaurant;
}

export const FetchRestaurants = () => async (dispatch: Dispatch) => {
  const { data } = await axios.get<Restaurant[]>('/api/restaurants');

  dispatch<FetchRestaurantsAction>({
    type: ActionsTypes.FetchRestaurants,
    payload: plainToClass(Restaurant, data),
  });
};

export const FetchSelectedRestaurant = (id: Guid) => async (dispatch: Dispatch) => {
  const { data } = await axios.get<Restaurant>(`/api/restaurants/${id}`);

  dispatch<FetchSelectedRestaurantAction>({
    type: ActionsTypes.FetchSelectedRestaurant,
    payload: plainToClass(Restaurant, data),
  });
};
