import React from "react";
import { Container, Figure, Text } from "../Meta.styles";
import Icon from "@ui/Icon";

const Forks = ({ forks }) => {
  return (
    <Container>
      <Figure>
        <Icon symbol="branch" />
      </Figure>
      <Text>{forks}</Text>
    </Container>
  )
}

export default Forks;
