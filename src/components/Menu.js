import React from 'react';
import PropTypes from 'prop-types';

function Menu(props) {
    return (
        <div>
            <h2>Menu</h2>
            {props.children}
            <h3>Test </h3>
        </div>
    );
}

Menu.propTypes = {};
Menu.defaultProps = {};

export default Menu;
