import React from 'react';
import Logo from './Logo';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className="flex flex-col md:flex-row justify-between items-center px-4 py-4 md:px-6 shadow-md sticky top-0 bg-black z-50">
      <Logo />
      <Navbar />
    </header>
  );
};

export default Header;