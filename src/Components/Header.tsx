import React from 'react';
import Navbar from './NavBar';
import { Page } from './PageTypes';

interface HeaderProps {
  currentPage: Page;
  handlePageChange: (page: Page) => void;
  // isAuthenticated: boolean;
}
const Header: React.FC<HeaderProps> = ({currentPage, handlePageChange}) => {
    return (
        <header >
            <h1 >The Library</h1>
            <Navbar currentPage={currentPage} handlePageChange={handlePageChange}  />
        </header>
    );
}


export default Header;