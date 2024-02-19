import React from 'react'
import { Navigate, Route, Routes, useParams } from 'react-router'
import { courses } from '../Database';
import { Link, useLocation } from'react-router-dom'
import Assignments from "./Assignments/Assignments";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import "../../Kanbas/styles.css";
import Home from './Home';
import Breadcrumb from './Breadcrumb/Breadcrumb';
import AssignmentEditor from "./Assignments/Edit";
import Grades from "./Grades";
import { FaGlasses } from "react-icons/fa";



const Courses = () => {
    const {courseId} = useParams();
    const course = courses.find((course) => course._id === courseId);
    const { pathname } = useLocation();
    var currentPath = pathname.split("/").pop(); 
    if (currentPath === undefined) {
      currentPath = "Home"
    }

  return (
    <div className='container'>
      <div>
        <div className='d-flex justify-content-between'>
          <div style={{    marginTop: "20px", marginBottom: "20px"}}>
            <Breadcrumb courseId={courseId ? courseId : ""} name={course? course.name : ""} pathName ={currentPath} />
          </div>
          <div>
            <button type="button" className="btn btn-light float-end m-3">
              <FaGlasses />
              Student View
            </button>
          </div>
        </div>
        <hr/>
      </div>
      <div className='container d-flex'>
        <div className='col flex-grow-0'>
          <CourseNavigation />
        </div>
        <div className='col flex-grow-1'>
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments/>} />
            <Route path="Piazza" element={<h1>Piazza</h1>} />
            <Route path="Assignments/:assignmentId" element={<AssignmentEditor/>}/>
            <Route path="Grades" element={<Grades />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default Courses