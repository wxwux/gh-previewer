import React, { useState } from "react";
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
        <Input value={title} onChange={e => setTitle(e.target.value)} type="text" placeholder="Enter the name" />
        <Button>Send!</Button>
      </Form>
    </Container>
  )
}

export default Finder;
