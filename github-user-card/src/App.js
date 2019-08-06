import React from "react";
import "./App.css";
import Card from "./components/Card.js";

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
        console.log(response, "response");
        return response.json();
      })
      .then(response => {
        this.setState({ people: response });
        console.log(this.state.people, "this.state.people");
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
        {this.state.people.map(person => {
          return <Card person={person} />;
        })}
      </div>
    );
  }
}

export default App;
