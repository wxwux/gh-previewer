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
      <Text>3</Text>
    </Container>
  )
}

const Forks = () => {
  return (
    <Container>
      <Figure>
        <Icon symbol="branch" />
      </Figure>
      <Text>1</Text>
    </Container>
  )
}

const License = () => {
  return (
    <Container>
      <Figure>
        <Icon symbol="law" />
      </Figure>
      <Text>MIT</Text>
    </Container>
  )
}

const UpdatedOn = () => {
  return (
    <Container>
      <Text>Updated on 21 Feb</Text>
    </Container>
  )
}


const Meta = ({ shortened }) => {
  return (
    <List>
      <Item>
        <Language />
      </Item>
      <Item>
        <Stars />
      </Item>

      {Boolean(shortened) === false &&
        <React.Fragment>
          <Item>
            <Forks />
          </Item>
          <Item>
            <License />
          </Item>
          <Item>
            <UpdatedOn />
          </Item>
        </React.Fragment>
      }
    </List>
  )
}

export default Meta;