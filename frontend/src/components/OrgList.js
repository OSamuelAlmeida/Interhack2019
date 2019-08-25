import React from 'react';
import { Col, Row, Input, Typography } from 'antd';
import OrgCard from './OrgCard';
import AddOrgCard from './AddOrgCard';
import ExtendedCard from './ExtendedCard';

const { Title } = Typography;

class OrgList extends React.Component {
    render() {
        return (
            <div style={{width:'90%', margin:'0 auto'}}>

                <Row>
                    <Col span={16}>
                        <div style={{width:'90%', margin:'0 auto'}}>
                            <Title level={2} style={{float:'left'}}>Organizações em Destaque</Title>
                        </div>
                    </Col>
                    <Col span={8}></Col>
                </Row>

                <Row style={{marginTop:'20px'}}>
                    <Col span={24}>
                        <ExtendedCard id={1} title="CAASO" description="blablabla" percent={10} image="https://minervacaaso.files.wordpress.com/2017/02/logo_caaso_colegio.png?w=425&h=329"/>
                    </Col>
                </Row>

                <Row style={{marginTop:'20px'}}>
                    <Col span={24}>
                        <ExtendedCard id={1} title="CAASO" description="blablabla" percent={10} image="https://minervacaaso.files.wordpress.com/2017/02/logo_caaso_colegio.png?w=425&h=329"/>
                    </Col>
                </Row>

                <Row style={{marginTop:'20px'}}>
                    <Col span={24}>
                        <ExtendedCard id={1} title="CAASO" description="blablabla" percent={10} image="https://minervacaaso.files.wordpress.com/2017/02/logo_caaso_colegio.png?w=425&h=329"/>
                    </Col>
                </Row>

                <Row style={{marginTop:'70px'}}>
                    <Col span={16}>
                        <div style={{width:'90%', margin:'0 auto'}}>
                            <Title level={2} style={{float:'left'}}>Organizações do Campus</Title>
                        </div>
                    </Col>
                    <Col span={8}>
                        <div style={{width:'300px', margin:'0 auto', textAlign:'right'}}>
                            <Input.Search
                                placeholder="Pesquisar..."
                                style={{ width: 300, height:40 }}
                                onSearch={value => console.log(value)}
                            />
                        </div>
                    </Col>
                </Row>

                <Row style={{marginTop:'20px'}}>
                    <Col span={8}>
                        <OrgCard id={1} title="CAASO" percent={10} image="https://minervacaaso.files.wordpress.com/2017/02/logo_caaso_colegio.png?w=425&h=329"/>
                    </Col>
                    <Col span={8}>
                        <OrgCard id={2} title="Teste 2" percent={50}/>
                    </Col>
                    <Col span={8}>
                        <OrgCard id={3} title="Teste 3" percent={100}/>
                    </Col>
                </Row>
                <Row style={{marginTop:'50px'}}>
                    <Col span={8}>
                        <AddOrgCard/>
                    </Col>
                    <Col span={8}>
                        
                    </Col>
                    <Col span={8}>
                        
                    </Col>
                </Row>
            </div>
        );
    }
}

export default OrgList;