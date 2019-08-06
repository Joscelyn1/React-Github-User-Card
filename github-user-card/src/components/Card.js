import React from "react";

function Card(props) {
  console.log(props.person, "props.person");
  return <div>{props.person.login}</div>;
}

export default Card;
