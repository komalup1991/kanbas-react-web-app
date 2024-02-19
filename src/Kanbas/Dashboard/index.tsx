import React from 'react'
import { Link } from "react-router-dom";
import { courses } from "../Database";
import '../../Kanbas/styles.css'
import './index.css'
type Course = {
    _id: string;
    name: string;
    number: string;
    startDate: string;
    endDate: string;
    image: string; 
  };
const Dashboard = () => {
  return (
    <div className="container-fluid wd-fixed-top-margin">
    <h1>Dashboard</h1>
    <hr />
    <div className="wd-left-margin">
      <h2>Published Courses ({courses.length})</h2>
      <hr />
      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4 wd-dashboard-grid">
        {courses.map((course: Course) => (
            <div key={course._id} className="col" style={{ width: 300 }}>

            <div className="card">
            <img src={`/images/${course.image}`} className="card-img-top card-back"
                     style={{ maxHeight: 150 }}/>

              <div className="card-body text-truncate">
              <Link className="card-title" 
              to={`/Kanbas/Courses/${course._id}`}
                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                    {course.name} </Link>
                  <p className="card-text text-truncate">{course.name}</p>
                  <Link to={`/Kanbas/Courses/${course._id}`} className="btn btn-primary">
                    Go </Link>

              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  </div>
  );
}

export default Dashboard;