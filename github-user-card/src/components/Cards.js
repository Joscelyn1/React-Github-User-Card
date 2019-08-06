import React from "react";
import Card from "./Card.js";

function Cards(props) {
  const people = props.state.people;
  return (
    <div className="cards-container">
      {people.map(person => (
        <Card person={person} />
      ))}
    </div>
  );
}

export default Cards;
