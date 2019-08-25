import React from 'react';
import { Row, Col, Input } from 'antd';
import OrgList from './OrgList';

class OrgPage extends React.Component {
    render() {
        return (
            <React.Fragment>
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
                <OrgList></OrgList>
            </React.Fragment>
        );
    }
}

export default OrgPage;