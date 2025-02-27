import React from 'react';
import '../CSS/MyBooks.css';



  
  const books = [
    {
      title: "The Pragmatic Programmer",
      author: "Andrew Hunt and David Thomas",
      publicationDate: new Date("1999-10-20"),
      isbn: "978-0201616224",
      categories: ["Software Development", "Programming Practices", "Career Development"],
      description: "A guide to software development best practices, covering tips, techniques, and philosophies for writing better code."
    },
    {
      title: "Clean Code: A Handbook of Agile Software Craftsmanship",
      author: "Robert C. Martin",
      publicationDate: new Date("2008-08-01"),
      isbn: "978-0132350884",
      categories: ["Software Development", "Programming Practices", "Agile"],
      description: "Explores the principles and practices of writing clean, maintainable, and efficient code."
    },
    {
      title: "Code Complete: A Practical Handbook of Software Construction",
      author: "Steve McConnell",
      publicationDate: new Date("1993-01-01"),
      isbn: "978-0735619678",
      categories: ["Software Development", "Programming Practices", "Software Construction"],
      description: "A detailed guide to software construction techniques, focusing on quality and maintainability."
    },
    {
      title: "Refactoring: Improving the Design of Existing Code",
      author: "Martin Fowler",
      publicationDate: new Date("1999-07-08"),
      isbn: "978-0201485677",
      categories: ["Software Development", "Refactoring", "Programming Practices"],
      description: "Covers techniques for restructuring existing code to improve its readability and maintainability."
    }];

// import { useState, useEffect } from 'react';
// import './ViewNotes.css';

// const apiEndpoint = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:3001';

// export default function myBooks() {
//   const [notes, setNotes] = useState([]);

//   useEffect(() => {
//     const getNotes = async () => {
//       try {
//         const response = await fetch(`${apiEndpoint}/api/notes`, {
//           headers: {
//             'Content-Type': 'application/json',
//             Authorization: `Bearer ${localStorage.getItem('id_token')}`
//           }
//         });
//         const data = await response.json();
//         console.log(data);
//         setNotes(data);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     getNotes();
//   }, []);

  const renderBooks = () => {
    return books.map((note: any) => {
      return (
        <div className="cards-container">
        <div key={note.isbn} className='card'>
          <h3>{note.title}</h3>
          <p>{note.author}</p>
          <p>Categories: {note.categories.join(', ')}</p>
          <p>{note.description}</p>
        </div>
        </div>
      );
    });
  }
  //   return (
  //     <div>
  //       <h1>My Books</h1>
       
  //       <div className='cards-container'>
  //         <div>
  //         {renderBooks()}
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

  export default function MyBooks() {
    return (
      <div>
        <h1>My Books</h1>
        <p>
          These are the books you currently have checked out.
        </p>
        <div>{renderBooks()}</div>
      </div>
  
    );
  }