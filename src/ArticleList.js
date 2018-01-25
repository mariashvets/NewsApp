import React, {Component} from 'react';
import Article from './Article';


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

// export default class ArticleList extends Component {
//     render() {
//         const elements = articles.map((article) => <li key={article.id}><Article  article={article}/></li>);
//         return (
//             <ul>{elements}</ul>
//         )
//     }
// }
