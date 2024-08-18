const Navbar = ({ brand, links = [], className = '', brandLink = '/', dropdownLinks = [], ...props }) => {
  const [isDropdownOpen, setDropdownOpen] = React.useState(false);

  return (
    <nav className={`navbar ${className}`} {...props}>
      <a href={brandLink} className="navbar-brand">
        {brand}
      </a>
      <ul className="navbar-nav">
        {links.map((link, index) => (
          <li key={index} className="nav-item">
            <a href={link.href} className="nav-link">
              {link.label}
            </a>
          </li>
        ))}
        <li className="nav-item dropdown" onClick={() => setDropdownOpen(!isDropdownOpen)}>
          <a href="#" className="nav-link">
            Dropdown
          </a>
          {isDropdownOpen && (
            <ul className="dropdown-menu">
              {dropdownLinks.map((link, index) => (
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
    </nav>
  );
};


