import React from "react";
import { Container, Logo, Text, Title, Row, TextContainer } from "./Info.styles";
import { Link } from "../../shared.styles";
import Icon from "@components/Icon";

const Info = ({ title, avatar, location, link }) => {

  return (
    <Container>
      <Logo>
        <img src={avatar} alt={`${title} logo`} />
      </Logo>
      <Text>
        <Title>{title}</Title>
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