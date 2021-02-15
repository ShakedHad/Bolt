import React, { FC } from 'react';
import {
  Layout, Menu, Typography,
} from 'antd';
import './App.css';
import {
  BrowserRouter, Link, Route, Switch,
} from 'react-router-dom';
import 'reflect-metadata';
import Homepage from './Homepage';
import Restaurant from './Restaurant';

const { Header, Content } = Layout;
const { Title } = Typography;

const App: FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Header>
            <img className="logo" src="/logo_transparent.png" alt="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
              <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: '25px 50px', height: '100vh' }}>
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
