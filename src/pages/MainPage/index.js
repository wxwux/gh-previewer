import React from "react";
import Info from "@components/Info";
import CardList from "@components/CardList";
import { GSpacer, GTitle } from "../../App.styles";

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
