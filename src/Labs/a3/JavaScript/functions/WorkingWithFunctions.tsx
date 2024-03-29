import React from 'react'
import ES5Functions from './ES5Functions'
import ArrowFunctions from './ArrowFunctions'
import ImpliedReturn from './ImpliedReturn'
import FunctionParenthesisAndParameters from './FunctionParenthesisAndParameters'

const WorkingWithFunctions = () => {
  return (
    <div>
        <h2>
        Working With Functions
        </h2>
        <ES5Functions />
        <ArrowFunctions />
        <ImpliedReturn />
        <FunctionParenthesisAndParameters />

    </div>
  )
}

export default WorkingWithFunctions