import React, { Component } from "react";

import "./Login.css";
import twitterLogo from "../twitter.svg";

export default class Login extends Component {
  state = {
    username: ""
  };

  handleUsername = e => {
    this.setState({
      username: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { username } = this.state;

    if (!username.length) return;

    localStorage.setItem("username", username);
    this.props.history.push('/timeline')
  };

  render() {
    return (
      <div className="login-wrapper">
        <img src={twitterLogo} alt="Twitter" />
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="Usuário"
            value={this.state.username}
            onChange={this.handleUsername}
          />
          <button type="submit">Entrar</button>
        </form>
      </div>
    );
  }
}
