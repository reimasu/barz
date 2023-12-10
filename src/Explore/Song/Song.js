import { useParams } from "react-router-dom";
import React, {useState, useEffect} from "react";
import * as client from "../../Search/client"
function Song() {
    const {songResultId} = useParams();
    const [results, setResults] = useState(null);
    const getSong = async (songResultId) => {
        const results = await client.getSong(songResultId);
        setResults(results);
    }

    useEffect(() => {
        getSong();
    }, []);
    return(
        <div className='d-flex flex-column explore-container ps-5'>
        <h3 className='headings'>Explore BARZs</h3>
        <hr/>
        <div className="grid">
            <div className="row">
                <p>{results}</p>
            </div>

        </div>
    </div>
    )
};

export default Song;