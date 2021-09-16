import { useState } from "react";
import { Link, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SecretPage from "./pages/SecretPage";


function App() {

  const [permission, setPermission] = useState(false)

  function PrivateRoute({children, path}) {
    return (
      <Route path={path} render={({location}) => {
        return permission === true ?
        children:<Redirect to={{pathname:'/login', state:{currentLocation:location}}} />}}/>
    )
  }

  return (

    <div>
      <LogOutButton permission={permission} setPermission={setPermission}/>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/secretpage">Secret Page</Link>
        </li>
      </ul>

      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/login">
        <Login permission={permission} setPermission={setPermission} />
      </Route>
      <PrivateRoute path="/secretpage">
        <SecretPage />
      </PrivateRoute>

    </div>
  );
};

function LogOutButton({permission, setPermission}) {

  const handleClick = () => {
    setPermission(false)
  }

  if (permission === true) {
    return(
      <button onClick={handleClick}>log out</button>
    ) 
  }
  else {
    return null
  }
}


export default App;