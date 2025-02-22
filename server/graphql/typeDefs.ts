import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Book {
    id: ID!
    title: String!
    author: String!
    publicationDate: String
    isbn: String
    categories: [String]
    description: String
  }

  type Query {
    books: [Book] 
    book(id: ID!): Book
  }

  type Mutation {
    addBook(title: String!, author: String!, publicationDate: String, isbn: String, categories: [String], description: String): Book
    updateBook(id: ID!, title: String, author: String, publicationDate: String, isbn: String, categories: [String], description: String): Book
    deleteBook(id: ID!): Book
  }
`;