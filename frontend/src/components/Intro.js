import React, { Component } from 'react';
import Background from "../bg.png";
import { Layout, Menu, Breadcrumb, Typography, Button } from 'antd';

const { Title } = Typography;

const { Header, Content, Footer } = Layout;

class Intro extends Component {
  render() {
    return (
      <div className="Intro">
        <Layout className="layout" style={{minHeight:'100vh', backgroundImage: `url(${Background})`, backgroundPosition:'center center', backgroundSize: 'cover'}}>

            <div style={{marginTop:'190px'}}>
                <center>
                    <Title level={1} style={{fontSize:60, color:'white'}}><strong>QUARTZ</strong></Title>
                    <hr style={{color:'white', width:'50px'}}></hr>
                    <p style={{color:'white', fontSize:24, marginTop:20}}>
                        Transparência é um tesão, meu pau na tua mão c:
                    </p>
                    <Button type="primary" style={{width:'280px', height:'60px', fontSize:22}}>Comece a usar agora!</Button>
                </center>
            </div>

        </Layout>
      </div>
    );
  }
}

export default Intro;