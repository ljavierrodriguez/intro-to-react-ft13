import React from 'react';
import { Navbar } from './components/Navbar';
import { MdPets } from 'react-icons/md';
import PropTypes from 'prop-types';

import { nombres } from './data';
import List from './components/List';
import ListItem from './components/ListItem';
import Layout from './components/Layout';

export default function Home(props) {
    return (
        <Layout>
            <h1><MdPets /> Hola, {props.name}</h1>
            <List>
                {
                    nombres.map((nombre, index) => {
                        return (
                            <ListItem key={index}>
                                {nombre}
                            </ListItem>
                        )
                    })
                }
            </List>
        </Layout>
    )
}

Home.propTypes = {
    name: PropTypes.string.isRequired
}