import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import {connect} from 'react-redux';
import {changeSelection} from '../../../AC';
import {mapToArray} from '../../../utils';

class SelectFilter extends Component {

    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    constructor(){
        super()
    }

    render(){
        const {articles, selected} = this.props;
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
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
    articles: mapToArray(state.articles.entities)
})), {changeSelection})(SelectFilter);


