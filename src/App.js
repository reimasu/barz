import {HashRouter, useLocation} from "react-router-dom";
import {Routes, Route, Navigate} from "react-router";
import './App.css';
import NavBar from "./NavBar/NavBar";
import SignIn from "./LoginPage/SignIn";
import SignUp from "./LoginPage/SignUp";
import LandingPage from "./LandingPage/LandingPage"
function App() {
  return (
    <div className="App">
      <HashRouter>
      <NavBar />
        <Routes>
          <Route index element={<LandingPage/>}/>
          <Route path="/signup"    element={<SignUp/>}/>
          <Route path="/signin"    element={<SignIn/>}/>
          {/* <Route path="/Labs/*"   element={<Labs/>}/>
          <Route path="/Kanbas/*" element={<Kanbas/>}/> */}
        </Routes>
    </HashRouter>
    </div>
  );
}

export default App;
