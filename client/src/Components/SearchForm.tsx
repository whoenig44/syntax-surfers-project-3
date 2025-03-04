import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "./ui/input";
import { Select, SelectItem } from "./ui/select";
import { Button } from "./ui/button";
import { useQuery } from '@apollo/client';
import { GET_BOOKS_BY_SEARCH } from '../graphql/Queries'; // Import the query


const SearchForm: React.FC = () => {
  const [formData, setFormData] = useState({
    authorName: "",
    bookTitle: "",
    category: "",
  });

<<<<<<< HEAD
  const { loading, error, data } = useQuery(GET_BOOKS_BY_SEARCH, {
    variables: { 
      title: formData.bookTitle,
      authorFirstName: formData.firstName,
      authorLastName: formData.lastName,
      category: formData.category
    },
    skip: !formData.bookTitle && !formData.firstName && !formData.lastName && !formData.category     //Skip if no search 
  });

=======
  const navigate = useNavigate(); // Hook for navigation
>>>>>>> db8b55816404d40a77eedbfd30e4a41df7e550d3

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
<<<<<<< HEAD
    console.log("Search parameters:", formData);
    // We trigger the query with form data automatically with the useQuery hook
=======
    
    // Construct URL with query parameters
    const queryParams = new URLSearchParams(formData).toString();
    
    // Navigate to SearchResults.tsx with search parameters
    navigate(`/search-results?${queryParams}`);
>>>>>>> db8b55816404d40a77eedbfd30e4a41df7e550d3
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 border rounded-lg shadow-md w-96 bg-white">
      <Input
        type="text"
        name="authorName"
        placeholder="Author's Name"
        value={formData.authorName}
        onChange={handleChange}
      />
      <Input
        type="text"
        name="bookTitle"
        placeholder="Book Title"
        value={formData.bookTitle}
        onChange={handleChange}
      />
      <Select name="category" value={formData.category} onChange={handleChange}>
        <SelectItem value="">Select Category</SelectItem>
        <SelectItem value="Cybersecurity">Cybersecurity</SelectItem>
        <SelectItem value="DevOps">DevOps</SelectItem>
        <SelectItem value="Cloud Computing">Cloud Computing</SelectItem>
        <SelectItem value="AI">Machine Learning/AI</SelectItem>
        <SelectItem value="Software Development">Software Development</SelectItem>
        <SelectItem value="Networking">Networking</SelectItem>
        <SelectItem value="Data Science">Data Science</SelectItem>
      </Select>
      <Button type="submit" className="bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600 transition-all">
        Search
      </Button>
    {/* Display books after search */}
      {loading && <p>Loading...</p>}
      {error && <p>Error occurred: {error.message}</p>}
      {data && (
        <div>
          <h3>Search Results</h3>
          <ul>
            {data.getBooksBySearch.map((book: any) => (
              <li key={book.id}>{book.title} by {book.author}</li>
            ))}
          </ul>
        </div>
      )}
    </form>
  );
};

export default SearchForm;
