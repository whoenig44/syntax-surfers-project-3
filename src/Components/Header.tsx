import React from 'react';
import NavBar from './Navbar';

const Header: React.FC = () => {
    return (
        <header className="bg-gray-800 p-4 shadow-md">
            <h1 className="text-2xl text-white">My Library</h1>
            <Navbar />
        </header>
    );
}

export default Header;
