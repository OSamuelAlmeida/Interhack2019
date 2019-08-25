import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from 'react-redux';
import { Button, Layout, Menu, Icon, Switch } from 'antd';
import Intro from './components/Intro';
import OrgPage from './components/OrgPage';
import OrgDetails from './components/OrgDetails';
import AddNewOrg from './components/AddNewOrg';
import Login from './components/Login';
import Register from './components/Register';
import './App.css';
const { Header, Content, Footer } = Layout;

function AppRouter(props) {
    return (
        <Router>
          <Route path="/intro" exact component={Intro}></Route>
          <Header>
            <div style={{width:'93%', margin:'0 auto'}}>
              <Link to="/">
                <div className="logo">
                  <img src={process.env.PUBLIC_URL + '/img/logo.png'}/>
                </div>
              </Link>
              <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['1']}
                style={{ lineHeight: '64px' }}
              >
                <Menu.Item key="1" style={{float: 'left'}}><Link to="/">Inicio</Link></Menu.Item>
                {props.isLoggedIn ? <div style={{float: 'right'}} key="2" disabled={true}>Bem vindo, {props.user.username}</div> : 
                (<Menu.Item key="2" style={{float: 'right' }}>
                  <Link to="/login">
                    <Button type="primary" shape="round" id="btnEntrar">
                      Entrar
                    </Button>
                  </Link>
                </Menu.Item>)
                }
              </Menu>
            </div>
          </Header>
          <Content style={{ padding: '50px', backgroundColor: '#F0F0F0' }}>
            <Route path="/" exact component={OrgPage} />
            <Route path="/details/:id" exact component={OrgDetails} />
            <Route path="/add-new-org" exact component={AddNewOrg} />
            <Route path="/login" exact component={Login} />
            <Route path="/register/:id" exact component={Register} />
          </Content>
      </Router>
    );
}

const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn,
  user: state.user
});
  
  export default connect(mapStateToProps)(AppRouter);
  