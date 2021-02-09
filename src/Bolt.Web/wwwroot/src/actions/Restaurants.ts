import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionsTypes } from '.';
import { Restaurant } from '../models/Restaturant';

export interface FetchRestaurantsAction {
  type: ActionsTypes.FetchRestaurants,
  payload: Restaurant[];
}

export const FetchRestaurants = () => async (dispatch: Dispatch) => {
  const { data } = await axios.get<Restaurant[]>('/api/restaurants');

  dispatch<FetchRestaurantsAction>({
    type: ActionsTypes.FetchRestaurants,
    payload: data,
  });
};
