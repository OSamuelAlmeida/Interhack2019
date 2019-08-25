import React from 'react';
import { Link } from 'react-router-dom';
import { 
    Form, 
    Button, 
    Upload, 
    Icon,
    Input,
    message,
    Card
} from 'antd';
import BackButton from './BackButton';

import './css/CustomForm.css';

const formItemLayout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 10 },
};

class Login extends React.Component {
    handleSubmit = (e) => {

    }

    render() {
        return (
            <React.Fragment>
                <div style={{width:'80%', margin:'0% 10%'}}>
                    <BackButton to="/" />
                    <Card className="form-div" style={{ width: 'auto', marginTop:'40px', height:'300px' }}>
                        <h1>Entrar</h1>
                        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                            <Form.Item label="E-mail">
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="E-mail" /> 
                            </Form.Item> 
                            <Form.Item label="Senha">
                                <Input.Password prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Senha" /> 
                            </Form.Item> 

                            <Form.Item wrapperCol={{
                                sm: { span: 16, offset: 5 },
                            }} >
                                <Button style={{ width: '200px', height: '50px', float:'right'}} type="primary" htmlType="submit" className="login-form-button">
                                    Entrar
                                </Button> 
                            </Form.Item>
                        </Form>
                    </Card>
                </div>
            </React.Fragment>
        );
    }
}

export default Login;