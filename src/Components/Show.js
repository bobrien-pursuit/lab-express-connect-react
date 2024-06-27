import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

const Show = () => {

    const [log, setLogs] = useState({});
    const { index } = useParams();
    const API = process.env.REACT_APP_URL;
    const navigate = useNavigate();

    const handleDelete = () => {

        fetch(`${API}/${index}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then((res) => {
                navigate(`/logs`);
        })
        .catch(err => console.error(err));

    };

    useEffect(() => {
        fetch(`${API}/${index}`).
            then(res => res.json()).
            then(res => {
                console.log(res);
                setLogs(res); 
            }).
            catch(err => console.log(err))
    }, [])

    return (
        <div>
            { log && 
            <div>
                <h2>{log.title}</h2>
                <br></br>
                <h3>By {log.captainName}</h3>
                <br></br>
                <p>{log.post}</p>
                <br></br>
                <Link to={`/logs/${index}/Edit`}>
                    <button>Edit</button>
                </Link>
                <br></br>
                <button onClick={handleDelete}>Delete</button>
            </div> 
            }
        </div>

    )
}

export default Show;