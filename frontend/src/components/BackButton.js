import { Link } from 'react-router-dom';
import { Button, Icon } from 'antd';
import React from 'react';

class BackButton extends React.Component {
    render() {
        return (
            <div style={{textAlign: 'left'}}>
                <Link to={this.props.to}>
                    <Button type="primary">
                        <Icon type="left" />
                            Voltar
                    </Button>
                </Link>
            </div>
        );
    } 
}

export default BackButton;