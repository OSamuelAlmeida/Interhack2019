import React from 'react';
import { Col, Row } from 'antd';
import OrgCard from './OrgCard';

class OrgList extends React.Component {
    render() {
        return (
            <div style={{margin: '50px'}}>
                <Row gutter={16}>
                    <Col span={8}>
                        <OrgCard title="Teste" percent={10}/>
                   </Col>
                    <Col span={8}>
                        <OrgCard title="Teste 2" percent={50}/>
                   </Col>
                    <Col span={8}>
                        <OrgCard title="Teste 3" percent={100}/>
                   </Col>
                </Row>
            </div>
        );
    }
}

export default OrgList;