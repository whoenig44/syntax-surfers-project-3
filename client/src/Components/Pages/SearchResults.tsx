import { useEffect, useState } from "react";
import { useSearchParams, useLocation } from "react-router-dom";

const apiEndPoint = process.env.NODE_ENV === "development" ? "http://localhost:3001" : "";

const SearchResults = () => {
  const Location = useLocation();
  
  console.log(Location)

  const renderSearchResults = () => {
    return Location.state.results.map((book: any, index) => (
      <li key={index} className="mt-2">{book.title} by {book.author}</li>
    ))

    }

 
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Search Results</h1>
      {Location.state?.results?.length ?
      <ul className="list-disc pl-5">
      {renderSearchResults()}
      </ul>
      : <p>No results found.</p>
      }
    </div>
  );
};

export default SearchResults;


