import React, {useState, useEffect} from "react";
import { Link, useParams} from "react-router-dom";
import './Explore.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import * as client from "../Search/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faM, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
function Explore() {
    const { search } = useParams();
    const [searchTerm, setSearchTerm] = useState(search);
    const [results, setResults] = useState(null);

    const fetchSongs = async () => {
        const results = await client.searchSong(searchTerm);
        setResults(results);
    }
    const obj = JSON.parse(JSON.stringify(results));

    return(
        <div className='d-flex flex-column explore-container'>
            <h3 className='headings'>Explore BARZs</h3>
            <hr/>
            <div className='grid'>
                <div className='row'>
                    <div className="col-3 ps-2">
                        <input type="text"
                        class="form-control search-bar"
                        id="searchMain"
                        placeholder="Search"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                fetchSongs();
                            }
                          }}/>  
                    </div>
                </div>
                <div className="row">
                    <h3 className="headings">Artists</h3>
                    <ul className="list-group d-flex flex-row">
                        {obj &&
                            obj.map((song, index) => (
                                <li key={index} className="list-group-item">
                                    <Link to="/signin">
                                        <img 
                                            className="search-album-cover"
                                            src={song.result.primary_artist.image_url}></img>
                                    </Link>
                                </li>
                        ))}
                    </ul>
                </div>
                <div className="row">
                    <h3 className="headings">Artists</h3>
                </div>
            </div>
        </div>
    )
}

export default Explore;