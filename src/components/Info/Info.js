import React from "react";
import { Container, Logo, Text, Title, Row, TextContainer } from "./Info.styles";
import { GLink } from "../../App.styles";
import { Icon } from "@components";

const Info = () => {
  return (
    <Container>
      <Logo>
        <img src="https://picsum.photos/200/200" alt="organiztion logo" />
      </Logo>
      <Text>
        <Title>Impraise</Title>
        <Row>
          <Icon symbol="location" />
          <TextContainer> Amsterdam / New York / Lisbon </TextContainer>
        </Row>
        <Row>
          <Icon symbol="link" />
          <TextContainer> <GLink href="//google.com">https://google.com</GLink> </TextContainer>
        </Row>
      </Text>
    </Container>
  )
}

export default Info;