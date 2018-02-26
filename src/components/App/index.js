import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ArticlesPage from '../../route_handlers/ArticlesPage';
import UserForm from '../UserForm';
import Counter from '../Counter';
import Filters from '../Filters/index';
import Article from '../Article/index';
import NotFoundPage from '../NotFoundPage';
import CommentsPage from "../../route_handlers/CommentsPage";
import {Route, Link, NavLink, Switch, Redirect} from 'react-router-dom';
import {ConnectedRouter as Router} from 'react-router-redux';
import history from '../../history';

class App extends Component {

    static propTypes = {};

    static childContextTypes = {
        user: PropTypes.string
    };

    getChildContext () {
        return {
            user: this.state.username
        }
    };

    state = {
        username: ''
    };

    render() {
        return (
            <Router history={history}>
                <div>
                    <ul>
                        <li><NavLink to='/counter' activeStyle={{color: 'red'}}>Counter</NavLink></li>
                        <li><NavLink to='/filters' activeStyle={{color: 'red'}}>Filters</NavLink></li>
                        <li><NavLink to='/articles' activeStyle={{color: 'red'}}>Articles</NavLink></li>
                    </ul>
                    <UserForm value = {this.state.username} onChange = {this.handleUserChange}/>
                    <Switch>
                        <Route path='/counter' component={Counter} exact/>
                        <Route path='/filters' component={Filters}/>
                        <Route path='/articles/new' render={this.getNewArticleComponent}/>
                        <Route path='/articles/:article' render={this.getArticleComponent}/>
                        <Route path='/articles' component={ArticlesPage}/>
                        <Route path='/comments' component={CommentsPage}/>
                        <Route path='*' component={NotFoundPage}/>
                    </Switch>
                </div>
            </Router>
        )
    }

    handleUserChange = (username) => this.setState({username});

    getNewArticleComponent = () => {
        return <h2>New Article Component</h2>
    };

    getArticleComponent = ({match}) => {
        return <Article id={match.params.article} isOpen/>
    };
}

export default App;
