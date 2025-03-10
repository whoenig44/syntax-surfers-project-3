import { useLocation } from "react-router-dom";
import { gql, useMutation } from "@apollo/client";
import "../CSS/SearchResults.css";
import "../../index.css"

interface Book {
  title: string;
  author: string;
  categories?: string[];
  description?: string;
}

interface LocationState {
  results: Book[];
}

const CHECK_OUT_BOOK = gql`
  mutation CheckOutBook($userId: ID, $bookId: ID!) {
    checkOutBook(title: $title) {
      success
      message
    }
  }
`;

const SearchResults: React.FC = () => {
  const location = useLocation();
  const results = (location.state as LocationState | undefined)?.results || [];

  const [checkOutBook, { loading, error }] = useMutation(CHECK_OUT_BOOK);

  const handleCheckOut = async (title: string) => {
    try {
      const { data } = await checkOutBook({ variables: { title } });
      if (data.checkOutBook.success) {
        alert(`Successfully checked out: ${title}`);
      } else {
        alert(`Failed to check out: ${data.checkOutBook.message}`);
      }
    } catch (err) {
      console.error("Error checking out book:", err);
      alert("An error occurred while checking out the book.");
    }
  };

  return (
    <div className="cards-container">
      <h1 className="text-2xl font-bold">Search Results</h1>
      <div>
        {results.length > 0 ? (
          results.map((book, index) => (
            <div key={index} className="card">
              <h2 className="title">{book.title}</h2>
              <p className="author">by {book.author}</p>
              {book.categories && <p className="categories">Categories: {book.categories.join(", ")}</p>}
              {book.description && <p className="description">{book.description}</p>}
              <button 
                className="checkout-button" 
                onClick={() => handleCheckOut(book.title)}
                disabled={loading}
              >
                {loading ? "Checking Out..." : "Check Out"}
              </button>
              {error && <p className="error-message">Error: {error.message}</p>}
            </div>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div> 
    </div>
  );
};

export default SearchResults;
