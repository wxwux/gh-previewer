export default function setOrganizationName(organizationVar) {
  return (text) => {
    organizationVar(text);
  };
}