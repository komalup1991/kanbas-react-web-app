import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./reducer";
import { KanbasState } from "../../store";
function ModuleList() {
  const { courseId } = useParams();
  const moduleList = useSelector((state: KanbasState) => 
  state.modulesReducer.modules);
const module = useSelector((state: KanbasState) => 
  state.modulesReducer.module);
const dispatch = useDispatch();
const modulesList = modules.filter((module) => module.course === courseId);
  const [selectedModule, setSelectedModule] = useState(modulesList[0]);

  return (
    <>
     
      <ul className="list-group wd-modules">
      <li className="list-group-item">
  <div className="input-wrapper">
    <input 
      className="input-field" 
      type="text" 
      value={module.name} 
      onChange={(e) =>
        dispatch(setModule({ ...module, name: e.target.value }))
      }
      placeholder="Module Name" 
    />
  </div>
  <div className="textarea-wrapper">
    <textarea 
      className="textarea-field" 
      value={module.description} 
      onChange={(e) =>
        dispatch(setModule({ ...module, description: e.target.value }))
      }
      placeholder="Module Description" 
    />
  </div>
  <div  className="btn-wrapper">
    <button 
       className="btn btn-success wd-mod-add-btn" onClick={() => dispatch(addModule({ ...module, course: courseId }))}>

      Add
      </button>
    <button onClick={() => dispatch(updateModule(module))} className="btn btn-primary add-button wd-mod-add-btn">
                Update
        </button>

  </div>


</li>


        {moduleList
        .filter((module) => module.course === courseId)
        .map((module,index) => (
          <li key={index}
            className="list-group-item"
            onClick={() => setSelectedModule(module)}>
            <div >
              
              <FaEllipsisV className="me-2" />
              {module.name}
              <span className="float-end ">
              <button  type="button" className="btn btn-success"
              onClick={() => dispatch(setModule(module))}>
              Edit
            </button>

              <button type="button" className="btn btn-danger margin-name"
               onClick={() => dispatch(deleteModule(module._id))}>

              Delete
            </button>

                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
          
            <p >{module.description}</p>
            <p >{module._id}</p>

            {selectedModule._id === module._id && (
              <ul className="list-group">
                {module.lessons?.map((lesson: { name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => (
                  <li className="list-group-item">
                    <FaEllipsisV className="me-2" />
                    {lesson.name}
                    <span className="float-end">
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="ms-2" />
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ModuleList;