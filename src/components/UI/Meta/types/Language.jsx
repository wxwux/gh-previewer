import React from "react";
import { Container, Figure, Text, Color } from "../Meta.styles";

export const Language = ({ name, color }) => {
  return (
    <Container>
      <Figure>
        <Color color={color} />
      </Figure>
      <Text>{name}</Text>
    </Container>
  )
}

export default Language;