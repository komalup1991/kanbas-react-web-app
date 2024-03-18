import { FaCheckCircle, FaEllipsisV} from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import './index.css'
import { HiOutlinePencilAlt } from "react-icons/hi";
import { RxDragHandleDots2 } from "react-icons/rx";
import { GoPlus } from "react-icons/go";
import { useSelector, useDispatch } from "react-redux";
import { KanbasState } from "../../store";
import Dialog from "@mui/material/Dialog";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Button from "@mui/material/Button";
import { IconButton } from "@mui/material";
import { useState } from "react";
import { IoTrashBinSharp } from "react-icons/io5";


import {
  deleteAssignment,
  setAssignment,
} from "./assignmentsReducer";


function Assignments() {
  const { courseId } = useParams();
  let assignmentsState = useSelector((state: KanbasState) => state.assignmentsReducer.assignments);
  const dispatch = useDispatch();
  const assignmentList = assignmentsState.filter(
    (assignment) => assignment.course === courseId);
  const [open, setOpen] = useState(false);
  const [assignmentIdtoDelete, setAssignmentId] = useState("");

  const handleClickToOpen = (assignmentId: string) => {
    setAssignmentId(assignmentId)
      setOpen(true);
  };

  const handleToClose = () => {
      setOpen(false);
  }; 
  const handleToDelete = (assignmentId: string) => {
    console.log(assignmentId);
    setOpen(false);
    dispatch(deleteAssignment(assignmentId))};
    
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
                <div className="col-3 float-end">
                  <div>
                 
                  <button type="button" className="btn btn-light wd-margin-left">
                      +Group
                    </button>
                   
                    <button type="button" className="btn btn-danger wd-margin-left ">
                     
                     
                      <Link className="wd-add-ass"
                      to={`/Kanbas/Courses/${courseId}/Assignments/new`}
                      onClick={() => dispatch(setAssignment({}))}
                      >
                      +Assignment
                      </Link>
                      
                    </button>
                    <FaEllipsisV className="ms-2" />
                    
                    
                  </div>
                </div>
  </div>
  <hr/>
  <div>
  <ul className="list-group wd-modules">
        <li className="list-group-item">
          <div>
            <FaEllipsisV className="me-2" /> ASSIGNMENTS
            
            <span className="float-end">
            <span className="wd-rounded">40% of Total</span>
              <GoPlus className="ms-2"/>
              <FaEllipsisV className="ms-2" />  
            </span>
          </div>
          <ul className="list-group">
            {assignmentList
            .filter((assignment) => assignment.course === courseId)
            .map((assignment, index) => (
              <li key={index}
               className="list-group-item">
                    <div className="container text-left">
                      <div className="row">
                        <div className="col d-flex align-items-center justify-content-center">
                        <RxDragHandleDots2 />
                        </div>
                        <div className="col d-flex align-items-center justify-content-center">
                        <HiOutlinePencilAlt style={{color:"green"} }/>
                        </div>
                        <div className="col-10 flex-grow-1" style={{marginLeft: "14px"}}>
                          
                          <span className="fw-bold text-dark fs-6 "
                            > 
                            
                            
                            <Link 
                            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                            onClick={() => dispatch(setAssignment(assignment))}
                            >{assignment.title}</Link>
                          </span>
                          <p className="text-secondary" style={{fontSize:"5"}}>
                            {assignment.description} | {assignment.status} | <span className="fw-bold">Due</span> {assignment.dueDate} | {assignment.maxPoints} pts
                            </p>
                        </div>
                        <div className="col d-flex align-items-center float-end justify-content-center">
                       
                        <IconButton aria-label="delete" size="small" onClick={()=>{handleClickToOpen(assignment._id) }}>
                        <IoTrashBinSharp />
</IconButton>
                          {/* <button type="button" className="btn btn-danger wd-margin-left"   onClick={()=>{handleClickToOpen(assignment._id) }} >
                            Delete
                            </button> */}
                            <Dialog open={open} onClose={handleToClose}>
                <DialogTitle>{"Delete Assignment?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                    Are you sure you want to delete?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleToClose}
                        color="primary" autoFocus>
                        No
                    </Button>
                    <Button onClick= { () => { 
                      console.log(assignment._id);
                      handleToDelete(assignmentIdtoDelete) } }
                        color="secondary" autoFocus>
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>
  
                        <FaCheckCircle className="text-success" />
                        <FaEllipsisV className="ms-2" />
                        </div>
                      </div>
                    </div>
                  </li>
              ))}
          </ul>
        </li>
      </ul>
  </div>
      
    </>
);}
export default Assignments;