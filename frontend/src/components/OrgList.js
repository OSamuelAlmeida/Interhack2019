import React from 'react';
import { connect } from 'react-redux';
import { Col, Row, Input, Typography, Spin } from 'antd';
import axios from 'axios';
import OrgCard from './OrgCard';
import AddOrgCard from './AddOrgCard';
import ExtendedCard from './ExtendedCard';

const { Title } = Typography;

class OrgList extends React.Component {
    state = {
        isLoading: true, 
        groups: null,
        groupsPercent: [],
        topGroups: [],
        topPercents: []
    }

    componentDidMount() {
        var groups = [];
        var groupsPercent = []
        var topGroups = []
        var topPercent = []

        axios.all([
            axios.get('http://172.26.135.171:8080/api/group/'),
            axios.get('http://172.26.135.171:8080/api/meta/'),
            axios.get('http://172.26.135.171:8080/api/group/count/')
        ]).then(axios.spread((groupsData, metasData, topData) => {
            groups = groupsData.data;
            topGroups = topData.data;

            const all_metas = metasData.data;

            for (var i = 0; i < topGroups.length; ++i) {
                var group_id = topGroups[i].id;
                var metasCount = 0;
                var metasCompleted = 0;
    
                for (var j = 0; j < all_metas.length; ++j) {
                    if (all_metas[j].group == group_id) {
                        metasCount++;
    
                        if (all_metas[j].status == 3) {
                            metasCompleted++;
                        }
                    }
                }

                var metasPercent = 0;
    
                if (metasCount > 0) {
                    metasPercent = metasCompleted / metasCount * 100;
                }

                topPercent.push(metasPercent);
            }

            for (var i = 0; i < groups.length; ++i) {
                var group_id = groups[i].id;
                var metasCount = 0;
                var metasCompleted = 0;
    
                for (var j = 0; j < all_metas.length; ++j) {
                    if (all_metas[j].group == group_id) {
                        metasCount++;
    
                        if (all_metas[j].status == 3) {
                            metasCompleted++;
                        }
                    }
                }

                var metasPercent = 0;
    
                if (metasCount > 0) {
                    metasPercent = metasCompleted / metasCount * 100;
                }

                groupsPercent.push(metasPercent);
            }

            this.setState({
                ...this.state,
                isLoading: false,
                groups: groups,
                groupsPercent: groupsPercent,
                topGroups: topGroups,
                topPercent: topPercent,
            });
        }));
    }

    onSearch = (value) => {
        var groups = [];
        var groupsPercent = []

        axios.all([
            axios.get('http://172.26.135.171:8080/api/group/?search=' + value),
            axios.get('http://172.26.135.171:8080/api/meta/'),
        ]).then(axios.spread((groupsData, metasData, topData) => {
            groups = groupsData.data;

            const all_metas = metasData.data;

            for (var i = 0; i < groups.length; ++i) {
                var group_id = groups[i].id;
                var metasCount = 0;
                var metasCompleted = 0;
    
                for (var j = 0; j < all_metas.length; ++j) {
                    if (all_metas[j].group == group_id) {
                        metasCount++;
    
                        if (all_metas[j].status == 3) {
                            metasCompleted++;
                        }
                    }
                }

                var metasPercent = 0;
    
                if (metasCount > 0) {
                    metasPercent = metasCompleted / metasCount * 100;
                }

                groupsPercent.push(metasPercent);
            }

            this.setState({
                ...this.state,
                isLoading: false,
                groups: groups,
                groupsPercent: groupsPercent
            });
        }));

    }

    render() {
        const getPage = () => {

            const getRows = () => {
                var columns = [];
                var currentIndex = 0;
                var rowsCount = 1


                while (currentIndex < this.state.groups.length) {
                    if (currentIndex % 3 == 0) {
                        rowsCount++;
                    }

                    var column = (
                        <Col key={currentIndex} span={8}>
                            <OrgCard id={this.state.groups[currentIndex].id} key={currentIndex} title={this.state.groups[currentIndex].name} percent={this.state.groupsPercent[currentIndex]} image={this.state.groups[currentIndex].logo_url}/>
                        </Col>
                    );
                    
                    columns.push(column);
                    currentIndex++;

                    if (this.props.isLoggedIn && currentIndex + 1 > this.state.groups.length) {
                        if ((currentIndex + 1) % 3 == 0) {
                            rowsCount++;
                        }

                        columns.push(
                        <Col key={currentIndex} span={8}>
                            <AddOrgCard />
                        </Col>);
                    }
                }

                var rows = [];
                currentIndex = 0;

                for (var i = 0; i < rowsCount; ++i) {
                    var currentColumns = [];

                    for (var j = 0; j < 3; ++j) {
                        currentColumns.push(columns[currentIndex]);
                        currentIndex++;
                    }

                    rows.push(
                        <Row style={{marginTop:'50px'}}>
                            {currentColumns}
                        </Row>
                    );
                }

                return rows;
            };
            const topThree = () => { return (
            <div style={{width:'90%', margin:'0 auto'}}>

            <Row>
                <Col span={16}>
                    <div style={{width:'90%', margin:'0 auto'}}>
                        <Title level={2} style={{float:'left'}}>Organizações em Destaque</Title>
                    </div>
                </Col>
                <Col span={8}></Col>
            </Row>

            <Row style={{marginTop:'20px'}}>
                <Col span={24}>
                    <ExtendedCard id={this.state.topGroups[0].id} title={this.state.topGroups[0].name}  percent={parseInt(this.state.topPercent[0])} image={this.state.topGroups[0].logo_url }/>
                </Col>
            </Row>

            <Row style={{marginTop:'20px'}}>
                <Col span={24}>
                    <ExtendedCard id={this.state.topGroups[1].id} title={this.state.topGroups[1].name}  percent={parseInt(this.state.topPercent[1])} image={this.state.topGroups[1].logo_url }/>
                </Col>
            </Row>

            <Row style={{marginTop:'20px'}}>
                <Col span={24}>
                    <ExtendedCard id={this.state.topGroups[2].id} title={this.state.topGroups[2].name}  percent={parseInt(this.state.topPercent[2])} image={this.state.topGroups[2].logo_url }/>
                </Col>
            </Row>

            <Row style={{marginTop:'70px'}}>
                <Col span={16}>
                    <div style={{width:'90%', margin:'0 auto'}}>
                        <Title level={2} style={{float:'left'}}>Organizações do Campus</Title>
                    </div>
                </Col>
                <Col span={8}>
                    <div style={{width:'300px', margin:'0 auto', textAlign:'right'}}>
                        <Input.Search
                            placeholder="Pesquisar..."
                            style={{ width: 300, height:40 }}
                            onSearch={this.onSearch}
                        />
                    </div>
                </Col>
            </Row>
            {getRows()}

        </div>)};


            return topThree();
        };


        return this.state.isLoading ? <Spin /> : getPage();
    };
}

const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn,
  user: state.user
});


export default connect(mapStateToProps)(OrgList);