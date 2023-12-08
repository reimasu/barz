import {HashRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import './App.css';
import NavBar from "./NavBar/NavBar";
import filterNav from "./filterNav";
import SignIn from "./LoginPage/SignIn";
import SignUp from "./LoginPage/SignUp";
import SignIn from "./LoginPage/SignIn";
import LandingPage from "./LandingPage/LandingPage"
import Feed from "./Feed/Feed";
// import Store from "./Store";
import { Provider } from "react-redux";

function App() {

  return (
    // <Provider store={Store}>  
      <div className="App">
          <HashRouter>
            <Routes>
              <Route index element={<LandingPage/>}/>
              <Route path="/Nav"  element={<filterNav/>}/>
              <Route path="/signup"    element={<SignUp/>}/>
              <Route path="/signin"    element={<SignIn/>}/>
              <Route path="/Barz/Home" element={<Feed/>}/>
            </Routes>
        </HashRouter>
      </div>
    // </Provider>
  );
}

export default App;
