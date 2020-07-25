import React, { useState } from "react";

import { FilterContext } from "../../context";

import Info from "@components/Info";
import Pinned from "@components/Pinned";
import { Spacer } from "../../shared.styles";
import Repos from "@components/Repos";

const MainPage = () => {
  const [filter, setFilter] = useState({
    org: "impraise",
    fork: true,
    sort: "updated-desc"
  });

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
