import React from 'react';

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
      <Navbar
        brand="Your Company"
        links={navLinks}
        supportLinks={supportLinks}
        careerLinks={careerLinks}
        logo="path/to/logo.png"
        email="info@yourcompany.com"
        phone="+123456789"
        className="navbar-custom"
      />
      {/* Your main content here */}
    </div>
  );
};

export default Navbar;
