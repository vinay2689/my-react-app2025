import React from "react";

// React functional component for a website header. It should have a title 'My React Journey' and a navigation menu with links: Home, About, Contact.
function Header() {
  return (
    <header style={{ padding: "1rem", background: "#282c34", color: "white" }}>
      <h1>My React Journey</h1>
      <nav>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li style={{ display: "inline", marginRight: "1rem" }}>
            <a href="#home" style={{ color: "white", textDecoration: "none" }}>
              Home
            </a>
          </li>
          <li style={{ display: "inline", marginRight: "1rem" }}>
            <a href="#about" style={{ color: "white", textDecoration: "none" }}>
              About
            </a>
          </li>
          <li style={{ display: "inline" }}>
            <a href="#contact" style={{ color: "white", textDecoration: "none" }}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;