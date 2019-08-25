import React from 'react';
import { Row, Col, Input } from 'antd';
import OrgList from './OrgList';

class OrgPage extends React.Component {
    render() {
        return (
            <React.Fragment>
               <OrgList></OrgList>
            </React.Fragment>
        );
    }
}

export default OrgPage;