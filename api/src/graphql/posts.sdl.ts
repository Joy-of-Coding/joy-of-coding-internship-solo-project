export const schema = gql`
  type Post {
    id: Int!
    task: String!
    description: String!
    dueDate: DateTime!
    category: String!
    status: String!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    posts: [Post!]! @requireAuth
    post(id: Int!): Post @requireAuth
  }

  input CreatePostInput {
    task: String!
    description: String!
    category: String!
    status: String!
    dueDate: DateTime
  }

  input UpdatePostInput {
    task: String
    description: String
    category: String
    status: String
    dueDate: DateTime
  }

  type Mutation {
    createPost(input: CreatePostInput!): Post! @requireAuth
    updatePost(id: Int!, input: UpdatePostInput!): Post! @requireAuth
    deletePost(id: Int!): Post! @requireAuth
  }
`
