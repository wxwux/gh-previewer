import React, { useContext } from "react";
import { useQuery } from '@apollo/client';

import { Spacer, Title } from "../../shared.styles"
import CardList from "@components/CardList";

import { Pinned as PINNED_REPOS_QUERY } from "../../queries/repos.gql";

import { OrganizationContext } from "../../context";


const Pinned = () => {
  const { organization } = useContext(OrganizationContext)
  const { loading, data, error } = useQuery(PINNED_REPOS_QUERY, {
    variables: {
      login: organization
    }
  });

  console.log("org", organization);

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