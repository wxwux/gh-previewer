import changeName from "./changeName";
import setSearchQuery from "./setSearchQuery";
import { organizationVar, searchQueryVar } from "../../cache";

export const mutations = {
  changeName: changeName(organizationVar),
  setSearchQuery: setSearchQuery(searchQueryVar)
}
