import React from 'react';
import { FaEnvelope, FaHome, FaQuestion } from 'react-icons/fa';

export const Navbar = (props) => {
    return (
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                    <FaHome /> Home
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">
                   <FaQuestion /> About
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">
                    <FaEnvelope /> Contact
                </a>
            </li>
        </ul>
    )
}

// export default Navbar;