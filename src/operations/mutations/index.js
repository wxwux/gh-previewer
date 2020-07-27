import setOrganizationName from "./setOrganizationName";
import setSearchQuery from "./setSearchQuery";
import { organizationVar, searchQueryVar } from "../../cache";

export const mutations = {
  setOrganizationName: setOrganizationName(organizationVar),
  setSearchQuery: setSearchQuery(searchQueryVar)
}
