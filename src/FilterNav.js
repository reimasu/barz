import {HashRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import NavBar from "./NavBar/NavBar";
import Feed from "./Feed/Feed";
import Explore from "./Explore/Explore";
import Profile from "./Profile/Profile";
import './FilterNav.css';
import Song from "./Explore/Song/Song";
function FilterNav() {
  return (
    <div className="filterNav">

      <NavBar /> 
        <Routes>
          <Route path="/Barz/Home" element={<Feed/>}/>
          <Route path="/Barz/Explore" element={<Explore/>}/>
          <Route path="/Barz/Explore/Song/:songResultId" element={<Song/>}/>
        </Routes>
    </div>
  );
}

export default FilterNav;
