import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Progress } from 'antd';

class OrgCard extends React.Component {
    render() {
        if (!this.props.image) {
            var image = process.env.PUBLIC_URL + '/img/no-image.jpeg';
        }
        else {
            image = this.props.image;
        }

        return (
            <Link to={"details/" + this.props.id}>
                <Card style={{width: 300, margin:'0 auto'}}>
                    <div className="custom-image">
                        <img alt="example" width="100%" height="200px" src={image} />
                    </div>
                    <div className="custom-card">
                        <h3>{this.props.title}</h3>
                    </div>
                    <Progress percent={this.props.percent}/>
                </Card> 
            </Link>
        );
    }
}

export default OrgCard;