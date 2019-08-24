import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button, Layout, Menu, Icon } from 'antd';
import OrgPage from './components/OrgPage';
import OrgDetails from './components/OrgDetails';
import AddNewOrg from './components/AddNewOrg';
import Login from './components/Login';
import Register from './components/Register';
import './App.css';
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
              <Menu.Item key="1" style={{float: 'left'}}><Link to="/">Inicio</Link></Menu.Item>
              <Menu.Item key="2" style={{float: 'right' }}>
                <Link to="/login">
                  <Button type="primary" shape="round" id="btnEntrar">
                    Entrar
                  </Button>
                </Link>
              </Menu.Item>
              <Menu.Item key="3" style={{float: 'right'}}><Link to="/register">Registrar</Link></Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: '50px', backgroundColor: '#F0F0F0' }}>
            <Route path="/" exact component={OrgPage} />
            <Route path="/details/:id" exact component={OrgDetails} />
            <Route path="/add-new-org" exact component={AddNewOrg} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
          </Content>
      </Router>
    );
  }
  
  export default AppRouter;
  