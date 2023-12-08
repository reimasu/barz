import {HashRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import NavBar from "./NavBar/NavBar";
import SignIn from "./LoginPage/SignIn";
import SignUp from "./LoginPage/SignUp";
import './App.css';
import LandingPage from "./LandingPage/LandingPage"
function filterNav() {
  return (
    <div className="App">
      <HashRouter>
      <NavBar /> 
        <Routes>
          <Route path="/signup"    element={<SignUp/>}/>
          <Route path="/signin"    element={<SignIn/>}/>
        </Routes>
    </HashRouter>
    </div>
  );
}

export default filterNav;
