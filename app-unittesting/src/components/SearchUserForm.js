import React from "react";

function User(props) {
    return (
        <div className="form-group">
            <input 
                className="form-control form-control-lg" 
                type="text" 
                placeholder="Search users..."
                onChange={props.searchChange}
                />
        </div>
    );
}

export default User;