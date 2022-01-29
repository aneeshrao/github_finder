import React from "react";
import UserItem from "./UserItem";

const Users = (props) => {
    console.log(props.users);
    return (
        <div style={userStyle}>
            {props.users.map((user)=> (
                <UserItem singleUser={user} />
            ))}
        </div>
    )
}

const userStyle = {
    display:"grid",
    gridTemplateColumns:'repeat(3, 1fr)',
    gridGap:'1rem',
}

export default Users;
