import { useLocation } from "react-router-dom";
import "../CSS/SearchResults.css";

interface Book {
  title: string;
  author: string;
  categories?: string[];
  description?: string;
}

interface LocationState {
  results: Book[];
}

const SearchResults: React.FC = () => {
  const location = useLocation();

  const results = (location.state as LocationState | undefined)?.results || [];

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



