import React from "react";

function Footer() {
  return (
    <footer style={{ padding: "1rem", background: "#222", color: "white", marginTop: "2rem" }}>
      <h2>My foot</h2>
      <nav>
        <ul style={{ listStyle: "none", padding: 0, display: "flex", gap: "1.5rem" }}>
          <li>
            <a href="#contact-us" style={{ color: "white", textDecoration: "none" }}>
              Contact Us
            </a>
          </li>
          <li>
            <a href="#careers" style={{ color: "white", textDecoration: "none" }}>
              Careers
            </a>
          </li>
          <li>
            <a href="#blog" style={{ color: "white", textDecoration: "none" }}>
              Blog
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;