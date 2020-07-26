import React, { useContext } from "react";
import { useQuery } from '@apollo/client';
import { Spacer, Title } from "~/shared.styles";
import { List, Item } from "./Repos.styles";

import Filter from "@ui/Filter";
import Card from "@ui/Card";
import { buildSearchQuery } from "~/libs/queries";

import { Search as SEARCH_REPOS_QUERY } from "~/operations/queries/repos.gql"
import {
  getOrganizationName as ORGANIZATION_NAME_QUERY
} from "~/operations/queries/organization.gql";
import {
  getSearchQuery as SEARCH_QUERY
} from "~/operations/queries/filter.gql";

const CardList = () => {

  const { data: searchQueryData } = useQuery(SEARCH_QUERY);
  const { data: organizationNameData } = useQuery(ORGANIZATION_NAME_QUERY);
  const { data, loading, error } = useQuery(SEARCH_REPOS_QUERY, {
    variables: {
      query: buildSearchQuery({
        org: organizationNameData["_organizationName"],
        ...searchQueryData["_query"]
      })
    }
  });


  if (loading) return <div>loading...</div>
  if (error) return <div>error...</div>

  const items = data.search.nodes;

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
  return (
    <React.Fragment>
      <Spacer spreaded>
        <Title no-margin>Repositories</Title>
        <Filter />
      </Spacer>
      <CardList />
    </React.Fragment>
  )
}

export default Repos;