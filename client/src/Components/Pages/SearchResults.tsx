import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const apiEndPoint = process.env.NODE_ENV === "development" ? "http://localhost:3001" : "";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  const authorName = searchParams.get("authorName") || "";
  const bookTitle = searchParams.get("bookTitle") || "";
  const category = searchParams.get("category") || "";

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const res = await fetch(`${apiEndPoint}/api/books/search`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ authorName, bookTitle, category }),
        });

        const data = await res.json();
        setResults(data);
      } catch (error) {
        console.error("Error fetching results:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [authorName, bookTitle, category]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Search Results</h1>
      {loading ? (
        <p>Loading results...</p>
      ) : results.length > 0 ? (
        <ul className="list-disc pl-5">
          {results.map((book: any, index) => (
            <li key={index} className="mt-2">{book.title} by {book.author}</li>
          ))}
        </ul>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default SearchResults;


