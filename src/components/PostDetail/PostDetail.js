import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UserComments from '../UserComments/UserComments';
import './PostDetail.css';

const PostDetail = () => {
    const {postId} = useParams();
    const [postDetails, setDetails] =useState({});
    const [comtDetails, setComt] =useState([]);
    

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res=>res.json())
        .then(data=>setDetails(data))
        
    },[postId]);

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then(res=>res.json())
        .then(data=>setComt(data))

    },[postId]);

    

    return (
        <div>   <div className="post-details">
                    <h2>Title : {postDetails.title}</h2>
                    <p>Description :{postDetails.body}</p>
                    <h4>Comments</h4>
                </div>
            
            {
                comtDetails.slice(0,100).map(cd=> <UserComments comments={cd}></UserComments>)
            }
            
                
        </div>
    );
};

export default PostDetail;