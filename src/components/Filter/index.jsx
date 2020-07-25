import React from "react";
import FilteringBtn from "@components/FilteringBtn";
import { Container, Item, Title } from "./Filter.styles";

const Filter = () => {
  return (
    <Container>
      <Title>Filter</Title>
      <Item>
        <FilteringBtn />
      </Item>
    </Container>
  )
}

export default Filter;