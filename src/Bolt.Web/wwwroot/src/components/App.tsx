import React, { FC, useState } from 'react';
import {
  Avatar,
  Button,
  Col,
  Layout, Menu, Row, Space, Typography,
} from 'antd';
import './App.css';
import {
  BrowserRouter, Link, Route, Switch,
} from 'react-router-dom';
import 'reflect-metadata';
import GoogleLogin, { GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import axios from 'axios';
import { plainToClass } from 'class-transformer';
import Homepage from './Homepage';
import Restaurant from './Restaurant';
import { User } from '../models/User';

const { Header, Content } = Layout;
const { Text } = Typography;

const Logo = styled.img`
  height: 64px;
`;

const WhiteText = styled(Text)`
  color: white
`;

const App: FC = () => {
  const [loggedUser, setLoggedUser] = useState<User>();

  const onLoginSuccess = async (res : GoogleLoginResponse | GoogleLoginResponseOffline) => {
    if ('googleId' in res) {
      const { data } = await axios.post<User>('/api/Auth/google', { tokenId: res.tokenId });
      const user = plainToClass(User, data);
      setLoggedUser(user);
    }
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Header>
            <Row justify="space-around">
              <Col xs={6} sm={6} md={4} lg={4} xl={3} xxl={2}>
                <Logo src="/logo_transparent.png" alt="logo" />
              </Col>
              <Col xs={6} sm={14} md={16} lg={16} xl={18} xxl={16}>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                  <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
                </Menu>
              </Col>
              {
                !loggedUser
                  ? (
                    <Col xs={4} sm={4} md={4} lg={4} xl={4} xxl={4}>
                      <GoogleLogin
                        clientId="489163125564-u2h253prvg1tg3tlfq712gfmijkjsrcv.apps.googleusercontent.com"
                        render={
                          (props) => (
                            <Button onClick={props.onClick} disabled={props.disabled} icon={<FontAwesomeIcon icon={faGoogle} />}>Login With Google</Button>
                          )
                        }
                        onSuccess={onLoginSuccess}
                      />
                    </Col>
                  )
                  : (
                    <Col xs={4} sm={4} md={4} lg={4} xl={4} xxl={4}>
                      <Space direction="horizontal">
                        <WhiteText>{`Hello ${loggedUser.firstName} ${loggedUser.lastName}`}</WhiteText>
                        <Avatar src={loggedUser.imageUrl} />
                      </Space>
                    </Col>
                  )
              }

            </Row>
          </Header>
          <Content style={{ padding: '25px 50px', minHeight: 'calc(100vh - 64px)' }}>
            <Switch>
              <Route path="/restaurant/:id">
                <Restaurant />
              </Route>
              <Route path="/">
                <Homepage />
              </Route>
            </Switch>
          </Content>
        </Layout>
      </BrowserRouter>
    </div>
  );
};

export default App;
