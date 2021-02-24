import { ActionsTypes, AuthAction } from '../actions';
import { User } from '../models/User';

export const authReducer = (state : User = new User(), action : AuthAction) => {
  switch (action.type) {
    case ActionsTypes.UserLogin:
      return action.payload;
    case ActionsTypes.UserLogout:
      return new User();
    default:
      return state;
  }
};
