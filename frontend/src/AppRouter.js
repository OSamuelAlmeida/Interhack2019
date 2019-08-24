import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from 'antd';
import OrgList from './components/OrgList';
import OrgDetails from './components/OrgDetails';
const { Header, Content, Footer } = Layout;

function AppRouter() {
    return (
        <Router>
          <Header>
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['1']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1"><Link to="/">Inicio</Link></Menu.Item>
              <Menu.Item key="2"><Link to="/details">Detalhes</Link></Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: '0 50px' }}>
            <Route path="/" exact component={OrgList} />
            <Route path="/details" exact component={OrgDetails} />
          </Content>
      </Router>
    );
  }
  
  export default AppRouter;
  