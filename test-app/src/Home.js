import React from 'react';
import { Navbar } from './components/Navbar';
import { MdPets } from 'react-icons/md';
import PropTypes from 'prop-types';

import { nombres } from './data';
import List from './components/List';

export default function Home(props) {
    return (
        <>
            <Navbar />
            <h1><MdPets /> Hola, {props.name}</h1>
            <List nombres={nombres} />
        </>
    )
}

Home.propTypes = {
    name: PropTypes.string.isRequired
}