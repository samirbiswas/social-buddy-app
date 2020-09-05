import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UserComments from '../UserComments/UserComments';
import Data from '../../FakeData/'

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

    },[postId])
    const [images] = useState([Data]);

   //const imgs = images.map(im=> );
   
  


    // useEffect(()=>{
    //     fetch(`https://randomuser.me/api/?results=100`)
    //     .then(res=>res.json())
    //     .then(data=>setimages(data.results))

    // },[])

    return (
        <div >
            <h1>Title : {postDetails.title}</h1>
            
            {
                comtDetails.slice(0,100).map(cd=> <UserComments comments={cd}></UserComments>)
            }
            
                
        </div>
    );
};

export default PostDetail;