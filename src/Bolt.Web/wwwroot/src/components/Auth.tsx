import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Button, Dropdown, Menu, Space, Typography,
} from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import React, { FC } from 'react';
import GoogleLogin, {
  GoogleLoginResponse, GoogleLoginResponseOffline, GoogleLogout, useGoogleLogout,
} from 'react-google-login';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Guid } from 'guid-typescript';
import { faArrowDown, faSignOutAlt, faSortDown } from '@fortawesome/free-solid-svg-icons';
import { StoreState } from '../reducers';
import { UserLogout, UserLogin } from '../actions';

const { Text } = Typography;

const Auth: FC = () => {
  const dispatch = useDispatch();
  const loggedUser = useSelector((state: StoreState) => state.user);

  const onLoginSuccess = async (res : GoogleLoginResponse | GoogleLoginResponseOffline) => {
    if ('googleId' in res) {
      dispatch(UserLogin(res.tokenId));
    }
  };

  const onLogoutClick = () => {
    signOut();
  };

  const onLogoutSuccess = () => {
    dispatch(UserLogout());
  };

  const { signOut } = useGoogleLogout({ clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID ?? '', onLogoutSuccess });

  console.log(process.env);

  return (
    <>
      {
        loggedUser.id.isEmpty()
          ? (
            <GoogleLogin
              clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID ?? ''}
              render={
                  (props) => (
                    <Button onClick={props.onClick} disabled={props.disabled} icon={<FontAwesomeIcon icon={faGoogle} />}>Login With Google</Button>
                  )
                }
              onSuccess={onLoginSuccess}
            />
          )
          : (
            <Space direction="horizontal">
              <Avatar src={loggedUser.imageUrl} />
              <Dropdown overlay={(
                <Menu>
                  <Menu.Item onClick={onLogoutClick}>Logout</Menu.Item>
                </Menu>
              )}
              >
                <FontAwesomeIcon icon={faSortDown} color="white" />
              </Dropdown>
            </Space>
          )
      }
    </>
  );
};

export default Auth;
