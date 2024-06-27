import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom'

const Edit = () => {
    const API = process.env.REACT_APP_URL;
    const [log, setLog] = useState({
        captainName: "",
        title: "",
        post: "",
        mistakesWereMadeToday: false,
        daysSinceLastCrisis: 0,
    })
    const navigate = useNavigate();
    const { index } = useParams();

    useEffect(() => {
        fetch(`${API}/${index}`)
            .then(res => res.json())
            .then(res => {
                // console.log("Edit page: ", res)
                setLog((prevState) => res)
            })
            .catch(err => console.log(err))
    }, [index])

    const handleChange = (e) => {
        // console.log(e)
        setLog((prevState) => {
            return { ...prevState, [e.target.name]: e.target.value }
        })
    }

    const handleCheckBox = (e) => {
        setLog((prevState) => {
            const mistakeHappenedToday = !mistakeHappenedToday.is_true
            return { ...prevState, is_true: mistakeHappenedToday }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`${API}/${index}`, {
            method: "PUT",
            body: JSON.stringify(log),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(res => {
            console.log(res);
            navigate(`/logs/${index}`)
        })
        .catch();
        
    }

    if(!log) return <div>Loading...</div>
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Edit this Log</legend>
                <input
                    type="text"
                    placeholder="Captain's Name"
                    name="captainName"
                    value={log.name}
                    onChange={handleChange}
                />
                <br/>
                <input
                    type="text"
                    placeholder="Title"
                    name="title"
                    value={log.title}
                    onChange={handleChange}
                />
                <br/>
                <input
                    type="text"
                    placeholder="Post"
                    name="post"
                    value={log.post}
                    onChange={handleChange}
                />
                <br/>
                <input
                    type="checkbox"
                    id="mistake"
                    checked={log.is_true}
                    onChange={handleCheckBox}
                />
                <br/>
                <input
                    type="number"
                    placeholder="Days since last Crisis"
                    name="Days Since Last Crisis"
                    value={log.daysSinceLastCrisis}
                    onChange={handleChange}
                />
                <label htmlFor="Log">Log</label>
                <br/>
                <input type="submit" value="Submit"/>
            </fieldset>
            </form>
            <Link to={`/logs/${index}`}>
                <button>Back</button>
            </Link>
        </div>
    )
}

export default Edit;