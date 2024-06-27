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
    const navigate = useNavigate()
    const { index } = useParams()