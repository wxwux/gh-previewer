import React from "react";
import { useQuery } from '@apollo/client';

import Card from "@ui/Card";
import Filter from "@containers/Filter";
import Meta from "@ui/Meta";
import { Spacer, Title } from "~/shared.styles";
import { List, Item } from "./Repos.styles";

import { convertDate } from "~/libs/dates";
import { buildSearchQuery } from "~/libs/queries";

import { Search as SEARCH_REPOS_QUERY } from "~/operations/queries/repos.gql"
import {
  getOrganizationName as ORGANIZATION_NAME_QUERY
} from "~/operations/queries/organization.gql";

import {
  getSearchQuery as SEARCH_QUERY
} from "~/operations/queries/filter.gql";

const ReposList = () => {
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


  if (loading) return <Spacer>loading...</Spacer>
  if (error) return <Spacer>{error.message}</Spacer>

  const items = data.search.nodes;

  if (!items.length) return <Spacer>There are no repos for this filter</Spacer>

  const itemsList = items.map((item) => {

    return (
      <Item key={item.id}>
        <Card
          flat
          name={item.name}
          description={item.description}
          fork={item.parent}
          meta={
            <Meta
              language={item.primaryLanguage}
              stars={item.stargazers.totalCount}
              forks={item.forkCount}
              license={item.licenseInfo && item.licenseInfo.spdxId}
              updatedAt={convertDate(item.updatedAt)}
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
const Repos = () => {
  return (
    <React.Fragment>
      <Spacer spreaded>
        <Title no-margin>Repositories</Title>
        <Filter />
      </Spacer>
      <ReposList />
    </React.Fragment>
  )
}

export default Repos;