import React from "react";
import Card from "@components/Card";
import { List, Item } from "./CardList.styles";

const CardList = ({ items, wide }) => {
  const itemsList = items.map((item) => {

    const meta = {
      language: item.primaryLanguage,
      stars: item.stargazers.totalCount,
      license: item.licenseInfo && item.licenseInfo.spdxId,
      forks: item.forkCount,
      updatedAt: item.updatedAt
    }

    const fork = {
      isFork : item.isFork,
      parent: item.parent
    }

    return (
      <Item wide={wide} key={item.id}>
        <Card
          flat={wide}
          name={item.name}
          description={item.description}
          fork={fork}
          meta={meta}
        />
      </Item>
    )
  });

  return (
    <List wide={wide}>
      {itemsList}
    </List>
  )
}

export default CardList;