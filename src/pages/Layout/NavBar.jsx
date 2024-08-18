import React from 'react';
import NavBar from '../../Components/Layout/NavBar/NavBar'
import Logo from '../../assest/Symbol.png'
import  './navbar.css'
const Navbar = () => {
  const navLinks = [
    { href: '/home', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
  ];

  const supportLinks = [
    { href: '/support/faq', label: 'FAQ' },
    { href: '/support/contact', label: 'Contact Support' },
  ];

  const careerLinks = [
    { href: '/career/jobs', label: 'Jobs' },
    { href: '/career/internships', label: 'Internships' },
  ];

  return (
    <div>
      <NavBar
        brand="AQELTech"
        links={navLinks}
        supportLinks={supportLinks}
        careerLinks={careerLinks}
        logo={Logo} 
        className="navbar-custom"
      />
      {/* Your main content here */}
    </div>
  );
};

export default Navbar;
