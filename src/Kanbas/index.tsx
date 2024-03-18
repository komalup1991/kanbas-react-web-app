import React,{ useState } from 'react'
import KanbasNavigation from "./Navigation";
import Dashboard from './Dashboard';
import Courses from './Courses';
import { Routes, Route, Navigate } from "react-router-dom";
import './styles.css'
import {courses} from "./Database";
import store from "./store";
import { Provider } from "react-redux";


const Kanbas = () => {
  const [cs, setCourses] = useState<any[]>(courses);
  const [course, setCourse] = useState({
    _id: "1234", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",image: "setting.png"
  });
  const addNewCourse = () => {
    setCourses([...cs, { ...course, _id: new Date().getTime().toString() }]);
  };
  const deleteCourse = (courseId: any) => {
    setCourses(cs.filter((course) => course._id !== courseId));
  };
  const updateCourse = () => {
    setCourses(
      cs.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };

  return (
    <Provider store={store}>

    <div className="d-flex">
    <div className='d-none d-md-block'>
     
      <KanbasNavigation />
    </div>
    <div style={{ flexGrow: 1 }}>
    <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="/Account" element={<h1>Account</h1>} />
          <Route path="/Dashboard" element={<Dashboard
              courses={cs}
              course={course}
              setCourse={setCourse}
              addNewCourse={addNewCourse}
              deleteCourse={deleteCourse}
              updateCourse={updateCourse}/>
} />
          <Route path="/Courses/:courseId/*" element={<Courses courses={cs} />} />
           {/* <Route path="/Courses/*" element={<Courses />} /> */}
        </Routes>

    </div>
  </div>
  </Provider>

  )
}

export default Kanbas