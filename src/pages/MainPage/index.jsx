import React, { useState } from "react";

import { FilterContext, OrganizationContext } from "~/context";

import Info from "@containers/Info";
import Pinned from "@containers/Pinned";
import { Spacer } from "~/shared.styles";
import Repos from "@containers/Repos";

const MainPage = () => {
  const [organization, setOrganization] = useState("airbnb");

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
          <Repos />
        </FilterContext.Provider>
      </OrganizationContext.Provider>
    </React.Fragment>
  )
}

export default MainPage;
