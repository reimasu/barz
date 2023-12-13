import { Link,  useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Feed.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { faUserCircle, faFire, faMessage, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as client from "../Search/client.js"

function Feed() {
    const { search } = useParams();
    const [searchTerm, setSearchTerm] = useState(search);
    const [results, setResults] = useState(null);
    const [posts, setPosts] = useState(null);

    const allPosts = async () => {
        const posts = await client.getAllPosts();
        setPosts(posts);
    }
    const fetchSongs = async () => {
        const results = await client.searchSong(searchTerm);
        setResults(results);
    }

    const time = (timestamp) => {
        const date = new Date(timestamp);
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const year = date.getFullYear();
        const formattedDate = `${year}-${month}-${day}`;
        return formattedDate;
    }

    useEffect(() => {
        allPosts();
    }, []);
    const objPosts = JSON.parse(JSON.stringify(posts));

    return(
        <div className="feed-grid px-5 m-0">
            <div className='row pt-3'>
            <div className='col'>
                <h3 className='headings'>Your Feed</h3>
                <hr/>
                <ul>
                    {objPosts &&
                        objPosts.map((post, index) => (
                    <li className="list-group-item py-2" key={index}>
                        <div className='card feed-card'>
                            <div className='row justify-content-center'>            
                                <div className='col-1 pt-3 px-0'>
                                    <FontAwesomeIcon className="user-icon" icon={faUserCircle}>
                                    </FontAwesomeIcon>
                                </div>
                            <div className='col-8'>
                                <div className='row justify-content-between py-3'>
                                <Link to={`/Barz/Profile/${post.username}`} className='col text-start'>
                                                        @{post.username}
                                                    </Link>
                                    {/* <p className='col text-start'>@{post.username}</p> */}
                                    <h6 className='col text-end'>Posted on: {time(post.timestamp)}</h6>
                                </div>
                                <div className='row text-start py-3'>
                                    <p className='fw-normal'>“{post.lyric}”</p>
                                </div>
                                <div className='row-3 justify-content-end text-end pb-3'>
                                    <FontAwesomeIcon className="fa-xl col-1 orange-icon" icon={faFire}></FontAwesomeIcon>
                                    <FontAwesomeIcon className="fa-xl col-1 orange-icon" icon={faMessage}></FontAwesomeIcon>
                                </div>
                            </div>
                        </div>
                        </div>   
                    </li>   
                    ))}       
                </ul>
            </div>
            </div>
        </div>
    )
}

export default Feed;