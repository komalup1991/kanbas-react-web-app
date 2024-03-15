import React, { useState }  from 'react'
import { Link } from "react-router-dom";
import {courses} from "../Database";
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
  const [c, setCourses] = useState(courses);
  const [course, setCourse] = useState({

    _id: "0", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
    image: "/images/reactjs.jpg"
  });
  const updateCourse = () => {
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };


  const addNewCourse = () => {
    const newCourse = { ...course,
                        _id: new Date().getTime().toString() };
    setCourses([...c, { ...course, ...newCourse }]);
  };
  const deleteCourse = (courseId: string) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };


  return (
    <div className="container-fluid wd-fixed-top-margin">
    <h1>Dashboard</h1>
    <h5>Course</h5>
      <input value={course.name} className="form-control"   onChange={(e) => setCourse({ ...course, name: e.target.value }) } />

      <input value={course.number} className="form-control"  onChange={(e) => setCourse({ ...course, number: e.target.value }) } />

      <input value={course.startDate} className="form-control" type="date"   onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>

      <input value={course.endDate} className="form-control" type="date"    onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />


    <button onClick={addNewCourse} >
        Add
      </button>
      <button onClick={updateCourse} >
        Update
      </button>


    <hr />
    <div className="wd-left-margin">
      <h2>Published Courses ({courses.length})</h2>
      <hr />
      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4 wd-dashboard-grid">
        {c.map((course: Course) => (
            <div key={course._id} className="col" style={{ width: 300 }}>

            <div className="card">
            <img src={`/images/${course.image}`} className="card-img-top card-back" style={{ maxHeight: 150 }}/>

              <div className="card-body ">
              <Link className="card-title " 
              to={`/Kanbas/Courses/${course._id}`}

                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                    {course.name} 
                    <p>
                    <button onClick={(event) => {
                event.preventDefault();
                setCourse(course);
              }}>
              Edit
            </button>

                      
                      <button onClick={(event) => {
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