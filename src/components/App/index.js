import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ArticleList from '../ArticleList';
import Charts from '../Charts';
import UserForm from '../UserForm';
import Counter from '../Counter';
import Filters from '../Filters/index';
import {HashRouter as Router, Route, Link, NavLink} from 'react-router-dom';

class App extends Component {

    static propTypes = {
    };


    render(){
        return(
            <Router>
                <div>
                    <ul>
                        <li><NavLink to='/counter' activeStyle={{color: 'red'}}>Counter</NavLink></li>
                        <li><NavLink to='/filters' activeStyle={{color: 'red'}}>Filters</NavLink></li>
                        <li><NavLink to='/articles' activeStyle={{color: 'red'}}>Articles</NavLink></li>
                    </ul>
                    <UserForm/>

                    <Route path='/counter' component = {Counter}/>
                    <Route path='/filters' component = {Filters}/>
                    <Route path='/articles' component = {ArticleList}/>

                </div>
            </Router>
        )
    }

}

export default App;
