import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
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

const mapStateToProps = (state) => ({
    isLoggedIn: state.isLoggedIn,
    user: state.user
});


class LoginForm extends React.Component {
    state = {
        error: ''
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.form.validateFields((err, values) => {
            const email = values.email;
            const password = values.password;

            axios.get('http://172.26.135.171:8080/api/user/').then((res) => {
                const users = res.data;

                for (var i = 0; i < users.length; ++i) {
                    console.log(users[i].email);
                    console.log(email);
                    if (users[i].email == email) {
                        if (users[i].password == password) {
                            this.props.dispatch({type: 'LOGIN', user: users[i]});
                            this.props.push('/');
                        }
                        else {
                            this.setState({
                                ...this.setState,
                                error: 'Senha incorreta!'
                            })
                        }
                    }
                }
            });
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <div style={{width:'80%', margin:'0 10%'}}>
                <h2 style={{color: 'red'}}>{this.state.error}</h2>
                <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                    <Form.Item label="E-mail">
                        {getFieldDecorator('email', {
                            rules: [{ required: true, message: 'Por favor, insira o e-mail!' }],
                        })(
                        <Input name="email" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="E-mail" />,
                        )}
                    </Form.Item> 
                    <Form.Item label="Senha">
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Por favor, insira a senha!' }],
                        })(
                        <Input.Password name="password" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Senha" /> 
                        )}
                    </Form.Item> 

                    <Form.Item wrapperCol={{
                        sm: { span: 16, offset: 5 },
                    }} >
                        <Button style={{ width: '63%', height: '50px'}} type="primary" htmlType="submit" className="login-form-button">
                            Entrar
                        </Button> 
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

const WrappedLoginForm = Form.create({name: 'login_form'})(LoginForm);

class Login extends React.Component {
    render() {
        console.log(this.props.isLoggedIn);

        return (
            <React.Fragment>
                <div style={{width:'90%', margin:'0 auto'}}>
                    <BackButton to="/" />
                    <Card className="form-div" style={{ width: 'auto', marginTop:'40px', height:'300px' }}>
                        <h1>Entrar</h1>
                        <WrappedLoginForm dispatch={this.props.dispatch} push={this.props.history.push}/>
                    </Card>
                </div>
            </React.Fragment>
        );
    }
}

export default withRouter(connect(mapStateToProps)(Login));