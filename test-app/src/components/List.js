import React from 'react';
import ListItem from './ListItem';

export default function List(props) {
    return (
        <ul className="list-group">
            {
                props.nombres.length > 0 &&
                props.nombres.map((nombre, index) => {
                    return <ListItem text={nombre} key={index} />
                })
            }
        </ul>
    )
}