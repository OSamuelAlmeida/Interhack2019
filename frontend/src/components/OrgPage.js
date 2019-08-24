import React from 'react';
import { Row, Input } from 'antd';
import OrgList from './OrgList';

class OrgPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Row style={{textAlign: 'right'}}>
                    <Input.Search
                        placeholder="Pesquisar..."
                        style={{ width: 200 }}
                        onSearch={value => console.log(value)}
                    />
                </Row>

                <OrgList></OrgList>
            </React.Fragment>
        );
    }
}

export default OrgPage;