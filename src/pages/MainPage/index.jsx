import React, { useState } from "react";
import { useQuery } from "@apollo/client";

import { FilterContext, OrganizationContext } from "~/context";

import Info from "@containers/Info";
import Pinned from "@containers/Pinned";
import { Spacer } from "~/shared.styles";
import Repos from "@containers/Repos";

import { getOrganizationName as ORG_NAME_QUERY } from "../../operations/queries/filter.gql";

const MainPage = () => {
  const [organization, setOrganization] = useState("airbnb");
  const {data} = useQuery(ORG_NAME_QUERY);

  console.log('dada', data);

  const [filter, setFilter] = useState({
    org: organization,
    fork: true,
    sort: "updated-desc"
  });

  return (
    <React.Fragment>
      <OrganizationContext.Provider value={{ organization, setOrganization }}>
        <Spacer>
          <Info />
        </Spacer>
        <Pinned />
        <FilterContext.Provider value={{ filter, setFilter }}>
          {/* <Repos /> */}
        </FilterContext.Provider>
      </OrganizationContext.Provider>
    </React.Fragment>
  )
}

export default MainPage;
