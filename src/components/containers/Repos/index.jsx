import React, { useContext } from "react";
import { useQuery } from '@apollo/client';
import { FilterContext } from "~/context";

import { Spacer, Title } from "~/shared.styles";
import { List, Item } from "./Repos.styles";

import Filter from "@ui/Filter";
import Card from "@ui/Card";
import { buildSearchQuery } from "~/libs/queries";

import { Search as SEARCH_REPOS_QUERY } from "~/queries/repos.gql"
import {
  getOrganizationName as ORGANIZATION_NAME
} from "~/operations/queries/organization.gql";

const CardList = ({ items }) => {
  const itemsList = items.map((item) => {

    const meta = {
      language: item.primaryLanguage,
      stars: item.stargazers.totalCount,
      license: item.licenseInfo && item.licenseInfo.spdxId,
      forks: item.forkCount,
      updatedAt: item.updatedAt
    }

    const fork = {
      isFork: item.isFork,
      parent: item.parent
    }

    return (
      <Item key={item.id}>
        <Card
          flat
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

const Repos = () => {
  const { filter } = useContext(FilterContext);
  const { data, loading, error } = useQuery(SEARCH_REPOS_QUERY, {
    variables: {
      query: buildSearchQuery(filter)
    }
  });

  if (loading) return <div>loading...</div>
  if (error) return <div>error...</div>

  const items = data.search.nodes;

  return (
    <React.Fragment>
      <Spacer spreaded>
        <Title no-margin>Repositories</Title>
        <Filter />
      </Spacer>
      <CardList items={items} />
    </React.Fragment>
  )
}

export default Repos;