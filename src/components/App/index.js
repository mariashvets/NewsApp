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
import Menu from "../Menu";
import MenuItem from "../MenuItem";
import LangProvider from "../LangProvider";


class App extends Component {

    static propTypes = {};

    static childContextTypes = {
        user: PropTypes.string,
    };

    state = {
        username: '',
        language: 'ru'
    };

    getChildContext() {
        return {
            user: this.state.username
        }
    };

    changeLanguage = language => ev => this.setState({language});

    handleUserChange = (username) => this.setState({username});

    render() {
        return (
            <Router history={history}>
                <LangProvider language={this.state.language}>
                    <div>
                        <ul>
                            <li onClick={this.changeLanguage('en')}>English</li>
                            <li onClick={this.changeLanguage('ru')}>Russian</li>
                        </ul>
                        <Menu>
                            <MenuItem path={'/counter'}/>
                            <MenuItem path={'/filters'}/>
                            <MenuItem path={'/articles'}/>
                        </Menu>
                        <UserForm value={this.state.username} onChange={this.handleUserChange}/>
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
                </LangProvider>
            </Router>
        )
    }

    getNewArticleComponent = () => {
        return <h2>New Article Component</h2>
    };

    getArticleComponent = ({match}) => {
        return <Article id={match.params.article} key={match.params.id} isOpen/>
    };
}

export default App;
