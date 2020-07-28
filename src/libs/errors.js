export const parseQLError = (error) => {
  if (!(error instanceof Object)) return null;
  if (!error.graphQLErrors) return null;

  const errorObj = error.graphQLErrors[0];
  return {
    notFound() {
      return errorObj.type === "NOT_FOUND"
        ? errorObj.message
        : null;
    },
  };
};
