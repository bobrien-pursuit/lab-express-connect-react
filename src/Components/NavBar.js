import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <h1>
                <Link to="/logs">Logs</Link></h1>
            <ul>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/logs/new">Add Log</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;