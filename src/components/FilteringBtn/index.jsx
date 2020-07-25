import React, { useContext, useState } from "react";
import { Container, Display, Dropdown, List, Item, Button } from "./FilteringBtn.styles";
import { FilterContext } from "../../context";

const filterTypes = [{
  name: "Sources",
  query: {
    fork: false
  }
}, {
  name: "Forks",
  query: {
    fork: "only"
  }
}, {
  name: "Archived",
  query: {
    archived: true
  }
}, {
  name: "Mirrors",
  query: {
    mirror: true
  }
}]

// const filterTypes = ["Sources", "Forks", "Archived", "Mirrors"]

const FilteringList = ({ onFilterChange }) => {
  return (
    <List>
      {
        filterTypes.map(filter => {
          return (
            <Item key={filter.name}>
              <Button onClick={() => onFilterChange(filter)}>{filter.name}</Button>
            </Item>
          )
        })
      }
    </List>
  )
}

const FilteringBtn = () => {
  const [filterName, setFilterName] = useState("");
  const { filter, setFilter } = useContext(FilterContext);

  const changeFilter = filter => {
    setFilterName(filter.name);
    const obj = {
      org: "impraise",
      ...filter.query
    }
    console.log('obbbj', obj);
    setFilter(obj)
  }

  const filterTitle = filterName.length ? `: ${filterName}` : "";

  return (
    <Container>
      <Display>Type{filterTitle}</Display>
      <Dropdown>
        {filter.one}
        <FilteringList
          onFilterChange={filter => changeFilter(filter)}
        />
      </Dropdown>
    </Container>
  )
}

export default FilteringBtn;