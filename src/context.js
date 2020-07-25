import React from "react";

export const OrganizationContext = React.createContext({
  name: "Airbnb"
});

export const FilterContext = React.createContext({
  filter : {} ,
  setFilter: () => {}
});