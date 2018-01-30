//HOC - Higher Order Component - Decorator
import React,{Component as ReactComponent} from 'react';

export default (OriginalComponent) => class AccordionComponent extends ReactComponent {

    state  = {
        openItemId: null
    };


    toggleArticle = openItemId => e => {
        if (e && e.preventDefault) e.preventDefault();

        this.setState ({
            openItemId: this.isItemOpened(openItemId) ? null : openItemId
        });
    };

    isItemOpened = id => id === this.state.openItemId;

    render() {
        return <OriginalComponent {...this.props}  toggleItem={this.toggleArticle}
                                  openItemId={this.state.openItemId}/>;
    }

}