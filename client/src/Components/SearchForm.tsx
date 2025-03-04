import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "./ui/input";
import { Select, SelectItem } from "./ui/select";
import { Button } from "./ui/button";

const SearchForm: React.FC = () => {
  const [formData, setFormData] = useState({
    authorName: "",
    bookTitle: "",
    category: "",
  });

  const navigate = useNavigate(); // Hook for navigation

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct URL with query parameters
    const queryParams = new URLSearchParams(formData).toString();
    
    // Navigate to SearchResults.tsx with search parameters
    navigate(`/search-results?${queryParams}`);
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
    </form>
  );
};

export default SearchForm;
