import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    // useState HOOK
    const [logs, setLogs] = useState([]);
    const API = process.env.REACT_APP_URL;

    //useEffect HOOK
    useEffect(() => {
        fetch(API)
            .then(res => res.json())
            .then(res => {
                console.log(res);
                setLogs(res);
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            {logs.map((log, index) => {
                return (
                    <div key={index}>
                    <Link to={`/logs/${index}`}>{logs.title}</Link>
                    </div>
                )
            })}
        </div>
    )
}

export default Home;