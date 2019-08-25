import React from 'react';
import axios from 'axios';
import { Card, Tabs, Typography, Progress, Button, Spin, Form, Input, Select } from 'antd';
import './OrgDetails.css';

import BackButton from './BackButton';
import GoalsListPane from './GoalsListPane';
import GoalsProgress from './GoalsProgress';

const { TabPane } = Tabs;
const { Title, Paragraph } = Typography;
const formItemLayout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 10 },
};

class MetaForm extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();

        this.props.form.validateFields((err, values) => {
            axios.post('http://172.26.135.171:8080/api/meta/', {
                title: values.titulo,
                description: values.descricao,
                group: this.props.id,
                status: values.status
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        });
    }

    handleChange = () => {

    }

    render() {

        const { getFieldDecorator } = this.props.form;

        return (                    
            <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                <Form.Item label="Titulo">
                    {getFieldDecorator('titulo', {
                        rules: [{ required: true, message: 'Por favor, insira um titulo!' }],
                    })(
                        <Input name="titulo" placeholder="Título" style={{margin:0, height:'40px'}} />
                    )}
                </Form.Item>
                <Form.Item label="Descrição">
                    {getFieldDecorator('descricao', {
                        rules: [{ required: true, message: 'Por favor, insira uma descrição!' }],
                    })(
                        <Input name="descricao" placeholder="Descrição" style={{margin:0, height:'40px'}} />
                    )}
                </Form.Item>

                <Form.Item label="Situação">
                    {getFieldDecorator('status', {
                        rules: [{ required: true, message: 'Favor selecionar um status!' }],
                    })(
                        <Select name="status" defaultValue="1" style={{ width: 120 }} onChange={this.handleChange}>
                            <Select.Option value="1">Pendente</Select.Option>
                            <Select.Option value="3">Concluída</Select.Option>
                            <Select.Option value="2">Em andamento</Select.Option>
                            <Select.Option value="4">Cancelada</Select.Option>
                        </Select>
                    )}
                </Form.Item> 

                <Form.Item wrapperCol={{
                    sm: { span: 16, offset: 5 },
                }} >
                    <Button style={{ width: '62.5%', height: '50px'}} type="primary" htmlType="submit" className="login-form-button">
                        Adicionar
                    </Button> 
                </Form.Item>
            </Form>
        );
    }
}

const WrappedMetaForm = Form.create({name: 'meta_form'})(MetaForm);

class OrgDetails extends React.Component {

    state = {
        group: null,
        goals: null,
        isLoading: true 
    }

    componentDidMount() {
        const group_id = this.props.match.params.id;
        axios.get('http://172.26.135.171:8080/api/group/' + group_id + '/').then( res => {
            const group = res.data;

            this.setState({
                group: group,
                isLoading: false,
            });
        });

    }

    render() {
        return this.state.isLoading ? <Spin/> : (
            <div style={{width:'90%', margin:'0% auto'}}>
                <BackButton to="/" />
                <Card
                    hoverable
                    style={{ width: 'auto', marginTop:'40px' }}
                    cover={<img alt="example" style={{maxWidth:250, maxHeight: 350, float:'left', padding: '50px 20px'}} src={this.state.group.logo_url} />}
                >
                    <div style={{marginTop:'26px', width:'75%', height:250, display: 'inline-block', textAlign:'left'}}>
                        <div style={{display:'inline-block'}}>
                            <Title level={2} style={{float:'left'}}>{this.state.group.name}</Title>
                            <Button href={"mailto:" + this.state.group.email} type="primary" shape="round" icon="mail" style={{float:'right', marginTop: 5, position:'absolute', right:30, height:40, paddingTop:3}}>
                                Enviar email
                            </Button>
                        </div>
                        <Paragraph ellipsis={{ rows: 9, expandable: true }}>
                            {this.state.group.description}
                        </Paragraph>
                    </div>
                    
                </Card>

                <Tabs defaultActiveKey="1" style={{backgroundColor: '#FFF', width: 'auto', marginTop:'40px'}}>
                    <TabPane tab="Metas" key="1">
                        <GoalsListPane group={this.state.group.id} />
                    </TabPane>
                    <TabPane tab="Adicionar Meta" key="2">
                        <h2>Adicionar meta</h2>
                        <br />
                        <WrappedMetaForm id={this.props.match.params.id} />
                    </TabPane>
                    <TabPane tab="Desempenho" key="3">
                        <GoalsProgress group={this.state.group.id}/>
                    </TabPane>
                </Tabs>

            </div>
        );

        // return (this.state.isLoading ? <Spin /> : loadedPage);
    }
}

export default OrgDetails;