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
    checkoutDate: String
    returnDate: String
    
}

  type Query {
    books: [Book] 
    book(id: ID!): Book
    getBooksByCategory(category: String!): [Book]
    getBooksByName(author: String!): [Book]
    getBooksByTitle(title: String!): [Book]
    getBooksBySearch(author: String, title: String, category: String): [Book]
    userBooks(userId: ID!): [Book]
  }

  type Mutation {
    checkOutBook(userId: ID!, bookId: ID!): UserBook
    returnBook(userId: ID!, bookId: ID!): UserBook
<<<<<<< HEAD
}  
=======
}
  
>>>>>>> db8b55816404d40a77eedbfd30e4a41df7e550d3
`;