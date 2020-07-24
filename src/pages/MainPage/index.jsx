import React from "react";
import { useQuery } from '@apollo/client';

import Info from "@components/Info";
import CardList from "@components/CardList";
import { Spacer, Title } from "../../shared.styles";
import ORGANIZATION_QUERY from "../../queries/organization.gql";

const MainPage = () => {
  const { loading, data, error } = useQuery(ORGANIZATION_QUERY, {
    variables: {
      login: "airbnb"
    }
  });

  if (loading) return <div>loading...</div>

  const { organization } = data;

  return (
    <React.Fragment>
      <Spacer>
        <Info
          title={organization.name}
          avatar={organization.avatarUrl}
          location={organization.location}
          link={organization.websiteUrl}
        />
      </Spacer>
      <Spacer>
        <Title>Pinned Repositories</Title>
        <CardList items={["", "", ""]} />
      </Spacer>
      <Spacer>
        <Title no-margin>Repositories</Title>
      </Spacer>
      <CardList items={["", "", ""]} wide />
    </React.Fragment>
  )
}

export default MainPage;
