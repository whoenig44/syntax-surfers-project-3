import { useLocation } from "react-router-dom";
import { gql, useMutation, useQuery } from "@apollo/client";
import "../CSS/SearchResults.css";
import "../../index.css"
import { useEffect, useState } from "react";


interface Book {
  id: string;
  title: string;
  author: string;
  categories?: string[];
  description?: string;
}

interface LocationState {
  results: Book[];
}

const GET_CHECKOUTS = gql`
  query checkOuts {
    checkOuts {
      userId
      bookId
    }
  }
`;

const CHECK_OUT_BOOK = gql`
  mutation CheckOutBook( $bookId: ID!) {
    checkOutBook(bookId: $bookId) {
      userId
      bookId
    }
  }
`;

const SearchResults: React.FC = () => {
  const location = useLocation();
  const results = (location.state as LocationState | undefined)?.results || [];
  console.log(results)

  const { data: checkOutsData } = useQuery(GET_CHECKOUTS);
  const [checkOutBook, { loading, error }] = useMutation(CHECK_OUT_BOOK);

  const [checkedOutBooks, setCheckedOutBooks] = useState<any>([]);


  useEffect(() => {

    console.log("checkOutsData", checkOutsData);
    setCheckedOutBooks(checkOutsData ? checkOutsData.checkOuts : []);
  }, [checkOutsData]);
 

  const handleCheckOut = async (bookId: String) => {
    try {
      // const userID = "123"; // Hardcoded for now
      const { data } = await checkOutBook({ variables: { bookId } });
      console.log("checkout book data", data);
      if (data.checkOutBook.bookId) {
        alert(`Successfully checked out: ${bookId}`);
        setCheckedOutBooks([...checkedOutBooks, data.checkOutBook]);
      } else {
        alert(`Failed to check out: ${data.checkOutBook.bookId}`);
      }
    } catch (err) {
      console.error("Error checking out book:", err);
      alert("An error occurred while checking out the book.");
    }
  };

  const checkDisableButton = (bookId: string) => {
    if (!checkedOutBooks.length) {
      return false;
    }
    const checkedOut =  checkedOutBooks.some((checkOut: { bookId: string }) => checkOut.bookId === bookId);
    return checkedOut;
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
                onClick={() => handleCheckOut(book.id)}
                disabled={checkDisableButton(book.id)}
                style={{ backgroundColor: checkDisableButton(book.id) ? "gray" : "" }}
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
