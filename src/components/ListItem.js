import React from "react";
import { Button } from "react-bootstrap";
import MovieItem from "./MovieItem";

const ListItem = (props) => {
  return (
    <MovieItem {...props}>
      <Button variant="primary" className="btn-edit">
        Edit
      </Button>
      <Button variant="danger">Delete</Button>
    </MovieItem>
  );
};

export default ListItem;
