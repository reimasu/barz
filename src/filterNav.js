import {HashRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import NavBar from "./NavBar/NavBar";
import Feed from "./Feed/Feed";
import Profile from "./Profile/Profile";
function FilterNav() {
import SignIn from "./LoginPage/SignIn";
import SignUp from "./LoginPage/SignUp";
import './App.css';
import LandingPage from "./LandingPage/LandingPage"
function filterNav() {
  return (
    <div className="filterNav">

      <NavBar /> 
        <Routes>
          <Route path="/Barz/Home" element={<Feed/>}/>
        </Routes>
    </div>
  );
}

export default FilterNav;
