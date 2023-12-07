import {HashRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import './App.css';
import NavBar from "./NavBar/NavBar";
import filterNav from "./filterNav";
import SignUp from "./LoginPage/SignUp";
import LandingPage from "./LandingPage/LandingPage"
function App() {

  return (
    <div className="App">
      <HashRouter>
      
        <Routes>
          <Route index element={<LandingPage/>}/>
          <Route path="/Nav"  element={<filterNav/>}/>
          <Route path="/signup"    element={<SignUp/>}/>
        </Routes>
    </HashRouter>
    </div>
  );
}

export default App;
