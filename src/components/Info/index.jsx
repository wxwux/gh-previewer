import React from "react";
import { Container, Logo, Text, Title, Row, TextContainer } from "./Info.styles";
import { Link } from "../../shared.styles";
import Icon from "@components/Icon";

const Info = ({ name, avatar, location, link }) => {

  return (
    <Container>
      <Logo>
        <img src={avatar} alt={`${name} logo`} />
      </Logo>
      <Text>
        <Title>{name}</Title>
        <Row>
          <Icon symbol="location" />
          <TextContainer>{location}</TextContainer>
        </Row>
        <Row>
          <Icon symbol="link" />
          <TextContainer> <Link target="_blank" href={link}>{link}</Link> </TextContainer>
        </Row>
      </Text>
    </Container>
  )
}

export default Info;