import { useState } from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Show from './Components/Show';
import New from './Components/New';
import Edit from './Components/Edit';
import { Routes, Route, Navigate } from 'react-router-dom'

function App() {
const [count, setCount] = useState(0);


  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/logs" replace/>} />
        <Route path="/logs" element={<Home />} />
        <Route path="/logs/New" element={<New />} />
        <Route path="/logs/:index" element={<Show />} />
        <Route path="/logs/:index/Edit" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
