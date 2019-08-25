import React, { Component } from 'react';
import Button from 'antd/es/button';
import './App.css';
import AppRouter from './AppRouter'

import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout className="layout" style={{minHeight:'100vh'}}>
          <AppRouter></AppRouter>
          <Footer style={{ textAlign: 'center', color: 'rgba(255, 255, 255, 0.65)', backgroundColor: '#001529'}}>USP &copy; Interhack 2019</Footer>
        </Layout>
      </div>
    );
  }
}

export default App;