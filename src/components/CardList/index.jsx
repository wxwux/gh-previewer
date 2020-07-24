import React from "react";
import Card from "@components/Card";
import { List, ListItem } from "./CardList.styles";

const CardList = ({ items, wide }) => {
  const itemsList = items.map((item, ndx) => (
    <ListItem wide={wide} key={ndx}>
      <Card flat={wide} />
    </ListItem>
  ));

  return (
    <List wide={wide}>
      {itemsList}
    </List>
  )
}

export default CardList;