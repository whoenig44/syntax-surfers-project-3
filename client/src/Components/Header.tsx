import React from 'react';
import Navbar from './Navbar';
import { Page } from './PageTypes';
import "./CSS/Header.css";

interface HeaderProps {
  currentPage: Page;
  handlePageChange: (page: Page) => void;
  // isAuthenticated: boolean;
}
const Header: React.FC<HeaderProps> = ({currentPage, handlePageChange}) => {
    return (
        <header className="header">
            <h1 >The Library</h1>
            <Navbar currentPage={currentPage} handlePageChange={handlePageChange}  />
        </header>
    );
}


export default Header;