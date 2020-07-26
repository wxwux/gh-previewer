import React from "react";
import { Container, Text } from "../Meta.styles";

const UpdatedAt = ({ date }) => {
  return (
    <Container>
      <Text>Updated on {date}</Text>
    </Container>
  )
}

export default UpdatedAt;