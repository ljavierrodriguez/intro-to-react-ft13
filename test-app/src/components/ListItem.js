import React from 'react';

const ListItem = ({ children }) => {
    return (
        <li className="list-group-item list-group-item-action">
            {children}
        </li>
    )
}

export default ListItem;