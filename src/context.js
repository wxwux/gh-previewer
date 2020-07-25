import React from "react";

export const OrganizationContext = React.createContext({
  organization: "",
  setOrganization: () => { }
});

export const FilterContext = React.createContext({
  filter: {},
  setFilter: () => { }
});