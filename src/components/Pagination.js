import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Route, Link, NavLink, Switch} from 'react-router-dom';


function Pagination(props) {

    const {pages, path} = props;
    let elements = [];

    for(let i=1; i <= pages; i++){
        elements.push(<li key={i.toString()}><NavLink to={`${path}/${i}`} activeStyle={{color: 'red'}}>Page {i}</NavLink></li>)
    }
    return (
        <ul>{elements}</ul>
    );
}

Pagination.propTypes = {
    pages: PropTypes.number.isRequired,
    path: PropTypes.string.isRequired,
};

Pagination.defaultProps = {};

export default Pagination;