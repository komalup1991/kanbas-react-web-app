import React from 'react'

const JsonStringify = () => {
    const squares = [1, 4, 16, 25, 36];
  return (
    <div>
        <h3>
        Json Stringify
        </h3>
        squares = {JSON.stringify(squares)}

    </div>
  );
}

export default JsonStringify;