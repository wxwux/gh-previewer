import React from "react";
import { Container, Figure, Text, Color, List, Item } from "./Meta.styles";
import Icon from "@components/Icon";

const Language = () => {
  return (
    <Container>
      <Figure>
        <Color color="green" />
      </Figure>
      <Text>Ruby</Text>
    </Container>
  )
}

const Stars = () => {
  return (
    <Container>
      <Figure>
        <Icon symbol="star" />
      </Figure>
      <Text>Javasctipt</Text>
    </Container>
  )
}

const Meta = () => {
  return (
    <List>
      <Item>
        <Language />
      </Item>
      <Item>
        <Stars />
      </Item>
    </List>
  )
}

export default Meta;