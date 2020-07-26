import React, { useContext } from "react";
import { useQuery } from '@apollo/client';

import Card from "@ui/Card";

import { Spacer, Title } from "~/shared.styles"
import { List, Item } from "./Pinned.styles";

import { Pinned as PINNED_REPOS_QUERY } from "~/operations/queries/repos.gql";

import { OrganizationContext } from "~/context";

const CardList = ({ items }) => {
  const itemsList = items.map((item) => {

    const meta = {
      language: item.primaryLanguage,
      stars: item.stargazers.totalCount,
    }

    const fork = {
      isFork : item.isFork,
      parent: item.parent
    }

    return (
      <Item key={item.id}>
        <Card
          name={item.name}
          description={item.description}
          fork={fork}
          meta={meta}
        />
      </Item>
    )
  });

  return (
    <List> {itemsList} </List>
  )
}


const Pinned = () => {
  const { organization } = useContext(OrganizationContext)
  const { loading, data, error } = useQuery(PINNED_REPOS_QUERY, {
    variables: {
      login: organization
    }
  });

  if (loading) return <div>loading...</div>
  if (error) return <div>error...</div>

  const items = data.organization.pinnedItems.nodes

  return (
    <Spacer>
      <Title>Pinned Repositories</Title>
      <CardList items={items} />
    </Spacer>
  )
}

export default Pinned;