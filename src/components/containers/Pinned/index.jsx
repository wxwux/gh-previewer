import React, { useContext } from "react";
import { useQuery } from '@apollo/client';

import Card from "@ui/Card";
import Meta from "@ui/Meta";

import { Spacer, Title } from "~/shared.styles"
import { List, Item } from "./Pinned.styles";

import { Pinned as PINNED_REPOS_QUERY } from "~/operations/queries/repos.gql";

import {
  getOrganizationName as ORGANIZATION_NAME
} from "~/operations/queries/organization.gql";

const CardList = ({ items }) => {
  const itemsList = items.map((item) => {
    return (
      <Item key={item.id}>
        <Card
          name={item.name}
          description={item.description}
          meta={
            <Meta
              language={item.primaryLanguage}
              stars={item.stargazers.totalCount}
            />
          }
        />
      </Item>
    )
  });

  return (
    <List> {itemsList} </List>
  )
}


const Pinned = () => {
  const { data: organizationData } = useQuery(ORGANIZATION_NAME);
  const { loading, data, error } = useQuery(PINNED_REPOS_QUERY, {
    variables: {
      login: organizationData["_organizationName"]
    }
  });

  if (loading) return <div>loading...</div>
  if (error) return <div>error...</div>

  const items = data.organization.pinnedItems.nodes
  if (!items.length) return null;

  return (
    <Spacer>
      <Title>Pinned Repositories</Title>
      <CardList items={items} />
    </Spacer>
  )
}

export default Pinned;