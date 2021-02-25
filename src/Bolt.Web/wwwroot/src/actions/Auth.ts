import axios from 'axios';
import { plainToClass } from 'class-transformer';
import { Dispatch } from 'redux';
import { ActionsTypes } from './types';
import { User } from '../models/User';

export interface UserLoginAction {
  type: ActionsTypes.UserLogin,
  payload: User
}

export interface UserLogoutAction {
  type: ActionsTypes.UserLogout,
}

export const UserLogin = (tokenId: string) => async (dispatch: Dispatch) => {
  const { data } = await axios.post<User>('/api/Auth/google', { tokenId });
  const user = plainToClass(User, data);

  dispatch<UserLoginAction>({
    type: ActionsTypes.UserLogin,
    payload: user,
  });
};

export const UserLogout = () => {
  return {
    type: ActionsTypes.UserLogout,
  };
};
