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
    let paths = pathname.split("/");
    if (paths.length > 3) {
      paths.splice(0, 3);
    }

  return (
    <div className='container'>
      <div>
        <div className='d-flex justify-content-between'>
          <div style={{    marginTop: "20px", marginBottom: "20px"}}>
            <Breadcrumb courseId={courseId ? courseId : ""} name={course? course.name : ""} pathNames ={paths} />
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
            <Route path="Zoom Meetings" element={<h1>Zoom Meetings</h1>} />
            <Route path="Quizzes" element={<h1>Quizzes</h1>} />
            <Route path="People" element={<h1>People</h1>} />
            <Route path="Pages" element={<h1>Pages</h1>} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default Courses