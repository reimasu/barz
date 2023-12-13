import {HashRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import FilterNav from "./FilterNav.js";
import SignUp from "./LoginPage/SignUp";
import SignIn from "./LoginPage/SignIn";
import LandingPage from "./LandingPage/LandingPage"
import Profile from "./Profile/Profile";
import Feed from "./Feed/Feed";
import YourBarz from "./Profile/YourBarz.js";
import Followers from "./Profile/Followers.js";
import Following from "./Profile/Following";
import './App.css';

// import Store from "./Store";

function App() {

  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route index element={<LandingPage/>}/>
          <Route path="/signup"    element={<SignUp/>}/>
          <Route path="/signin"    element={<SignIn/>}/>
          <Route path="/Barz/Profile/:userId"    element={<Profile/>}/>
          <Route path="/Barz/Your-Barz/:userId" element={<YourBarz/>}/>
          <Route path="/Barz/Followers/:userId" element={<Followers/>}/>
          <Route path="/Barz/Following/:userId" element={<Following/>}/>
          <Route path="/Barz/Profile"    element={<Profile/>}/>
          <Route path="/Barz/Your-Barz" element={<YourBarz/>}/>
          <Route path="/Barz/Followers" element={<Followers/>}/>
          <Route path="/Barz/Following" element={<Following/>}/>
          <Route path="/*"    element={<FilterNav/>}/>
        </Routes>
    </HashRouter>
    </div>
  );
}

export default App;
