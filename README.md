# Experiment with GraphQL, Node JS, Express and MongoDB

Build a simple API using GraphQL, Node JS, Express and MongoDB.

Experiment with GraphQL and understand how schema and types relate to GraphQL.

Experiment with MongoDB's [Atlas](https://cloud.mongodb.com/) feature

## Server

http://localhost:3000/graphql

```sh
$ yarn start
```

## Mutation

```js
mutation {
  createArticle(article:{ title: "Test", body:"This is a test"}){
    title
    body
    createdAt
  }
}
```

## Query

```js
query {
  articles{
    title
    body
    createdAt
  }
}
```
