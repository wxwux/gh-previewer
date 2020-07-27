import React, { useState } from "react";
import PropTypes from "prop-types";
import { Container, Form, Input, Button } from "./Finder.styles";

const Finder = ({ onSubmit }) => {
  const [title, setTitle] = useState("");

  const submitHandler = e => {
    e.preventDefault();
    const trimmedTitle = title.trim();
    if (trimmedTitle) {
      onSubmit(trimmedTitle);
    }
  }

  return (
    <Container>
      <Form onSubmit={submitHandler}>
        <Input data-cy-id="finder-input" value={title} onChange={e => setTitle(e.target.value)} type="text" placeholder="Enter the name" />
        <Button data-cy-id="finder-btn">Send!</Button>
      </Form>
    </Container>
  )
}

Finder.propTypes = {
  onSubmit: PropTypes.func
}

export default Finder;
