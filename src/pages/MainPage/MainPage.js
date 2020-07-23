import React from "react";
import { Info, CardList } from "@components";
import {GSpacer, GTitle} from "../../App.styles";

const MainPage = () => {
  return (
    <React.Fragment>
      <GSpacer>
        <Info />
      </GSpacer>
      <GSpacer>
        <GTitle>Pinned Repositories</GTitle>
        <CardList items={["", "", ""]} />
      </GSpacer>
    </React.Fragment>
  )
}

export default MainPage;
