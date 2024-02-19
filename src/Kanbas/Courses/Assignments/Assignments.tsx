import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle, FaPenSquare } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
import './index.css'
function Assignments() {
  const { courseId } = useParams();
  const assignmentList = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <>
  <div className="row g-3 align-items-center">
  <div className="col-9 float-start">
                  <input
                    id="search-assignment"
                    type="text"
                    placeholder="Search for Assignment"
                    className="form-control"
                    aria-describedby="passwordHelpInline"
                  />
                </div>
                <div className="col-3 float-lg-end">
                  <div>
                 

                    <button type="button" className="btn btn-danger float-end">
                      +Assignment
                    </button>
                    <FaEllipsisV className="ms-2" />
                    <button type="button" className="btn btn-light float-end">
                      +Group
                    </button>
                    
                  </div>
                </div>
  </div>
  <hr/>
  <div>
  <ul className="list-group wd-modules">
        <li className="list-group-item">
          <div>
            <FaEllipsisV className="me-2" /> ASSIGNMENTS <span className="wd-rounded w-auto ">40% of Total</span>
            
            <span className="float-end">
              
              <FaCheckCircle className="text-success" />
              <FaPlusCircle className="ms-2" />
              <FaEllipsisV className="ms-2" />
              
            </span>
          </div>
          <ul className="list-group">
            {assignmentList.map((assignment) => (
              <li className="list-group-item">
                <FaEllipsisV className="me-2" />
                <FaPenSquare className="me-2 text-success" />
                <Link
                   to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>{assignment.title}</Link>
                <span className="float-end">
                  <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" /></span>
              </li>))}
          </ul>
        </li>
      </ul>
  </div>
      
    </>
);}
export default Assignments;