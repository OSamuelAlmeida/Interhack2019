import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Progress, Typography } from 'antd';

const { Title } = Typography;

class ExtendedCard extends React.Component {
    render() {
        if (!this.props.image) {
            var image = process.env.PUBLIC_URL + '/img/no-image.jpeg';
        }
        else {
            image = this.props.image;
        }

        return (
            <Link to={"details/" + this.props.id}>
                <Card style={{width: '93.5%', margin:'0 auto'}}>
                    <div className="custom-image">
                        <img alt="example" height="80px" style={{float:'left', marginBottom:'10px'}} src={image} />
                    </div>
                    <div className="custom-card" style={{float:'left'}}>
                        <Title level={4} style={{float:'left', marginLeft:'20px'}}>{this.props.title}</Title>
                        <p style={{marginLeft:'10px'}}>{this.props.description}</p>
                    </div>
                    <Progress percent={this.props.percent}/>
                </Card> 
            </Link>
        );
    }
}

export default ExtendedCard;