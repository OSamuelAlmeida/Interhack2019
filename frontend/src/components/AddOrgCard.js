import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Progress, Button } from 'antd';

class AddOrgCard extends React.Component {
    render() {
        return (
            <Link to="add-new-org/">
                <Card style={{width: 300, margin:'0 auto', backgroundColor:'rgba(0, 173, 193, .8)'}}>
                    <div className="custom-image">
                        <Button shape="circle" icon="plus" style={{fontSize:'62px', height:'150px', width:'150px', backgroundColor:'#fff', color:'rgb(0, 173, 193)'}} />
                    </div>
                    <div className="custom-card">
                        <h3 style={{ color:'#fff'}}><b>Criar nova Organização</b></h3>
                    </div>
                </Card>
            </Link>

        );
    }
}

export default AddOrgCard;