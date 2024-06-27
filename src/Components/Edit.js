import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom'

const Edit = () => {
    const API = process.env.REACT_APP_URL;
    const [log, setLogs] = useState({
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
                setBookmark((prevState) => res)
            })
            .catch(err => console.log(err))
    }, [index])

    const handleChange = (e) => {
        // console.log(e)
        setBookmark((prevState) => {
            return { ...prevState, [e.target.name]: e.target.value }
        })
    }

    const handleCheckBox = (e) => {
        setBookmark((prevState) => {
            const mistakeHappenedToday = !mistakeHappenedToday.is_true
            return { ...prevState, is_true: mistakeHappenedToday }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`${API}/${index}`, {
            method: "PUT",
            body: JSON.stringify(bookmark),
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