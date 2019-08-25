import React from 'react';
import axios from 'axios';
import { Progress, Spin } from 'antd';

class GoalsProgress extends React.Component {
    state = {
        isLoading: true,
        hasMetas: false,
        metasPercent: null
    }

    componentDidMount() {
        axios.get('http://172.26.135.171:8080/api/meta/').then(res => {
            const all_metas = res.data;
            const group_id = this.props.group;
            var metasCount = 0;
            var metasCompleted = 0;
            var hasMetas = false;

            for (var i = 0; i < all_metas.length; ++i) {
                if (all_metas[i].group == group_id) {
                    metasCount++;

                    if (all_metas[i].status == 3) {
                        metasCompleted++;
                    }
                }
            }

            if (metasCount > 0) {
                hasMetas = true;
            }

            this.setState({
                ...this.state,
                metasPercent: metasCompleted / metasCount * 100,
                hasMetas: hasMetas,
                isLoading: false
            });
        });
    }


    render() {
        const getPage = () => {
            return !this.state.hasMetas ? (<h2>Sem metas</h2> ) : (
                <div style={{margin:'20px 0 50px 0'}}>
                    <h1>Metas Concluídas</h1>
                    <Progress type="circle" percent={this.state.metasPercent} />
                </div>
            );
        }

        return this.state.isLoading ? <Spin/> : getPage();
    }
}

export default GoalsProgress;