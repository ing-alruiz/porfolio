import React from "react";
import styles from "./Navbar.module.css";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Service", href: "#service" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Facts", href: "#facts" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Posts", href: "#posts" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.logo}>John Doe</div>
        <div className={styles.navLinks}>
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={styles.navLink}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;