import {HashRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import NavBar from "./NavBar/NavBar";
import Feed from "./Feed/Feed";
import Profile from "./Profile/Profile";
function FilterNav() {
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
