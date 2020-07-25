import React from "react";

import Info from "@components/Info";
import Pinned from "@components/Pinned";
import { Spacer } from "../../shared.styles";
import Repos from "@components/Repos";

const MainPage = () => {
  return (
    <React.Fragment>
      <Spacer>
        <Info />
      </Spacer>
      <Pinned />
      <Repos />
    </React.Fragment>
  )
}

export default MainPage;
