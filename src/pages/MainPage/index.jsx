import React, { useState } from "react";
import { useQuery } from "@apollo/client";

import { FilterContext, OrganizationContext } from "~/context";

import Info from "@containers/Info";
import Pinned from "@containers/Pinned";
import { Spacer } from "~/shared.styles";
import Repos from "@containers/Repos";

import { getOrganizationName as ORG_NAME_QUERY } from "../../operations/queries/organization.gql";

const MainPage = () => {
  const [organization, setOrganization] = useState("airbnb");
  const { data } = useQuery(ORG_NAME_QUERY);

  const [filter, setFilter] = useState({
    org: organization,
    fork: true,
    sort: "updated-desc"
  });

  console.log('filter-data', data);

  return (
    <React.Fragment>
      <Spacer>
        <Info />
      </Spacer>
      <Pinned />
      <FilterContext.Provider value={{ filter, setFilter }}>
        <Repos />
      </FilterContext.Provider>
    </React.Fragment>
  )
}

export default MainPage;
