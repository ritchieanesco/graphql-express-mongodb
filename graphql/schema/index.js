const { buildSchema } = require("graphql");

module.exports = buildSchema(`

  type Article {
    _id: ID!
    title: String!
    body: String!
    createdAt: String!
  }

  type Query {
    articles:[Article!]
  }
  
  input ArticleInput {
    title: String!
    body: String!
  }

  type Mutation {
    createArticle(article:ArticleInput): Article
  }

  schema {
    query: Query
    mutation: Mutation
  }
`);
