import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Resume from "../assets/resume.pdf";

import { FaBarsStaggered, FaXmark } from "react-icons/fa6"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { "id": "1", link: "About", path: '/about', },
    { "id": "2", link: "Skills", path: '/skills' },
    { "id": "3", link: "Projects", path: '/projects' },
    { "id": "4", link: "Contact", path: '/contact' },
  ];

  return (
    <header className={`w-full fixed ${isSticky ? 'sticky top-0 left-0 right-0' : ''}`}>
      <nav className={` backdrop-blur-lg shadow-md  px-8  py-4 rounded-t-xl mx-4`}>
        <div className='flex items-center justify-between'>
          <div className='font-bold text-2xl cursor-pointer'>
            <a className='font-bold uppercase text-3xl  text-gray-400 hover:text-gray-300' href='/'>
              Utkarsh
            </a>
          </div>

          {/* For large screen */}
          <div className='lg:flex hidden items-center gap-10 text-lg font-semibold text-gray-400 '>
            {navItems.map(navItems => (
              <a key={navItems.id} href={navItems.path} activeClass="active" smooth={true} spy={true} offset={-100} className={`block hover:text-gray-300 ${location.pathname === navItems.path ? 'text-gray-200 font-bold' : ''}`}>
                {navItems.link}
              </a>
            ))}
            {/* Contact btn */}
            <div className='lg:block hidden'>
              <a href={Resume} className='btnOutLine' download>
                Download CV
              </a>
            </div>
          </div>

          {/* Menu for small screen */}
          <button onClick={toggleMenu} className='text-gray-300 focus:outline-none lg:hidden'>
            {isMenuOpen ? <FaXmark /> : <FaBarsStaggered className='h-5 w-5 text-gray-200' />}
          </button>
        </div>

        {/* Nav items for small */}
        {isMenuOpen && (
          <div className={`bg-gray-800 opacity-90 space-y-4 mx-1 px-8 mt-20 py-4 ${isMenuOpen ? 'block fixed top-0 right-0 left-0 border-2 shadow-md rounded-l-xl ' : 'hidden'}`}>
            {navItems.map(({ link, path }) => (
              <Link href={link} key={path} className={`block  text-gray-400 hover:text-gray-300 py-2 ${location.pathname === path ? 'text-gray-200 font-bold' : ''}`}>
                {link}
              </Link>
            ))}

            {/* Contact btn */}
            <div className='lg:block'>
              <a href={Resume} className='btnOutLine' download>
                Download CV
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
