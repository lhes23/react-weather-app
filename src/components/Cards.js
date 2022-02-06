import React from "react";
import { Card } from "react-bootstrap";

const Cards = (props) => {
  let background = "cold";
  return (
    <Card>
      <Card.Header as="h5">{props.title}</Card.Header>
      <Card.Img src={require(`../assets/${background}.jpg`)} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Body>{props.children}</Card.Body>
      </Card.ImgOverlay>
    </Card>
  );
};

export default Cards;