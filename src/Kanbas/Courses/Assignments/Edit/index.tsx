import './index.css'
import { FaCheckCircle, FaEllipsisV} from "react-icons/fa";
import { useNavigate, useParams, Link } from "react-router-dom";
import { assignments } from "../../../Database";
import { FaCalendarAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { KanbasState } from "../../../store";
import {addAssignment, setAssignment, updateAssignment} from "../assignmentsReducer";

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const { courseId } = useParams();
  const assignmentA = useSelector((state: KanbasState) => state.assignmentsReducer.assignment);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let mode = '';
  const assignment = assignments.find(
    (assignment) => assignment._id === assignmentId);
  if (assignment) {
    mode  = 'update';
  } else {
    mode = 'add';
  }
  
    const handleSave = () => {
      if (mode === 'add') {
        dispatch(addAssignment(assignmentA));
      } else if (mode === 'update') {
        dispatch(updateAssignment(assignmentA));
      }
      navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };
 


  return (
    <div>
      <span className="float-end">
        <FaCheckCircle className="text-success"/>
        Published
        <FaEllipsisV className="ms-2" />
      </span>  
      <br />
      <br />
     
      <h6>Assignment Name</h6>
      <input value={assignmentA?.title}
       onChange={(e) =>
        dispatch(setAssignment({ ...assignment, title: e.target.value }))
      }
             className="form-control mb-2" />

<div className="form-group">
  <textarea
    className="form-control"
    id="exampleFormControlTextarea1"
    rows={3}
    onChange={(e) =>
      dispatch(setAssignment({ ...assignment, description: e.target.value }))
    }
  >
   {assignmentA?.description}
   
  </textarea>
</div>

<div className="container text-left">
                      <div className="container text-right">
                        <div className="row justify-content-md-center">
                          <div className="col col-lg-2 text-end align-self-center">
                            Points
                          </div>
                          <div className="col col-lg-6">
                            <input
                              className="form-control"
                              type="number"
                              onChange={(e) =>
                                dispatch(setAssignment({ ...assignment, maxPoints: e.target.value }))
                              }
                              value={assignmentA?.maxPoints}
                            />
                          </div>
                        </div>

                        <div className="row justify-content-md-center">
                          <div className="col col-lg-2 text-end align-self-center">
                            Assignment Group
                          </div>
                          <div className="col col-lg-6 wd-margin-vertical">
                        

                            <select
                              className="form-select"
                              aria-label="Default select example"
                            >
                              <option selected>ASSIGNMENTS</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                         
                          </div>
                        </div>
                        <div className="row justify-content-md-center">
                          <div
                            className="col col-lg-2 text-end align-self-center wd-margin-vertical"
                          >
                            Display Grade as
                          </div>
                          <div className="col col-lg-6">
                           

                            <select
                              className="form-select"
                              aria-label="Default select example"
                            >
                              <option selected>Percentage</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                          
                          </div>
                        </div>
                    
                        <div className="row justify-content-md-center">
                          <div
                            className="col col-lg-2 text-end align-self-center wd-margin-vertical"
                          >
                            Submission Type
                          </div>
                          <div className="col col-lg-6">
                        

                            <select
                              className="form-select"
                              aria-label="Default select example"
                            >
                              <option selected>Online</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                          
                          </div>
                        </div>
                    

                        <div className="row justify-content-md-center">
                          <div className="col col-lg-2"></div>
                          <div className="col col-lg-6 wd-margin-vertical">
                            <input type="checkbox" className="ms-2" /><label
                              className="ms-2"
                              >Do not count this assignment towards the final
                              grade</label><br />
                          </div>
                        </div>
                      </div>
                      <div className="row justify-content-md-center">
                        <div className="col col-lg-2 text-end">Assign</div>
                        <div className="col col-lg-6 box border">
                          <p className="ms-2">Assign to</p>
                          <input
                            className="form-control"
                            type="text"
                            value="Everyone"
                            id="assignmentName"
                            placeholder="Everyone"
                          />

                          <p className="ms-2">Due</p>
                          <div className="input-group mb-3">
                            <input type="text" 
                            onChange={(e) =>
                              dispatch(setAssignment({ ...assignment, dueDate: e.target.value }))
                            }
                            value={assignmentA?.dueDate} />
                            <span className="input-group-text" id="basic-addon2"
                              ><FaCalendarAlt/>
                            </span>
                          </div>

                          <div className="container text-left">
                            <div className="row">
                              <div className="col">
                                <p>Available from</p>
                              </div>
                              <div className="col">
                                <p>Until</p>
                              </div>
                            </div>
                          </div>

                          <div className="container text-left">
                            <div className="row">
                              <div className="col">
                                <div className="input-group mb-3">
                                  <input
                                    type="text"
                                    value={assignmentA?.dueDate}
                                  />
                                  <span className="input-group-text"
                                    ><FaCalendarAlt/>
                                  </span>
                                </div>
                              </div>
                              <div className="col">
                                <div className="input-group mb-3">
                                  <input
                                    type="text"
                                    value={assignmentA?.dueDate}
                                  />
                                  <span className="input-group-text"
                                    ><FaCalendarAlt/>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <input
                            type="text"
                            className="form-control text-center"
                            id="exampleInputPassword1"
                            value="+ Add"
                          />
                        </div>
                      </div>
                    </div>

                    <hr />
                    <input type="checkbox" className="ms-2" /><label className="ms-2"
                      >Notify user that this content has changed</label><br />


<button
        onClick={handleSave}
        className="btn btn-success ms-2 float-end"
      >
        Save
      </button>
      <Link
        to={`/Kanbas/Courses/${courseId}/Assignments`}
        className="btn btn-danger float-end"
      >
        Cancel
      </Link>
    </div>
  );
}
export default AssignmentEditor;

