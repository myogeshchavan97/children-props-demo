import React from "react";
import { Card } from "react-bootstrap";

const MovieItem = ({ title, director, posterUrl, children }) => {
  return (
    <Card style={{ width: "18rem" }} className="movie">
      <Card.Img variant="top" src={posterUrl} className="movie-img" />
      <Card.Body>
        <Card.Title>{title.charAt(0) + title.slice(1)}</Card.Title>
        <Card.Text>
          <strong>Director:</strong> {director}{" "}
        </Card.Text>
        {children}
      </Card.Body>
    </Card>
  );
};

export default MovieItem;
