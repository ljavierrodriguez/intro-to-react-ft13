/* import React from 'react'; */
import PropTypes from 'prop-types';

export const Saludo = ({ name }) => {
    return (
        <h1>Hola Mundo, {name} desde React con Create React App</h1>
    )
}

Saludo.propTypes = {
    name: PropTypes.string.isRequired,
}