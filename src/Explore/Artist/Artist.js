import { useParams, Link } from "react-router-dom";
import React, {useState, useEffect} from "react";
import * as client from "../../Search/client";
import './Artist.css';
  
function Artist() {  
    const {artistResultId} = useParams();
    const [artistName, setArtistName] = useState([]);
    const [artistCover, setArtistCover] = useState([]);
    const [results, setResults] = useState([]);


    const fetchArtistName = async () => {
        const artistName = await client.getArtistName(artistResultId);
        setArtistName(artistName)
    }

    const fetchArtistCover = async () => {
        const artistCover = await client.getArtistCover(artistResultId);
        setArtistCover(artistCover)
    }
    
    const fetchSongs = async () => {
        const r = await client.searchSong(artistName);
        setResults(r);
    }

    useEffect(() => { 
        fetchArtistName(artistResultId);
        fetchArtistCover(artistResultId);
        fetchSongs(artistName);
    }, [results]);
    
    const obj = JSON.parse(JSON.stringify(results));

    return (
    <div className='d-flex flex-column explore-container ps-5'>
            <h3 className='headings'>{artistName}</h3>
            <hr/> 
            <div className="grid">
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <img src={artistCover}
                                className="artist-cover col"></img>
                            <h3 className="text-start col">{artistName}</h3>
                        </div>
                    </div>
                    <div className="col">
                        <h4>Popular Songs by {artistName}</h4>
                        <ul className="list-group">
                            {obj &&
                             obj.map((song, index) => (
                                <li key={index} className="list-group-item">
                                    <Link to={`/Barz/Explore/Song/${song.result.id}`}>
                                        <p>{song.result.full_title}</p>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div> 
                </div>
            </div>
        </div>
    );
}


export default Artist;
