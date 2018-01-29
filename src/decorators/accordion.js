//HOC - Higher Order Component - Decorator
import React,{Component as ReactComponent} from 'react';

export default (OriginalComponent) => class AccordionComponent extends ReactComponent {

    state  = {
        openArticleId: null
    };

    render() {
        return <OriginalComponent {...this.props}  toggleArticle={this.toggleArticle}
                                                    openArticleId={this.state.openArticleId}/>;
    }

    toggleArticle = openArticleId => e => {
        e && e.preventDefault && e.preventDefault();

        this.setState ({openArticleId});
    }
}