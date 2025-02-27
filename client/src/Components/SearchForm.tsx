import React, { useState } from "react";
import { Input } from "./ui/input";
import { Select, SelectItem } from "./ui/select";
import { Button } from "./ui/button";
import { useQuery } from '@apollo/client';
import { GET_BOOKS_BY_SEARCH } from '../graphql/Queries'; // Import the query



const SearchForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    bookTitle: "",
    category: ""
  });

  const { loading, error, data } = useQuery(GET_BOOKS_BY_SEARCH, {
    variables: { 
      title: formData.bookTitle,
      authorFirstName: formData.firstName,
      authorLastName: formData.lastName,
      category: formData.category
    },
    skip: !formData.bookTitle && !formData.firstName && !formData.lastName && !formData.category     //Skip if no search 
  });


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Search parameters:", formData);
    // We trigger the query with form data automatically with the useQuery hook
  };


  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 border rounded-lg shadow-md w-96 bg-white">
      <Input
        type="text"
        name="firstName"
        placeholder="Author's First Name"
        value={formData.firstName}
        onChange={handleChange}
        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <Input
        type="text"
        name="lastName"
        placeholder="Author's Last Name"
        value={formData.lastName}
        onChange={handleChange}
        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <Input
        type="text"
        name="bookTitle"
        placeholder="Book Title"
        value={formData.bookTitle}
        onChange={handleChange}
        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <Select
        name="category"
        value={formData.category}
        onChange={handleChange}
        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <SelectItem value="">Select Category</SelectItem>
        <SelectItem value="Cat1">Cybersecurity</SelectItem>
        <SelectItem value="Cat2">DevpOs</SelectItem>
        <SelectItem value="Cat3">Cloud Computing</SelectItem>
        <SelectItem value="Cat4">Machine Learning/AI</SelectItem>
        <SelectItem value="Cat5">Software Development</SelectItem>
        <SelectItem value="Cat6">Networking</SelectItem>
        <SelectItem value="Cat7">Data Science</SelectItem>
      </Select>
      <Button
        type="submit"
        className="bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600 transition-all"
      >
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
