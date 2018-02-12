import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import {connect} from 'react-redux';
import {changeSelection} from '../../../AC';

class SelectFilter extends Component {

    static propTypes = {
        articles: PropTypes.object.isRequired
    };

    constructor(){
        super()
    }

    render(){
        const {articles, selected} = this.props;
        const options = Object.keys(articles).map(key => ({
            label: articles[key].title,
            value: articles[key].id
        }));

        return (<div>
                <Select options={options} value={selected} onChange={this.handleSelectionChange} multi/>
            </div>);
    }

    handleSelectionChange = selected => {
        const {changeSelection} = this.props;
        changeSelection(selected.map(option => option.value));
    };
}

export default connect((state => ({
    selected: state.filters.selected,
    articles: state.articles
})), {changeSelection})(SelectFilter);


