import { gql, useQuery, useMutation } from "@apollo/client";
import "../CSS/MyBooks.css";
import "../../index.css";

interface Book {
  id: string;
  title: string;
  author: string;
}

const GET_USER_BOOKS = gql`
  query getUserBooks {
    userBooks {
      id
      title
      author
    }
  }
`;

const RETURN_BOOK = gql`
  mutation returnBook($bookId: ID!) {
    returnBook(bookId: $bookId) {
      id
      checkedOut
    }
  }
`;

const MyBooks: React.FC = () => {
  const { data, loading, error, refetch } = useQuery(GET_USER_BOOKS);
  const [returnBook] = useMutation(RETURN_BOOK, {
    onCompleted: () => refetch(),
    onError: (err) => console.error("Error returning book:", err),
  });

  if (loading) return <p>Loading your books...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const checkedOutBooks: Book[] = data?.userBooks || [];

  const handleReturnBook = async (bookId: string) => {
    try {
      await returnBook({ variables: { bookId } });
    } catch (error) {
      console.error("Failed to return book", error);
    }
  };

  return (
    <div className="cards-container">
      <h1 className="text-2xl font-bold">My Checked Out Books</h1>
      <div></div>
      {checkedOutBooks.length > 0 ? (
        checkedOutBooks.map((book) => (
          <div key={book.id} className="card">
            <h2 className="title">{book.title}</h2>
            <p className="author">by {book.author}</p>
            <button className="return-button" onClick={() => handleReturnBook(book.id)}>
              Return Book
            </button>
          </div>
        ))
      ) : (
        <p>You have not checked out any books yet.</p>
      )}
    </div>
  );
};

export default MyBooks;
