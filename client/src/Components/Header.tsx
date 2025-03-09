import React from 'react';
import Navbar from './Navbar';
import { Page } from './PageTypes';
import "./CSS/Header.css";
import Loginbar from './loginbar';

interface HeaderProps {
  currentPage: Page;
  handlePageChange: (page: Page) => void;
  // isAuthenticated: boolean;
}
const Header: React.FC<HeaderProps> = ({currentPage, handlePageChange}) => {
    return (
        <header className="header">
            <Navbar currentPage={currentPage} handlePageChange={handlePageChange}  />
            <h1 className= "color">The Library</h1>
            <Loginbar currentPage={currentPage} handlePageChange={handlePageChange} />  
            
        </header>
    );
}


export default Header;