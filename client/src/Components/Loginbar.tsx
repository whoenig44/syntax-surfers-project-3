import React from 'react';
import { Page } from './PageTypes';
import "./CSS/Header.css";



interface NavbarProps {
  currentPage: Page;
  handlePageChange: (page: Page) => void;
  // isAuthenticated: boolean;
}

const Loginbar: React.FC<NavbarProps> = ({ currentPage, handlePageChange}) => {
  return (
    <ul className="nav nav-tabs">
      {/* Home */}

      <li className="nav-item">
        <a
          href="/signup"
          onClick={(e) => { e.preventDefault(); handlePageChange('Signup'); }}
          className={currentPage === 'Signup' ? 'nav-link active' : 'nav-link'}
          
        >
          Signup
        </a>
      </li>

      <li className="nav-item">
        <a
          href="/login"
          onClick={(e) => { e.preventDefault(); handlePageChange('Login'); }}
          className={currentPage === 'Login' ? 'nav-link active' : 'nav-link'}
          
        >
          Login
        </a>
        </li>
      
      
    </ul>
  );
};

export default Loginbar;

