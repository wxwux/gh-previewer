import React from "react";

import Info from "@containers/Info";
import Pinned from "@containers/Pinned";
import { Spacer } from "~/shared.styles";
import Repos from "@containers/Repos";

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
