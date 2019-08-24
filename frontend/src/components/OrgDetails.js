import React from 'react';
import { Card, Tabs, Typography, Progress, Button } from 'antd';
import './OrgDetails.css';

const { TabPane } = Tabs;
const { Title, Paragraph } = Typography;

class OrgDetails extends React.Component {
    render() {
        return (
            <div style={{width:'80%', margin:'0% 10%'}}>
                <Card
                    hoverable
                    style={{ width: 'auto', marginTop:'40px' }}
                    cover={<img alt="example" style={{maxWidth:250, maxHeight: 350, float:'left', padding: '50px 20px'}} src="https://bixo.saecomp.com.br/img/extra/e3.png" />}
                >
                    <div style={{marginTop:'26px', width:'75%', height:250, display: 'inline-block', textAlign:'left'}}>
                        <div style={{display:'inline-block'}}>
                            <Title level={2} style={{float:'left'}}>Bandejovis</Title>
                            <Button href="mailto:mail@example.com" type="primary" shape="round" icon="mail" style={{float:'right', marginTop: 5, position:'absolute', right:30, height:40, paddingTop:3}}>
                                Enviar email
                            </Button>
                        </div>
                        <Paragraph ellipsis={{ rows: 9, expandable: true }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac ultrices nisi. In nec blandit nibh, ut malesuada est. Nulla facilisi. Praesent ut justo suscipit, consectetur lorem auctor, blandit nisl. Donec dapibus dolor quis massa maximus fermentum. Nunc pharetra orci velit, sit amet sodales mi accumsan non. Fusce tempor, sapien eget convallis auctor, tortor nunc tincidunt ligula, ac rutrum ante mi vitae lectus. Nam nec euismod est. Maecenas accumsan id dui non dignissim. Etiam eu nulla ac lectus lacinia ultricies a nec turpis. Maecenas ac diam felis.Etiam dictum in felis vitae porttitor. Nulla nec imperdiet erat. Fusce porttitor odio vel euismod tincidunt. Cras tincidunt efficitur ex venenatis bibendum. Fusce sed purus enim. In sit amet laoreet massa. Ut ultricies euismod purus eu tincidunt. Pellentesque hendrerit hendrerit volutpat. Pellentesque ac suscipit risus, nec pellentesque leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                        </Paragraph>
                    </div>
                    
                </Card>

                <Tabs defaultActiveKey="1" style={{backgroundColor: '#FFF', width: 'auto', marginTop:'40px'}}>
                    <TabPane tab="Metas" key="1">
                        <Card title="Meta 1" extra="Concluída" bordered={false} headStyle={{color:'#FFF'}} className="Meta Meta-Concluida">asd</Card>
                        <Card title="Meta 2" extra="Em andamento" bordered={false} className="Meta Meta-Andamento">asd</Card>
                        <Card title="Meta 4" extra="Pendente" bordered={false} className="Meta Meta-Pendente">asd</Card>
                        <Card title="Meta 3" extra="Cancelada" bordered={false} headStyle={{color:'#FFF'}} className="Meta Meta-Cancelada">asd</Card>
                    </TabPane>
                    <TabPane tab="Desempenho" key="2">
                        <div style={{margin:'20px 0 50px 0'}}>
                            <h1>Metas Concluídas</h1>
                            <Progress type="circle" percent={25} />
                        </div>
                    </TabPane>
                </Tabs>

            </div>
        );
    }
}

export default OrgDetails;