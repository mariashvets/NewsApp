import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ArticleList from './ArticleList';
import Charts from './Charts';
import UserForm from './UserForm';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class App extends Component {

    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    state = {
        counter: 0,
        selection: null
    };

    render(){

        const options = this.props.articles.map(article => ({
            label: article.title,
            value: article.id
        }));

        return <div>
            <Select options={options} value={this.state.selection} onChange={this.handleSelectionChange} multi/>
            <a href="#" onClick={this.updateCounter}>update chart</a>
            <UserForm/>
            <ArticleList articles={this.props.articles} />
            <Charts articles={this.props.articles} key={this.state.counter}/>
        </div>

    }

    updateCounter  = ev => {
        ev.preventDefault();
        this.setState({
            counter: this.state.counter + 1
        });
    };

    handleSelectionChange = selection => {this.setState({selection})};

}

export default App;
