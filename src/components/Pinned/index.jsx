import React from "react";
import { useQuery } from '@apollo/client';

import { Spacer, Title } from "../../shared.styles"
import CardList from "@components/CardList";

import { Pinned as PINNED_REPOS_QUERY } from "../../queries/pinned.gql";


const Pinned = () => {
  const { loading, data, error } = useQuery(PINNED_REPOS_QUERY, {
    variables: {
      login: "airbnb"
    }
  });

  if (loading) return <div>loading...</div>
  if (error) return <div>error...</div>

  const items = data.organization.pinnedItems.nodes

  return (
    <Spacer>
      <Title>Pinned Repositories</Title>
      <CardList items={items}></CardList>
    </Spacer>
  )
}

export default Pinned;