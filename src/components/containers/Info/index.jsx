import React from "react";
import { useQuery } from '@apollo/client';

import { Container, Logo, Text, Title, Row, TextContainer } from "./Info.styles";
import { Link, Spacer } from "~/shared.styles";
import Icon from "@ui/Icon";

import {
  Info as ORGANIZATION_INFO_QUERY,
  getOrganizationName as ORGANIZATION_NAME
} from "~/operations/queries/organization.gql";

const Info = () => {
  const { data: organizationData } = useQuery(ORGANIZATION_NAME);
  const { loading, data, error } = useQuery(ORGANIZATION_INFO_QUERY, {
    variables: {
      login: organizationData["_organizationName"]
    }
  });

  if (loading) return <div>loading...</div>
  if (error) return <div>error...</div>

  const { avatarUrl, name, location, websiteUrl } = data.organization;
  return (
    <Spacer>
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
    </Spacer>
  )
}

export default Info;