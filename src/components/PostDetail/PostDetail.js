import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UserComments from '../UserComments/UserComments';
import './PostDetail.css';
import Data from '../../FakeData'

const PostDetail = () => {
    const {postId} = useParams();
    const [postDetails, setDetails] =useState({});
    
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res=>res.json())
        .then(data=>setDetails(data))
        
    },[postId]);

    const [comments, setComments] = useState([]);
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then(res=>res.json())
        .then(data=>setComments(data))

    },[postId]);

    

    return (
        <div>   
            <div className="post-details">
                    <h2>Title : {postDetails.title}</h2>
                    <p>Description :{postDetails.body}</p>
                    <h4>Comments</h4>
            </div>
            
                {
                comments.map((comment, i) => {
                const author = Data[Math.floor(Math.random() * Data.length)];
                return (
                    <UserComments key={comment.id} comment={comment} author={author}></UserComments>
                        );
                })}
               
        </div>
    );
};

export default PostDetail;