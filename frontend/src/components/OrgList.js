import React from 'react';
import { Col, Row, Input } from 'antd';
import OrgCard from './OrgCard';
import AddOrgCard from './AddOrgCard';

class OrgList extends React.Component {
    render() {
        return (
            <div style={{width:'80%', margin:'0 10%'}}>

                <Row>
                    <Col span={8}><div style={{width:'300px'}}></div></Col>
                    <Col span={8}><div style={{width:'300px'}}></div></Col>
                    <Col span={8}>
                        <div style={{width:'300px', margin:'0 auto', textAlign:'right'}}>
                            <Input.Search
                                placeholder="Pesquisar..."
                                style={{ width: 200 }}
                                onSearch={value => console.log(value)}
                            />
                        </div>
                    </Col>
                </Row>
                <Row style={{marginTop:'50px'}}>
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