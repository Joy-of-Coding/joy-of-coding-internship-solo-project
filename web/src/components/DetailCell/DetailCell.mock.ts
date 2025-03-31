// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  detail: {
    __typename: 'Detail' as const,
    id: 42,
  },
})
