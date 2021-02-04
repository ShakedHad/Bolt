import React, { FC } from 'react';
import { Button, Layout, Menu } from 'antd';
import './App.css';

const { Header, Content, Footer } = Layout;

const App: FC = () => {
  return (
    <div className="App">
      <Layout>
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Content>
          Hello
        </Content>
      </Layout>
    </div>
  );
};

export default App;
