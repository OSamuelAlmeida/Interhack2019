import React from 'react';
import axios from 'axios';
import { Col, Row, Input, Spin } from 'antd';
import OrgCard from './OrgCard';
import AddOrgCard from './AddOrgCard';

class OrgList extends React.Component {
    state = {
        isLoading: true, 
        groups: null,
        groupsPercent: []
    }

    componentDidMount() {
        var groups = null;
        var groupsPercent = []

        axios.all([
            axios.get('http://172.26.135.171:8080/api/group/'),
            axios.get('http://172.26.135.171:8080/api/meta/')
        ]).then(axios.spread((groupsData, metasData) => {
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

            return getRows();
        };


        return this.state.isLoading ? <Spin /> : getPage();
    };
}

export default OrgList;