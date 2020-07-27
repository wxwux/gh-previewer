export const parseQLError = error => {
  return {
    notFound() {
      try {
        const errors = error.graphQLErrors[0]
        if (errors.type === "NOT_FOUND") {
          return errors.message
        }
      } catch (e) {
        return null
      }
    }
  }
}
