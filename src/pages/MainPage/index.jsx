import React from "react";
import Info from "@components/Info";
import CardList from "@components/CardList";
import { Spacer, Title } from "../../shared.styles";

const MainPage = () => {
  return (
    <React.Fragment>
      <Spacer>
        <Info />
      </Spacer>
      <Spacer>
        <Title>Pinned Repositories</Title>
        <CardList items={["", "", ""]} />
      </Spacer>
      <Spacer>
        <Title no-margin>Repositories</Title>
      </Spacer>
      <CardList items={["", "", ""]} wide />
    </React.Fragment>
  )
}

export default MainPage;
