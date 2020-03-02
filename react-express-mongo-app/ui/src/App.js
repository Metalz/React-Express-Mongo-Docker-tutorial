import React, { Component } from "react";
import logo from "./logo.svg";
import axios from "axios";
import "./App.css";

const apiUrl = `http://217.160.212.154:8080`;

class App extends Component {
  state = {
    users: []
  };

  async createUser() {
    await axios.get(apiUrl + "/user-create");
    this.loadUsers();
  }

  async loadUsers() {
    const res = await axios.get(apiUrl + "/users");
    this.setState({
      users: res.data
    });
  }

  componentDidMount() {
    this.loadUsers();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button onClick={() => this.createUser()}>Create User</button>
          <p>Users list:</p>
          <ul>
            {this.state.users.map(user => (
              <li key={user.id}>id: {user._id}</li>
            ))}
          </ul>
        </header>
      </div>
    );
  }
}

export default App;
