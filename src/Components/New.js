import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const New = () => {
    const navigate = useNavigate();
    const [newLog, setNewLog] = useState({
        captainName: "",
        title: "",
        post: "",
        mistakesWereMadeToday: false,
        daysSinceLastCrisis: 0,
    })

    const API = process.env.REACT_APP_URL;

    const handleChange = (e) => {
        console.log(e);
        setNewLog((prevState) => {
            return {...prevState, [e.target.name]: e.target.value };
        })
    }

    const handleCheckBox = (e) => {
        setNewLog((prevState) => {
            const mistakeHappenedToday = !newLog.is_true;
            return {...prevState, is_true: mistakeHappenedToday }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(API, {
            method: "POST",
            body: JSON.stringify(newLog),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(res => {
                console.log(res);
                navigate("/logs");
            })
            .catch(err => console.error(err));
    }

    return (
        <form onSubmit={(handleSubmit)}>
            <fieldset>
                <legend>New Log</legend>
                <input
                    type="text"
                    placeholder="Captain's Name"
                    name="captainName"
                    value={newLog.name}
                    onChange={handleChange}
                />
                <br/>
                <input
                    type="text"
                    placeholder="Title"
                    name="title"
                    value={newLog.title}
                    onChange={handleChange}
                />
                <br/>
                <input
                    type="text"
                    placeholder="Post"
                    name="post"
                    value={newLog.post}
                    onChange={handleChange}
                />
                <br/>
                <input
                    type="checkbox"
                    id="mistake"
                    checked={newLog.is_true}
                    onChange={handleCheckBox}
                />
                <br/>
                <input
                    type="number"
                    placeholder="Days since last Crisis"
                    name="Days Since Last Crisis"
                    value={newLog.daysSinceLastCrisis}
                    onChange={handleChange}
                />
                <label htmlFor="Log">Log</label>
                <br/>
                <input type="submit" value="Submit"/>
            </fieldset>
        </form>  
    );
};

export default New;