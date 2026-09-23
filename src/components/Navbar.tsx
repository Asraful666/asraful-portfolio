function Navbar() {
  return (
    <header className="navbar">
      <div className="container nav-container">
        <a href="#" className="logo">
          Asraful<span>.</span>
        </a>

        <nav className="nav-menu">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>

        <a
          href="https://github.com/Asraful666"
          target="_blank"
          rel="noopener noreferrer"
          className="github-btn"
        >
          GitHub
        </a>
      </div>
    </header>
  );
}

export default Navbar;