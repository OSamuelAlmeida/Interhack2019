import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from 'antd';
import OrgPage from './components/OrgPage';
import OrgDetails from './components/OrgDetails';
import AddNewOrg from './components/AddNewOrg';
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
              <Menu.Item key="2"><Link to="/details/1">Detalhes</Link></Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: '50px', backgroundColor: '#F0F0F0' }}>
            <Route path="/" exact component={OrgPage} />
            <Route path="/details/:id" exact component={OrgDetails} />
            <Route path="/add-new-org" exact component={AddNewOrg} />
          </Content>
      </Router>
    );
  }
  
  export default AppRouter;
  