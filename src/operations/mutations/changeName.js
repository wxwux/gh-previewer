export default function changeName(organizationVar) {
  return (text) => {
    organizationVar(text);
  };
}