import React from 'react';
import { Link } from 'react-router-dom';
import { 
    Form, 
    Button, 
    Upload, 
    Icon,
    Input,
    message
} from 'antd';
import BackButton from './BackButton';

import './css/CustomForm.css';

const formItemLayout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 10 },
};

class Register extends React.Component {
    handleSubmit = (e) => {

    }

    render() {
        return (
            <React.Fragment>
                <BackButton to="/" />
                <div className="form-div">
                    <h1>Registrar</h1>
                    <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                        <Form.Item label="E-mail">
                            <Input /> 
                        </Form.Item> 
                        <Form.Item label="Senha">
                            <Input.Password name="password"/> 
                        </Form.Item> 
                        <Form.Item label="Confirmar senha">
                            <Input.Password name="confirm-password"/> 
                        </Form.Item> 

                        <Form.Item wrapperCol={{
                            sm: { span: 16, offset: 5 },
                        }} >
                            <Button style={{ width: '200px', height: '50px'}} type="primary" htmlType="submit" className="login-form-button">
                                Entrar
                            </Button> 
                        </Form.Item>
                    </Form>
                </div>
            </React.Fragment>
        );
    }
}

export default Register;