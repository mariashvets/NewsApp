import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ArticlesPage from '../../route_handlers/ArticlesPage';
import UserForm from '../UserForm';
import Counter from '../Counter';
import Filters from '../Filters/index';
import Article from '../Article/index';
import {BrowserRouter as Router, Route, Link, NavLink, Switch} from 'react-router-dom';

class App extends Component {

    static propTypes = {};


    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li><NavLink to='/counter' activeStyle={{color: 'red'}}>Counter</NavLink></li>
                        <li><NavLink to='/filters' activeStyle={{color: 'red'}}>Filters</NavLink></li>
                        <li><NavLink to='/articles' activeStyle={{color: 'red'}}>Articles</NavLink></li>
                    </ul>
                    <UserForm/>
                    <Switch>
                        <Route path='/counter' component={Counter} exact/>
                        <Route path='/filters' component={Filters}/>
                        <Route path='/articles/new' render={this.getNewArticleComponent}/>
                        <Route path='/articles/:article' render={this.getArticleComponent}/>
                        <Route path='/articles' component={ArticlesPage}/>
                    </Switch>
                </div>
            </Router>
        )
    }

    getNewArticleComponent = () => {
        return <h2>New Article Component</h2>
    };

    getArticleComponent = ({match}) => {
        return <Article id={match.params.article} isOpen/>
    }

}

export default App;
