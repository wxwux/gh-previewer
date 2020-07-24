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
  if (error) return <div>error...</div>

  const { organization } = data;

  return (
    <React.Fragment>
      <Spacer>
        <Info
          name={organization.name}
          avatar={organization.avatarUrl}
          location={organization.location}
          link={organization.websiteUrl}
        />
      </Spacer>
      {organization.pinnedItems.nodes.length > 0 &&
        <Spacer>
          <Title>Pinned Repositories</Title>
          <CardList items={organization.pinnedItems.nodes} />
        </Spacer>
      }
      <Spacer>
        <Title no-margin>Repositories</Title>
      </Spacer>
      {
        organization.repositories.nodes.length > 0 && 
        <CardList items={organization.repositories.nodes} wide />
      }
    </React.Fragment>
  )
}

export default MainPage;
