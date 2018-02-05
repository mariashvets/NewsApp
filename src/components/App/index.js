import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ArticleList from '../ArticleList';
import Charts from '../Charts';
import UserForm from '../UserForm';
import Counter from '../Counter';
import Filters from '../Filters/index';

class App extends Component {

    static propTypes = {
    };

    state = {
        counter: 0,
    };

    render(){
        return <div>
            <Counter/>
            <Filters/>
            <a href="#" onClick={this.updateCounter}>update chart</a>
            <UserForm/>
            <ArticleList/>
            <Charts articles={[]} key={this.state.counter}/>
        </div>
    }

    onChange = date => {
        this.setState({ date })
    };

    updateCounter  = ev => {
        ev.preventDefault();
        this.setState({
            counter: this.state.counter + 1
        });
    };
}

export default App;
