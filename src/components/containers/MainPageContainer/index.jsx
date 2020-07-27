import React from "react";
import Info from "@containers/Info";
import Pinned from "@containers/Pinned";
import Repos from "@containers/Repos";

const MainPageContainer = () => {
  return (
    <React.Fragment>
      <Info />
      <Pinned />
      <Repos />
    </React.Fragment>
  )
}

export default MainPageContainer;