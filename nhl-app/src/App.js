import React, { Component } from "react";
import "./App.css";

import TeamsArray from "./components/teamsArray";

class App extends Component {
  constructor() {
    super();
    this.state = {
      teams: []
    };
  }

  componentDidMount() {
    this.getTeams("https://statsapi.web.nhl.com/api/v1/teams/");
  }

  getTeams = URL => {
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ teams: data.teams });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">NHL Teams</h1>
        <TeamsArray teams={this.state.teams} />
      </div>
    );
  }
}

export default App;
