import React from "react";
import { useQuery } from '@apollo/client';
import { Container, Logo, Text, Title, Row, TextContainer } from "./Info.styles";
import { Link } from "../../shared.styles";
import Icon from "@components/Icon";
import ORGANIZATION_QUERY from "../../queries/organization.gql";

const Info = () => {
  const {loading, data, error} = useQuery(ORGANIZATION_QUERY);
 
  if (loading) return <div>loading...</div>
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
          <TextContainer> <Link href="//google.com">https://google.com</Link> </TextContainer>
        </Row>
      </Text>
    </Container>
  )
}

export default Info;