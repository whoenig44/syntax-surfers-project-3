import React from 'react';
import { Link } from 'react-router-dom';
import { Page } from './PageTypes';


interface NavbarProps {
  currentPage: Page;
  handlePageChange: (page: Page) => void;
  // isAuthenticated: boolean;
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
          onClick={(e) => { e.preventDefault(); handlePageChange('books'); }}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          style={{ color: 'black', border: '1px solid black' }}
        >
          My Books
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

