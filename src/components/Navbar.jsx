import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar bg-glass">
      <div className="container navbar-container">
        <div className="navbar-logo">
          <img src="/logo.svg" alt="Ecommarketing LLC Logo" className="navbar-logo-img" />
        </div>
        <ul className="navbar-menu">
          <li><a href="#features" className="navbar-link">Features</a></li>
          <li><a href="#about" className="navbar-link">About</a></li>
          <li><a href="#contact" className="btn btn-primary btn-sm">Contact Us</a></li>
        </ul>
      </div>
    </nav>
  );
}
