import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Progress } from 'antd';

class OrgCard extends React.Component {
    render() {
        return (
            <Link to="details/1">
                <Card title={this.props.title} style={{width: 300 }}>
                    <Progress percent={this.props.percent}/>
                </Card> 
            </Link>
        );
    }
}

export default OrgCard;