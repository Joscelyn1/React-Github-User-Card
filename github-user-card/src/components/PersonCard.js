import React from "react";
import { Card, CardTitle, CardImg, CardBody, Button } from "shards-react";
function PersonCard(props) {
  console.log(props.person, "props.person");
  return (
    <Card className="person-card" style={{ maxWidth: "300px" }}>
      <CardImg src={props.person.avatar_url} />
      <CardBody>
        <CardTitle>{props.person.login}</CardTitle>
        <p>{props.person.bio}</p>
        <Button theme="success" href={props.person.html_url}>
          Read more &rarr;
        </Button>
      </CardBody>
    </Card>
  );
}

export default PersonCard;
