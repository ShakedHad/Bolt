import React, { FC } from 'react';
import {
  Button,
  Col,
  Layout, Menu, Row, Typography,
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
import Homepage from './Homepage';
import Restaurant from './Restaurant';

const { Header, Content } = Layout;

const Logo = styled.img`
  height: 64px;
`;

const App: FC = () => {
  const onLoginSuccess = (res : GoogleLoginResponse | GoogleLoginResponseOffline) => {
    if ('googleId' in res) {
      axios.post('', { tokenId: res.tokenId });
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
