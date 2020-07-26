import changeName from "./changeName";
import { organizationVar } from "../../cache";

export const mutations = {
  changeName: changeName(organizationVar),
}
