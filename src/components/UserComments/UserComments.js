import React from 'react';

const UserComments = (props) => {
    const {email,name,body} = props.comments;
    return (
        <div>
            
            <h6>Name :{name}</h6>
            <h5> Email:{email}</h5>
            <p>{body}</p>
        </div>
    );
};

export default UserComments;