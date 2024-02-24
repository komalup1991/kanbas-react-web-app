import React from 'react'
import KanbasNavigation from "./Navigation";
import Dashboard from './Dashboard';
import Courses from './Courses';
import { HiMiniBars3 } from "react-icons/hi2";
import { Routes, Route, Navigate } from "react-router-dom";
import './styles.css'
import Home from './Courses/Home';

const Kanbas = () => {
  return (
    <div className="d-flex">
    <div className='d-none d-md-block'>
     
      <KanbasNavigation />
    </div>
    <div style={{ flexGrow: 1 }}>
    <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="/Account" element={<h1>Account</h1>} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Courses/:courseId/*" element={<Courses />} />
          <Route path="/Courses/*" element={<Courses />} />
        </Routes>

    </div>
  </div>

  )
}

export default Kanbas