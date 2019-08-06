import React from "react";
import "./App.css";
import Cards from "./components/Cards.js";
import axios from "axios";

class App extends React.Component {
  state = {
    people: []
  };

  componentDidMount = () => {
    axios
      .get("https://api.github.com/users/Joscelyn1/followers")
      .then(response => {
        this.setState({ people: response.data });
      })
      .catch(error => {
        console.error("Server Error", error);
      });
  };

  render() {
    return (
      <div className="App">
        <Cards people={this.state.people} />
      </div>
    );
  }
}

export default App;
