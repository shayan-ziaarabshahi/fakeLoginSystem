import React, { } from 'react'
import { Redirect, useLocation } from 'react-router-dom'


function Login({permission, setPermission}) {

  const currentLocation = useLocation().state.currentLocation.pathname

  const handleClick = () => {
    setPermission(true)
  }

  if (permission) {
    return <Redirect to={currentLocation} />
  }
  else {
    return (
      <>
      <h1>First Log In</h1>
      <button onClick={handleClick}>Log In</button>
      </>
    )
  }
}

export default Login;