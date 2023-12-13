import {HashRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import NavBar from "./NavBar/NavBar";
import Feed from "./Feed/Feed";
import Explore from "./Explore/Explore";
import Profile from "./Profile/Profile";
import './FilterNav.css';
import Song from "./Explore/Song/Song";
import Artist from "./Explore/Artist/Artist";
import Studio from "./Studio/Studio";
function FilterNav() {
  return (
    <div className="filterNav">
      <NavBar /> 
        <Routes>
          <Route path="/Barz/Feed" element={<Feed/>}/>
          <Route path="/Barz/Explore" element={<Explore/>}/>
          <Route path="/Barz/Explore/Song/:songResultId" element={<Song/>}/>
          <Route path="/Barz/Explore/Artist/:artistResultId" element={<Artist/>}/>
          <Route path="/Barz/Studio" element={<Studio/>}/>
        </Routes>
    </div>
  );
}

export default FilterNav;
