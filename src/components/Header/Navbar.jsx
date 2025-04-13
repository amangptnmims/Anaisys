import React, { useState } from 'react';
import { FiMenu, FiX, FiHome } from 'react-icons/fi';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [hoverTimeout, setHoverTimeout] = useState(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  
  const handleDropdownToggle = (item) => {
    setOpenDropdown(openDropdown === item ? null : item);
  };

  const handleMouseEnter = (item) => {
    if (hoverTimeout) clearTimeout(hoverTimeout);
    setOpenDropdown(item);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setOpenDropdown(null);
    }, 300);
    setHoverTimeout(timeout);
  };

  const navItems = [
    {
      name: 'Products',
      path: '/products',
      dropdown: [
        { name: 'AnAI-Xray Lung', path: '/products/xray-lung' },
        { name: 'AnAI-CT Lung', path: '/products/ct-lung' },
        { name: 'AnAI-MRI Brain', path: '/products/mri-brain' }
      ]
    },
    { name: 'Impact', path: '/impact' },
    { name: 'Evidence', path: '/evidence' },
    { name: 'Insights', path: '/insights' },
    { name: 'Contact Us', path: '/contact' }
  ];

  return (
    <div className="flex items-center justify-between w-full p-4 relative">
      {/* Logo and Home Icon - Left side */}
      <div className="flex items-center">
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            `hover:text-blue-600 hover:bg-white transition-all flex items-center gap-1 px-3 py-1 rounded-lg ${isActive ? 'bg-white text-blue-600' : ''}`
          }
          onClick={() => setIsOpen(false)}
        >
          <FiHome size={18} />
          {/* Add your logo here if you have one */}
          {/* <img src="/logo.png" alt="Logo" className="h-8 ml-2" /> */}
        </NavLink>
      </div>

      {/* Mobile Menu Button - Right side */}
      <div className="md:hidden">
        <button 
          className="text-white p-2"
          onClick={toggleMenu}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Desktop Menu - Center aligned */}
      <nav className="hidden md:block">
        <ul className="flex items-center space-x-4 md:space-x-10 text-sm font-medium text-white">
          {navItems.map((item) => (
            <li 
              key={item.name} 
              className="relative group"
              onMouseEnter={() => item.dropdown && handleMouseEnter(item.name)}
              onMouseLeave={() => item.dropdown && handleMouseLeave()}
            >
              {item.dropdown ? (
                <>
                  <button 
                    onClick={() => handleDropdownToggle(item.name)}
                    className="hover:text-blue-600 hover:bg-white transition-all flex items-center gap-1 px-3 py-1 rounded-lg"
                  >
                    {item.name}
                    <span className={`inline-block transform ${openDropdown === item.name ? 'rotate-180' : ''} transition-transform ml-1`}>▼</span>
                  </button>
                  
                  <ul 
                    className={`${openDropdown === item.name ? 'block' : 'hidden'} absolute left-0 mt-2 w-40 bg-white text-black rounded-md shadow-lg z-50`}
                    onMouseEnter={() => handleMouseEnter(item.name)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {item.dropdown.map((subItem) => (
                      <li key={subItem.path}>
                        <NavLink 
                          to={subItem.path}
                          className={({ isActive }) => 
                            `block px-4 py-2 rounded ${isActive ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100 hover:text-blue-600'}`
                          }
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <NavLink 
                  to={item.path}
                  className={({ isActive }) => 
                    `hover:text-blue-600 hover:bg-white transition-all flex items-center gap-1 px-3 py-1 rounded-lg ${isActive ? 'bg-white text-blue-600' : ''}`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu - Full width dropdown */}
      <nav className={`${isOpen ? 'block' : 'hidden'} md:hidden absolute top-16 left-0 right-0 bg-black p-4 z-50`}>
        <ul className="flex flex-col space-y-4 text-sm font-medium text-white">
          {navItems.map((item) => (
            <li 
              key={item.name} 
              className="relative"
              onClick={() => item.dropdown && handleDropdownToggle(item.name)}
            >
              {item.dropdown ? (
                <>
                  <button className="hover:text-blue-600 hover:bg-white transition-all flex items-center justify-between w-full px-3 py-1 rounded-lg">
                    {item.name}
                    <span className={`inline-block transform ${openDropdown === item.name ? 'rotate-180' : ''} transition-transform ml-1`}>▼</span>
                  </button>
                  
                  <ul 
                    className={`${openDropdown === item.name ? 'block' : 'hidden'} pl-4 mt-2 space-y-2`}
                  >
                    {item.dropdown.map((subItem) => (
                      <li key={subItem.path}>
                        <NavLink 
                          to={subItem.path}
                          className={({ isActive }) => 
                            `block px-4 py-2 rounded ${isActive ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100 hover:text-blue-600'}`
                          }
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <NavLink 
                  to={item.path}
                  className={({ isActive }) => 
                    `hover:text-blue-600 hover:bg-white transition-all flex items-center gap-1 px-3 py-1 rounded-lg ${isActive ? 'bg-white text-blue-600' : ''}`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;