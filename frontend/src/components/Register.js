import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { 
    Form,
    Select,
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

class RegisterForm extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();

        this.props.form.validateFields((err, values) => {
            console.log(values);
        });
    }

    handleChange = () => {

    }

    render() {
        return (                    
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
                <Form.Item label="Grupo">
                    <Select defaultValue="lucy" style={{ width: 120 }} onChange={this.handleChange}>
                        <Select.Option value="jack">Jack</Select.Option>
                        <Select.Option value="lucy">Lucy</Select.Option>
                        <Select.Option value="disabled" disabled>
                            Disabled
                        </Select.Option>
                        <Select.Option value="Yiminghe">yiminghe</Select.Option>
                    </Select>
                </Form.Item> 

                <Form.Item wrapperCol={{
                    sm: { span: 16, offset: 5 },
                }} >
                    <Button style={{ width: '200px', height: '50px'}} type="primary" htmlType="submit" className="login-form-button">
                        Entrar
                    </Button> 
                </Form.Item>
            </Form>
        );
    }
}

const WrappedRegisterForm = Form.create({name: 'register_form'})(RegisterForm);

class Register extends React.Component {

    render() {
        return (
            <React.Fragment>
                <BackButton to="/" />
                <div className="form-div">
                    <h1>Registrar</h1>
                    <WrappedRegisterForm/>
                </div>
            </React.Fragment>
        );
    }
}

export default Register;