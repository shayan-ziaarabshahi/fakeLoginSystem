import { Redirect, useLocation } from 'react-router-dom'


function Login({permission, setPermission}) {

  let location = useLocation().state

  const handleClick = () => {
    setPermission(true)
  }

  if (permission) {
    return <Redirect to={location ?. currentLocation || '/'} />
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
