import React from "react";
import { Container, Title, Header, Description, CardMeta } from "./Card.styles"
import Meta from "@components/Meta";

const Card = () => {
  return (
    <Container>
      <Header>
        <Title>SpawPoint</Title>
      </Header>
      <Description>
        A starter template for new Rails Project
      </Description>
      <CardMeta>
        <Meta />
      </CardMeta>
    </Container>
  )
}

export default Card;