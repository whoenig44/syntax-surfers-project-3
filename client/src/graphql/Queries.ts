import { gql, useQuery } from '@apollo/client';

// Query to get books by category
export const GET_BOOKS_BY_CATEGORY = gql`
  query getBooksByCategory($category: String!) {
    booksByCategory(category: $category) {
      id
      title
      author
      publicationDate
      categories
    }
  }
`;

// Custom hook to use getBooksByCategory query
export const useGetBooksByCategory = (category: string) => {
  const { loading, error, data } = useQuery(GET_BOOKS_BY_CATEGORY, {
    variables: { category },
  });

  return {
    loading,
    error,
    books: data ? data.booksByCategory : [],
  };
};

// Query to get books by search parameters (title, author, category)
export const GET_BOOKS_BY_SEARCH = gql`
  query getBooksBySearch($title: String, $authorFirstName: String, $authorLastName: String, $category: String) {
    getBooksBySearch(
      title: $title,
      authorFirstName: $authorFirstName,
      authorLastName: $authorLastName,
      category: $category
    ) {
      id
      title
      author
      categories
    }
  }
`;

// Custom hook to use getBooksBySearch query
export const useGetBooksBySearch = (title: string, authorFirstName: string, authorLastName: string, category: string) => {
  const { loading, error, data } = useQuery(GET_BOOKS_BY_SEARCH, {
    variables: { title, authorFirstName, authorLastName, category },
  });

  return {
    loading,
    error,
    books: data ? data.getBooksBySearch : [],
  };
};

export const GET_USER_BOOKS = gql`
  query getUserBooks($userId: ID!) {
    userBooks(userId: $userId) {
      _id
      bookId
      checkedOut
      checkoutDate
      returnDate
    }
  }
`;
