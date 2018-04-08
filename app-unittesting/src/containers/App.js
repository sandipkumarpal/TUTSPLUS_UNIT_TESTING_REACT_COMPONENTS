import React, { Component } from 'react';
import SearchUserForm from '../components/SearchUserForm';
import UserList from './UserList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users : [
        {name: 'Sandip'},
        {name: 'Rayel'},
        {name: 'Gopal'},
        {name: 'Akash'},
        {name: 'Monoj'}
      ],
      filter: ''
    }
    this.inputChange = this.inputChange.bind(this);
  }
  inputChange(data) {
    console.log(data.target.value);
    this.setState({
      filter: data.target.value
    });
  }
  render() {
    return (
      <div className="App container">
        <h2 className="display-2">User Search</h2>
        <SearchUserForm searchChange={this.inputChange}/>
        <UserList users={this.state.users} filter={this.state.filter}/>
      </div>
    );
  }
}

export default App;
