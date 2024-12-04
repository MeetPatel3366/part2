import React, { useState } from 'react'

const Counter = () => {
  const [count,setCount]=useState(0)

  const handleincrement=()=>{
    setCount((prev)=>prev+1)
  }
  const handledecrement=()=>{
    setCount((prev)=>prev-1)
  }
  return (
    <div className="app-container">
      <div className="counter-display">
        <h1>{count}</h1>
      </div>
      <div className="button-container">
        <button className="btn increment" onClick={handleincrement}>
          Increment
        </button>
        <button className="btn decrement" onClick={handledecrement}>
          Decrement
        </button>
      </div>
    </div>
  )
}

export default Counter