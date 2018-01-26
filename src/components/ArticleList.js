import React, {Component} from 'react';
import Article from './Article';
import PropTypes from 'prop-types';


export default function ArticleList ({articles}) {

    const elements = articles.map((article) => {

        return <li key={article.id}>
                    <Article  article={article}/>
                </li>
    });
    return (
        <ul>{elements}</ul>
    )
}

ArticleList.PropTypes = {
    articles: PropTypes.array.isRequired
};

