import React from "react";

function User(props) {
    return (
        <li className="list-group-item">{props.user.name}</li>
    );
}

export default User;
