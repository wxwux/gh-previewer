import React from "react";
import { Container, Figure, Text } from "../Meta.styles";
import Icon from "@ui/Icon";

export const Stars = ({ stars }) => {
  return (
    <Container>
      <Figure>
        <Icon symbol="star" />
      </Figure>
      <Text>{stars}</Text>
    </Container>
  )
}

export default Stars;