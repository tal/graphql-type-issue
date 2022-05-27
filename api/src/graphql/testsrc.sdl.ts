export const schema = gql`
  type One {
    id: String!
    other: String
  }

  type Two {
    id: String!
    other: String
  }

  union All = One | Two

  type TestResponse {
    items: [All!]!
  }

  type Query {
    items: TestResponse! @skipAuth
  }
`
