import { gql, useQuery } from "@apollo/client";
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

const MyBooks: React.FC = () => {
  
  const { data, loading, error } = useQuery(GET_USER_BOOKS, {
   
    onCompleted: (data) => console.log("Fetched user books:", data),
  });

  if (loading) return <p>Loading your books...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const checkedOutBooks: Book[] = data?.userBooks || [];

  return (
    <div className="cards-container">
      <h1 className="text-2xl font-bold">My Checked Out Books</h1>
      {checkedOutBooks.length > 0 ? (
        checkedOutBooks.map((book) => (
          <div key={book.id} className="card">
            <h2 className="title">{book.title}</h2>
            <p className="author">by {book.author}</p>
          </div>
        ))
      ) : (
        <p>You have not checked out any books yet.</p>
      )}
    </div>
  );
};

export default MyBooks;
