import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "./ui/input";
import { Select, SelectItem } from "./ui/select";
import { Button } from "./ui/button";
import { gql, useLazyQuery } from "@apollo/client";
import "./CSS/SearchResults.css";

const GET_RESULTS = gql`
  query getBooksBySearch($author: String, $title: String, $category: String) {
    getBooksBySearch(author: $author, title: $title, category: $category) {
      id
      title
      author
      categories
    }
  }
`;

const SearchForm: React.FC = () => {
  const [formData, setFormData] = useState({
    authorName: "",
    bookTitle: "",
    category: "",
  });

  const navigate = useNavigate();
  const [fetchBooks, { loading, error, data }] = useLazyQuery(GET_RESULTS);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    fetchBooks({
      variables: {
        author: formData.authorName || null,
        title: formData.bookTitle || null,
        category: formData.category || null,
      },
      onCompleted: (data) => {
        navigate("/search-results", { state: { results: data.getBooksBySearch } });
      },
    });
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
      <Button type="submit" className="search-button">
        {loading ? "Searching..." : "Search"}
      </Button>
      {error && <p className="text-red-500">Error fetching books.</p>}
    </form>
  );
};

export default SearchForm;


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Input } from "./ui/input";
// import { Select, SelectItem } from "./ui/select";
// import { Button } from "./ui/button";
// import { useQuery, gql } from "@apollo/client";

// const SearchForm: React.FC = () => {
//   const [formData, setFormData] = useState({
//     authorName: "",
//     bookTitle: "",
//     category: "",
//   });

//   const navigate = useNavigate(); // Hook for navigation

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
    
//     // Construct URL with query parameters
//     // const queryParams = new URLSearchParams(formData).toString();
    
//     // Navigate to SearchResults.tsx with search parameters
//     // navigate(`/search-results?${queryParams}`);

//     const GET_RESULTS = gql`
//   query getBooksBySearch($author: String, $title: String, $category: String) {
//     getBooksBySearch(author: $author, title: $title, category: $category) {
//       id
//       title
//   }
//       }
    
// `;
// const { loading, error, data } = useQuery(GET_RESULTS);
// console.log(data)
//   };

//   return (
//     <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 border rounded-lg shadow-md w-96 bg-white">
//       <Input
//         type="text"
//         name="authorName"
//         placeholder="Author's Name"
//         value={formData.authorName}
//         onChange={handleChange}
//       />
//       <Input
//         type="text"
//         name="bookTitle"
//         placeholder="Book Title"
//         value={formData.bookTitle}
//         onChange={handleChange}
//       />
//       <Select name="category" value={formData.category} onChange={handleChange}>
//         <SelectItem value="">Select Category</SelectItem>
//         <SelectItem value="Cybersecurity">Cybersecurity</SelectItem>
//         <SelectItem value="DevOps">DevOps</SelectItem>
//         <SelectItem value="Cloud Computing">Cloud Computing</SelectItem>
//         <SelectItem value="AI">Machine Learning/AI</SelectItem>
//         <SelectItem value="Software Development">Software Development</SelectItem>
//         <SelectItem value="Networking">Networking</SelectItem>
//         <SelectItem value="Data Science">Data Science</SelectItem>
//       </Select>
//       <Button type="submit" className="bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600 transition-all">
//         Search
//       </Button>
//     </form>
//   );
// };

// export default SearchForm;
