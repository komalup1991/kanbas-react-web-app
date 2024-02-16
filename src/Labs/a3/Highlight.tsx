import React from 'react'
import { ReactNode } from "react";

const Highlight = ({ children }: { children: ReactNode }) => {
  return (
    <span style={{ backgroundColor: "yellow", color: "red" }}>
      {children}
    </span>

  )
}

export default Highlight