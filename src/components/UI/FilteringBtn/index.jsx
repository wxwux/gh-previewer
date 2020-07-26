import React, { useState } from "react";
import { Container, Display, Dropdown, List, Item, Button, Indicator } from "./FilteringBtn.styles";
import Icon from "@ui/Icon";
import { mutations } from "../../../operations/mutations";

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

const FilteringList = ({ onFilterChange, currentFilter }) => {
  return (
    <List>
      {
        filterTypes.map(filter => {
          console.log(filter.name, currentFilter);
          return (
            <Item active={filter.name === currentFilter} key={filter.name}>
              <Button onClick={() => onFilterChange(filter)}>
                {filter.name}
                <Indicator>
                  <Icon symbol="check" width="10" height="10" fill="#63A9F3" />
                </Indicator>
              </Button>
            </Item>
          )
        })
      }
    </List>
  )
}

const FilteringBtn = () => {
  const [filterName, setFilterName] = useState("");
  const [isOpened, setIsOpened] = useState(false);


  const changeFilter = filter => {
    setIsOpened(false);
    setFilterName(filter.name);
    mutations.setSearchQuery(filter.query);
  }

  const filterTitle = filterName.length ? `: ${filterName}` : "";

  return (
    <Container>
      <Display active={isOpened} onClick={() => setIsOpened(true)}>Type{filterTitle}</Display>
      {isOpened &&
        <Dropdown>
          <FilteringList
            onFilterChange={filter => changeFilter(filter)}
            currentFilter={filterName}
          />
        </Dropdown>
      }
    </Container>
  )
}

export default FilteringBtn;