import "./Navbar.css"

function Navbar() {
  return (
    <nav className="navbar">
      {/* Navbar logo */}
      <div className="logo">
        <a href="#">MyLogo</a>
      </div>

      {/* Navbar links */}
      <ul className="nav-links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
