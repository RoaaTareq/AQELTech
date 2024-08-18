import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({
  brand,
  links = [],
  className = '',
  brandLink = '/',
  dropdownLinks = [],
  supportLinks = [],
  careerLinks = [],
  logo,
  email,
  phone,
  ...props
}) => {
  const [isSupportDropdownOpen, setSupportDropdownOpen] = React.useState(false);
  const [isCareerDropdownOpen, setCareerDropdownOpen] = React.useState(false);

  return (
    <nav className={`navbar ${className}`} {...props}>
     <div className="container">
    <div className="d-flex">
    <a href={brandLink} className="navbar-brand">
        {logo && <img src={logo} alt="Brand Logo" className="navbar-logo" />}
        {brand}
      </a>
      <ul className="navbar-nav d-flex flex-row">
        {links.map((link, index) => (
          <li key={index} className="nav-item">
            <a href={link.href} className="nav-link">
              {link.label}
            </a>
          </li>
        ))}

        <li
          className="nav-item dropdown"
          onClick={() => setSupportDropdownOpen(!isSupportDropdownOpen)}
        >
          <a href="#" className="nav-link">
            Support
          </a>
          {isSupportDropdownOpen && (
            <ul className="dropdown-menu">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="dropdown-item">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </li>

        <li
          className="nav-item dropdown"
          onClick={() => setCareerDropdownOpen(!isCareerDropdownOpen)}
        >
          <a href="#" className="nav-link">
            Career
          </a>
          {isCareerDropdownOpen && (
            <ul className="dropdown-menu ">
              {careerLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="dropdown-item">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </li>
      </ul>

      <div className="navbar-contact">
        {email && (
          <a href={`mailto:${email}`} className="nav-contact-item">
            <i className="icon-email" /> {/* Replace with an email icon */}
            {email}
          </a>
        )}
        {phone && (
          <a href={`tel:${phone}`} className="nav-contact-item">
            <i className="icon-phone" /> {/* Replace with a phone icon */}
            {phone}
          </a>
        )}
      </div>
    </div>
     </div>
    </nav>
  );
};

Navbar.propTypes = {
  brand: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
  className: PropTypes.string,
  brandLink: PropTypes.string,
  dropdownLinks: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
  supportLinks: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
  careerLinks: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
  logo: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
};

export default Navbar;
