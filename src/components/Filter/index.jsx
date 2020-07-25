import React from "react";
import FilteringBtn from "@components/FilteringBtn";
import { Container, Item, Title } from "./Filter.styles";

const Filter = ({onFilterChange}) => {
  return (
    <Container>
      <Title>Filter</Title>
      <Item>
        <FilteringBtn onFilterChange={onFilterChange} />
      </Item>
    </Container>
  )
}

export default Filter;