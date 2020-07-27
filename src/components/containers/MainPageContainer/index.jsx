import React from "react";
import Info from "@containers/Info";
import Pinned from "@containers/Pinned";
import Repos from "@containers/Repos";

const MainPageContainer = () => (
  <>
    <Info />
    <Pinned />
    <Repos />
  </>
);

export default MainPageContainer;
