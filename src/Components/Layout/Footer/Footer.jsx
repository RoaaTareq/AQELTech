import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({
  links = [],
  socialLinks = [],
  copyrightText,
  className = '',
  ...props
}) => {
  return (
    <footer className={`footer ${className}`} {...props}>
      <div className="footer-links">
        {links.map((link, index) => (
          <a key={index} href={link.href} className="footer-link">
            {link.label}
          </a>
        ))}
      </div>
      <div className="footer-social">
        {socialLinks.map((social, index) => (
          <a key={index} href={social.href} className="footer-social-link">
            <img src={social.icon} alt={social.label} />
          </a>
        ))}
      </div>
      {copyrightText && (
        <div className="footer-copyright">
          &copy; {new Date().getFullYear()} {copyrightText}
        </div>
      )}
    </footer>
  );
};

Footer.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
  socialLinks: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      label: PropTypes.string,
    })
  ),
  copyrightText: PropTypes.string,
  className: PropTypes.string,
};

export default Footer;
