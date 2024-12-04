import React, { useState } from 'react'
import Login from './Login';
import Signup from './Signup';
import "./1.css"

const ToggleButton = () => {
    const [isLogin,setIsLogin]=useState(true)

    const handleButton=()=>{
        (isLogin)?setIsLogin(false):setIsLogin(true);
    }
  return (
    <>
        <h1>Instagram</h1>
        {
            isLogin? (<Login/>) : (<Signup/>)
        }
        <button onClick={handleButton}>{isLogin?"Don't have an account? Sign up":"have an account? Login"}</button>

    </>
  )
}

export default ToggleButton