import React from 'react'

const Add = ({ a, b }: { a: number; b: number }) => {
  return (
    <>
    <h3>Add</h3>a = {a}
    <br />b = {b}
    <br />a + b = {a + b}
  </>

  )
}

export default Add