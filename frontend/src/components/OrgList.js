import React from 'react';
import { Col, Row } from 'antd';
import OrgCard from './OrgCard';
import AddOrgCard from './AddOrgCard';

class OrgList extends React.Component {
    render() {
        return (
            <div>
                <Row style={{margin: '50px'}} gutter={16}>
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
                <Row style={{margin: '50px'}} gutter={16}>
                    <Col span={8}>
                        <AddOrgCard/>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default OrgList;