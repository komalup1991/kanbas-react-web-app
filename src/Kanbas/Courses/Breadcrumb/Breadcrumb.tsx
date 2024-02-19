import React from 'react'

import { Link, useLocation } from'react-router-dom'
import"./breadcrumbs.css";
import { HiMiniBars3 } from "react-icons/hi2";

const Breadcrumbs = ({ courseId, name, pathName }: { courseId: string, name: string, pathName: string }) => {
  const location = useLocation();

  return (
    <nav>
      <Link to="/"
        className={location.pathname === "/" ? "breadcrumb-active" : "breadcrumb-not-active"}
      > 
       <HiMiniBars3 /> 
      </Link>
      <Link to={`/Kanbas/Courses/${courseId}/Home`}
        className={location.pathname.startsWith("/products") ? "breadcrumb-active" : "breadcrumb-not-active"}
      >
        {name}
      </Link>
      <span className="breadcrumb-arrow">&gt;</span>
      <Link to="/products/1"
        className={location.pathname === "/products/1" ? "breadcrumb-active" : "breadcrumb-not-active"}
      >
        {pathName}
      </Link>
    </nav>
  );
}

export default Breadcrumbs;