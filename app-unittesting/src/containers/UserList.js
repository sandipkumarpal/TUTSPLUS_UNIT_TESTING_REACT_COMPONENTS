import React from 'react';
import User from '../components/User';

class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: ''
        }
    }
    render() {
        const {users, filter } = this.props;
        return (
            <ul className="list-group">
                {users
                    .filter(user => user.name.toLowerCase().indexOf(filter.toLowerCase()) > -1)
                    .map( user => <User key={user.name} user={user}/> )
                }
            </ul>
        );
    }
}

export default UserList;
