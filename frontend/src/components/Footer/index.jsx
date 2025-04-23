import React from 'react';

const Footer = () => {
  return (
    <footer className="text-center py-6 text-sm text-gray-500 border-t">
      &copy; {new Date().getFullYear()} Anaisys. All rights reserved.
    </footer>
  );
};

export default Footer;