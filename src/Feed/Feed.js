import { Link,  useParams, useNavigate } from 'react-router-dom';
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

    const navigate = useNavigate();

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

    const fetchLoggedInAccount = async () => {
        const currentUser = await client.getLoggedInUser();
        if (currentUser) {
            console.log(currentUser);
            setUserId(currentUser._id);
        } else {
            return null;
        }
        console.log(currentUser);
    }

    const randomID = Math.floor(Math.random() * 10000) + 1;
    const [likeInfo, setLikeInfo] = useState({
      _id: randomID.toString(), 
      postId: "", 
      likerId: "", 
      timestamp: Date()});

    const setUserId = (userId) => setLikeInfo({
        ...likeInfo,
        likerId: userId });

    const setPostId = (pid) => setLikeInfo({
            ...likeInfo,
            postId: pid });

    const setDate = () => setLikeInfo({
        ...likeInfo,
        timestamp: Date() });

    const createOrDeleteLike = async () => {
        await client.createOrDeleteLike(likeInfo);
    };

    useEffect(() => {
        allPosts();
        fetchLoggedInAccount();
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
                                    <p className='col text-start'>@{post.username}</p>
                                    <h6 className='col text-end'>Posted on: {time(post.timestamp)}</h6>
                                </div>
                                <div className='row text-start py-3'>
                                    <p className='fw-normal'>“{post.caption}”</p>
                                    <p className='fw-normal py-2'><b>Song Name:{post.songId}</b></p>
                                </div>
                                <div className='row-3 justify-content-end text-end pb-3'>
                                    <button
                                        onClick={() => {
                                            if (fetchLoggedInAccount() === null) {
                                                navigate("/");
                                            } else {
                                                console.log("post id is " + post._id);
                                                setPostId(post._id);
                                                setDate();
                                                createOrDeleteLike();
                                            }
                                        }}>
                                        <FontAwesomeIcon className="fa-xl col-1 orange-icon" icon={faFire}></FontAwesomeIcon>
                                    </button>
                                    <button>
                                        <FontAwesomeIcon className="fa-xl col-1 orange-icon" icon={faMessage}></FontAwesomeIcon>
                                    </button>
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