import React, { useState } from "react";
import { Container, Display, Dropdown, List, Item, Button } from "./FilteringBtn.styles";

const filterTypes = ["Sources", "Forks", "Archived", "Mirrors"]

const FilteringList = ({ onFilterChange }) => {
  return (
    <List>
      {
        filterTypes.map(filter => {
          return (
            <Item key={filter}>
              <Button onClick={() => onFilterChange(filter)}>{filter}</Button>
            </Item>
          )
        })
      }
    </List>
  )
}

const FilteringBtn = () => {
  const [filter, setFilter] = useState("");

  const changeFilter = filterName => {
    setFilter(filterName);
  }

  const filterTitle = filter.length ? `: ${filter}` : "";

  return (
    <Container>
      <Display>Type{filterTitle}</Display>
      <Dropdown>
        <FilteringList
          onFilterChange={changeFilter}
        />
      </Dropdown>
    </Container>
  )
}

export default FilteringBtn;