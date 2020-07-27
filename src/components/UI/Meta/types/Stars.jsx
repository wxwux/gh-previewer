import React from "react";
import Icon from "@ui/Icon";
import { Container, Figure, Text } from "../Meta.styles";

export const Stars = ({ stars }) => (
  <Container>
    <Figure>
      <Icon symbol="star" />
    </Figure>
    <Text>{stars}</Text>
  </Container>
);

export default Stars;
