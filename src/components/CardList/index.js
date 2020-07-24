import React from "react";
import Card from "@components/Card";
import { List, ListItem } from "./CardList.styles";

const CardList = ({ items }) => {
  const itemsList = items.map((item, ndx) => (
    <ListItem key={ndx}>
      <Card />
    </ListItem>
  ));

  return (
    <List>
      {itemsList}
    </List>
  )
}

export default CardList;