import React from 'react'
import './index.css'
import { FaEllipsisV } from "react-icons/fa";

const Actions = () => {
  return (
    <div className="wd-btn-set">
    <div>
      <button className="btn btn-outline-secondary" type="button">
        Collapse All
      </button>
      <button className="btn btn-outline-secondary" type="button">
        View Progress
      </button>
      <select
        className="btn btn-outline-secondary"
        id="select-one-genre"
      >
        <option value="COMEDY">Comedy</option>
        <option value="DRAMA">Drama</option>
        <option selected value="SCIFI">Publish All</option>
        <option value="FANTASY">Fantasy</option>
      </select>
      <button className="btn btn-danger" type="button">+ Module</button>
      
      <FaEllipsisV className="ms-2 " />
    
     
    </div>
  </div>
  )
}

export default Actions