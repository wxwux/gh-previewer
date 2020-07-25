import React from "react";
import { useQuery } from '@apollo/client';

import { Spacer, Title } from "../../shared.styles";
import CardList from "@components/CardList";
import Filter from "@components/Filter";

import { Owned as ALL_REPOS_QUERY } from "../../queries/repos.gql"

const Repos = () => {
  const { data, loading, error } = useQuery(ALL_REPOS_QUERY, {
    variables: {
      // login: "airbnb"
      login: "impraise"
    }
  });
  
  if (loading) return <div>loading...</div>
  if (error) return <div>error...</div>

  const items = data.organization.repositories.nodes

  return (
    <React.Fragment>
      <Spacer spreaded>
        <Title no-margin>Repositories</Title>
        <Filter />
      </Spacer>
      <CardList items={items} wide />
    </React.Fragment>
  )
}

export default Repos;