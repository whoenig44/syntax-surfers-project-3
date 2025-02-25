import { gql } from 'graphql-tag';

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

  type UserBook {
    userId: ID!
    bookId: ID!
    checkedOut: Boolean!
}

  type Query {
    books: [Book] 
    book(id: ID!): Book
    getBooksByCategory(category: String!): [Book]
    userBooks(userId: ID!): [Book]
  }

  type Mutation {
    checkOutBook(userId: ID!, bookId: ID!): UserBook
    returnBook(userId: ID!, bookId: ID!): UserBook
}
  }
`;