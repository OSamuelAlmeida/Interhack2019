import React from 'react';
import axios from 'axios';
import { Card, Spin } from 'antd';

class GoalsListPane extends React.Component {
    state = {
        isLoading: true,
        metas: null
    }

    componentDidMount() {
        axios.get('http://172.26.135.171:8080/api/meta/').then(res => {
            const all_metas = res.data;
            const group_id = this.props.group;
            var metas = []

            for (var i = 0; i < all_metas.length; ++i) {
                if (all_metas[i].group == group_id) {
                    metas.push(all_metas[i]);
                }
            }

            this.setState({
                ...this.state,
                metas: metas,
                isLoading: false
            });
            
            console.log(metas);
        });
    }

    getExtras(status) {
        switch(status) {
            case 1:
                return "Pendente";
            case 2:
                return "Andamento";
            case 3:
                return "Concluída";
            case 4:
                return "Cancelada";
        }
    }

    getClassName(status) {
        switch(status) {
            case 1:
                return "Meta Meta-Pendente"
            case 2:
                return "Meta Meta-Andamento"
            case 3:
                return "Meta Meta-Concluida"
            case 4:
                return "Meta"
        }
    }

    render() {
        const getPage = () => {
            var cards = this.state.metas.map((meta, i) => <Card key={i} title={meta.title} extra={this.getExtras(meta.status)} headStyle={{color: '#FFF'}} className={this.getClassName(meta.status)}>{meta.description}</Card>);

            if (!cards.length) {
                cards = <h2>Sem metas</h2>;
            }

            return cards;
        };

        return this.state.isLoading ? <Spin /> : (
            <div>
                {getPage()}
            </div>
        );
    }
}

export default GoalsListPane;