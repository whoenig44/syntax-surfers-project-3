import React, { useState } from "react";
import { Input } from "./ui/input";
import { Select, SelectItem } from "./ui/select";
import { Button } from "./ui/button";
const apiEndPoint = process.env.NODE_ENV === "development" ? "http://localhost:3001": ""


const SearchForm: React.FC = () => {
  const [formData, setFormData] = useState({
    
    authorName: "",
    bookTitle: "",
    category: ""
  });


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Search parameters:", formData);
    try {
      const res = await fetch(`${apiEndPoint}/api/books/search`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log("Search results:", data);
    } catch (error) {
      console.error("Error searching for books:", error);
    }
  };


  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 border rounded-lg shadow-md w-96 bg-white">
      <Input
        type="text"
        name="authorName"
        placeholder="Author's Name"
        value={formData.authorName}
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
    </form>
  );
};


export default SearchForm;
