import {HashRouter, useLocation} from "react-router-dom";
import {Routes, Route, Navigate} from "react-router";
import './App.css';
import NavBar from "./NavBar/NavBar";
import SignIn from "./LoginPage/SignIn";
import LandingPage from "./LandingPage/LandingPage"
function App() {
  return (
    <div className="App">
      <HashRouter>
      <NavBar />
        <Routes>
          
          <Route index element={<LandingPage/>}/>
          {/* <Route path="/hello"    element={<HelloWorld/>}/>
          <Route path="/Labs/*"   element={<Labs/>}/>
          <Route path="/Kanbas/*" element={<Kanbas/>}/> */}
        </Routes>
    </HashRouter>
    </div>
  );
}

export default App;
