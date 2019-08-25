import React from 'react';
import axios from 'axios';
import { Card, Tabs, Typography, Progress, Button, Spin } from 'antd';
import './OrgDetails.css';

import BackButton from './BackButton';
import GoalsListPane from './GoalsListPane';
import GoalsProgress from './GoalsProgress';

const { TabPane } = Tabs;
const { Title, Paragraph } = Typography;


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
                    <TabPane tab="Desempenho" key="2">
                        <GoalsProgress group={this.state.group.id}/>
                    </TabPane>
                </Tabs>

            </div>
        );

        // return (this.state.isLoading ? <Spin /> : loadedPage);
    }
}

export default OrgDetails;