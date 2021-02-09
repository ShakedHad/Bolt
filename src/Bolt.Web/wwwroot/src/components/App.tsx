import React, { FC } from 'react';
import {
  Button, Layout, Menu, Typography,
} from 'antd';
import './App.css';
import RestaurantsList from './RestaurantsList';
import 'reflect-metadata';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

const App: FC = () => {
  return (
    <div className="App">
      <Layout>
        <Header>
          {/* <div className="logo" /> */}
          <img className="logo" src="./logo_transparent.png" alt="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '25px 50px', height: '100vh' }}>
          <Title>What&apos;s for dinner tonight?</Title>
          <RestaurantsList />
        </Content>
      </Layout>
    </div>
  );
};

export default App;
