import React from "react";
import { useQuery } from '@apollo/client';

import { Container, Logo, Text, Title, Row, TextContainer } from "./Info.styles";
import { Link } from "../../shared.styles";
import Icon from "@components/Icon";

import { Info as ORGANIZATION_INFO_QUERY } from "../../queries/organization.gql";

const Info = () => {
  const { loading, data, error } = useQuery(ORGANIZATION_INFO_QUERY, {
    variables: {
      login: "airbnb"
    }
  });

  if (loading) return <div>loading...</div>
  if (error) return <div>error...</div>
 
  const {avatarUrl, name, location, websiteUrl} = data.organization;
  return (
    <Container>
      <Logo>
        <img src={avatarUrl} alt={`${name} logo`} />
      </Logo>
      <Text>
        <Title>{name}</Title>
        <Row>
          <Icon symbol="location" />
          <TextContainer>{location}</TextContainer>
        </Row>
        <Row>
          <Icon symbol="link" />
          <TextContainer> <Link target="_blank" href={websiteUrl}>{websiteUrl}</Link> </TextContainer>
        </Row>
      </Text>
    </Container>
  )
}

export default Info;