import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Progress } from 'antd';

class AddOrgCard extends React.Component {
    render() {
        return (
            <Link to="add-new-org/">
                <Card style={{width: 300, margin:'0 auto'}}>
                    <div className="custom-image">
                        <img alt="example" width="100%" height="200px" src={process.env.PUBLIC_URL + '/img/add.png'} />
                    </div>
                    <div className="custom-card">
                        <h3>Adicionar</h3>
                    </div>
                </Card>
            </Link>

        );
    }
}

export default AddOrgCard;