import React from 'react';
import { Saludo } from './Saludo';
import * as data from './data';

const App = ({ name, lastname }) => {
    return (
        <>
            <Saludo name={`${data.name} ${data.lastname}`} />
            {
                lastname
            }
        </>
    )
}

export default App;