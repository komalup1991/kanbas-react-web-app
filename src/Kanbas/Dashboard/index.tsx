import React from 'react'
import { Link } from "react-router-dom";
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
const Dashboard = ({ courses, course, setCourse, addNewCourse,
  deleteCourse, updateCourse }: {
  courses: any[]; course: any; setCourse: (course: any) => void;
  addNewCourse: () => void; deleteCourse: (course: any) => void;
  updateCourse: () => void; }) => {
  
  return (
    <div className="container-fluid wd-fixed-top-margin">
    <h1>Dashboard</h1>
    <h5>Course</h5>
      <input value={course.name} className="form-control"   onChange={(e) => setCourse({ ...course, name: e.target.value }) } />

      <input value={course.number} className="form-control"  onChange={(e) => setCourse({ ...course, number: e.target.value }) } />

      <input value={course.startDate} className="form-control" type="date"   onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>

      <input value={course.endDate} className="form-control" type="date"    onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />


    <button onClick={addNewCourse} className='add-update-btn'>
        Add
      </button>
      <button onClick={updateCourse} className='add-update-btn' >
        Update
      </button>


    <hr />
    <div className="wd-left-margin">
      <h2>Published Courses ({courses.length})</h2>
      <hr />
      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4 wd-dashboard-grid">
        {courses.map((course: Course) => (
            <div key={course._id} className="col" style={{ width: 300 }}>

            <div className="card">
            <img src={`/images/${course.image}`} className="card-img-top card-back" style={{ maxHeight: 150 }}/>

              <div className="card-body ">
              <Link className="card-title " 
              to={`/Kanbas/Courses/${course._id}`}

                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                    {course.name} 
                    <p>
                    <button className='add-update-btn' onClick={(event) => {
                event.preventDefault();
                setCourse(course);
              }}>
              Edit
            </button>

                      
                      <button className='add-update-btn' onClick={(event) => {
                        event.preventDefault();
                        deleteCourse(course._id);
                      }}>
                      Delete
              </button>
              </p>

                    
                    
                    </Link>


                  <p className="card-text text-truncate">{course.name}</p>
                  <Link to={`/Kanbas/Courses/${course._id}`} className="btn btn-primary">
                    Go 
                    
                    </Link>

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