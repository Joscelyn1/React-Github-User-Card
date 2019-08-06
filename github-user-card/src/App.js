import React from "react";
import "./App.css";
import PersonCard from "./components/PersonCard.js";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      people: ["hello"]
    };
  }

  componentDidMount() {
    fetch(`https://api.github.com/users/Joscelyn1/followers`)
      .then(response => {
        // first promise resolution is used to format the data.

        return response.json();
      })
      .then(response => {
        this.setState({ people: response });
      })
      .catch(err => {
        console.log(err);
        // HANDLE THIS ERROR
      });

    fetch(`https://api.github.com/users/Joscelyn1`)
      .then(response => {
        // first promise resolution is used to format the data.
        //console.log(response, "response");
        return response.json();
      })
      .then(response => {
        this.state.people.push(response);
        this.setState({ people: this.state.people });
        //console.log(this.state.people, "this.state.people");
      })
      .catch(err => {
        console.log(err);
        // HANDLE THIS ERROR
      });
  }

  render() {
    return (
      <div className="App">
        <img
          alt="github logo"
          width="300px"
          src={process.env.PUBLIC_URL + "/GitHub_Logo.png"}
        />
        <h1>Users</h1>
        <img
          alt="github logo"
          width="300px"
          src={process.env.PUBLIC_URL + "/Octocat.png"}
        />
        <div className="cardcontainer">
          {this.state.people.map(person => {
            return <PersonCard key={person.html_url} person={person} />;
          })}
        </div>
      </div>
    );
  }
}

export default App;
