import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ArticleList from '../ArticleList';
import Charts from '../Charts';
import UserForm from '../UserForm';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import Counter from '../Counter';

class App extends Component {

    static propTypes = {
    };

    state = {
        counter: 0,
        selection: null,
    };

    render(){

        // const options = this.props.articles.map(article => ({
        //     label: article.title,
        //     value: article.id
        // }));

        return <div>
            <Counter/>
            <h3>Hello world!</h3>
            {/*<Select options={options} value={this.state.selection} onChange={this.handleSelectionChange} multi/>*/}
            <a href="#" onClick={this.updateCounter}>update chart</a>
            <UserForm/>
            <ArticleList/>
            <Charts articles={[]} key={this.state.counter}/>
        </div>

    }

    onChange = date => {
        debugger;
        this.setState({ date })};

    updateCounter  = ev => {
        ev.preventDefault();
        this.setState({
            counter: this.state.counter + 1
        });
    };

    handleSelectionChange = selection => {this.setState({selection})};

}

export default App;
