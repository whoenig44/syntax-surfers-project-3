import React, { useState } from "react";
import { Input } from "./ui/input";
import { Select, SelectItem } from "./ui/select";
import { Button } from "./ui/button";


const SearchForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    bookTitle: "",
    category: ""
  });


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Search parameters:", formData);
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
        <SelectItem value="Cat1">Cat1</SelectItem>
        <SelectItem value="Cat2">Cat2</SelectItem>
        <SelectItem value="Cat3">Cat3</SelectItem>
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
