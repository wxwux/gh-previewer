import React from "react";
import DropdownBtn from "@ui/DropdownBtn";
import { Container, Item, Title } from "./Filter.styles";
import { mutations } from "~/operations/mutations";
import repoFilterTypes from "./filters/repoTypes.json";

const Filter = () => (
  <Container>
    <Title>Filter</Title>
    <Item>
      <DropdownBtn
        title="Type"
        list={repoFilterTypes}
        onChange={(item) => mutations.setSearchQuery(item.query)}
      />
    </Item>
  </Container>
);

export default Filter;
