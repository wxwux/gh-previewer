import React from "react";
import Icon from "@ui/Icon";
import { Container, Figure, Text } from "../Meta.styles";

const Forks = ({ forks }) => (
  <Container>
    <Figure>
      <Icon symbol="branch" />
    </Figure>
    <Text>{forks}</Text>
  </Container>
);

export default Forks;
