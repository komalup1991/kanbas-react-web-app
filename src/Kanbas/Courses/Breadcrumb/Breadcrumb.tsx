import React from 'react'

import { Link, useLocation } from'react-router-dom'
import"./breadcrumbs.css";
import { HiMiniBars3 } from "react-icons/hi2";

function getPathLink( { index, pathNames, courseId, pathName, name } : { index: number, pathNames: string[], courseId: string, pathName: string, name: string }) {
  return index === 0 ? <span>
      <Link to={`/Kanbas/Courses/${courseId}`}
        className={"breadcrumb-not-active"}>
        {name}
      </Link>
    </span> :
    index === pathNames.length - 1 ? 
      <span><span className="breadcrumb-arrow">&gt;</span>{pathName}</span> : 
    <span><span className="breadcrumb-arrow">&gt;</span>
    <Link to={`/Kanbas/Courses/${courseId}/${pathName}`}
      className={"breadcrumb-not-active"}>
      {pathName}
    </Link>
    </span>
}

const Breadcrumbs = ({ courseId, name, pathNames }: { courseId: string, name: string, pathNames: string[] }) => {
  const location = useLocation();

  return (
    <nav>
      <HiMiniBars3 style={{color: "red", marginRight: "10px"}} />
      {pathNames.map((pathName, index) => (
        getPathLink({ index,  pathNames, courseId, pathName, name })
      ))}
    </nav>
  );
}

export default Breadcrumbs;

