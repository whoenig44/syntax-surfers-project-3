// import React from "react";
// import { NavLink } from "react-router-dom";


// const Navbar: React.FC = () => {
//     return (
//       <nav className="flex justify-end bg-gray-800 p-4 shadow-md">
//         <ul className="flex space-x-6">
//           <li>
//             <NavLink
//               to="/"
//               className={({ isActive }) =>
//                 `text-white px-4 py-2 rounded ${isActive ? "bg-blue-600" : "hover:bg-gray-700"}`
//               }
//             >
//               Home
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/books"
//               className={({ isActive }) =>
//                 `text-white px-4 py-2 rounded ${isActive ? "bg-blue-600" : "hover:bg-gray-700"}`
//               }
//             >
//               My Books
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/about"
//               className={({ isActive }) =>
//                 `text-white px-4 py-2 rounded ${isActive ? "bg-blue-600" : "hover:bg-gray-700"}`
//               }
//             >
//               About
//             </NavLink>
//           </li>
//         </ul>
//       </nav>
//     );
//   };
 
//   export default Navbar;


import React from 'react';
import { Link } from 'react-router-dom';
import { Page } from './PageTypes';


interface NavbarProps {
  currentPage: Page;
  handlePageChange: (page: Page) => void;
  isAuthenticated: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, handlePageChange}) => {
  return (
    <ul className="nav nav-tabs">
      {/* Home */}
      <li className="nav-item">
        <a
          href="/"
          onClick={(e) => { e.preventDefault(); handlePageChange('Home'); }}
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
          style={{ color: 'black', border: '1px solid black' }}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="/books"
          onClick={(e) => { e.preventDefault(); handlePageChange('About'); }}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          style={{ color: 'black', border: '1px solid black' }}
        >
          MyBooks
        </a>
      </li>
      
      <li className="nav-item">
        <a
          href="/about"
          onClick={(e) => { e.preventDefault(); handlePageChange('About'); }}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          style={{ color: 'black', border: '1px solid black' }}
        >
          About
        </a>
      </li>
    </ul>
  );
};

export default Navbar;

