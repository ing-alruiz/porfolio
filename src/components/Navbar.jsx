import React from "react";
import styles from "./Navbar.module.css";
import globals from '../data/globals.json';
import { useTranslation } from "react-i18next";
import personalInfo from '../data/personal-info.json';

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
  { label: "Download CV", href: "/cv.pdf", download: true },
];

function Navbar() {
  const [active, setActive] = React.useState(window.location.hash || "#home");

  React.useEffect(() => {
    const onHashChange = () => setActive(window.location.hash || "#home");
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.logo}>
          <img src={globals.logoLocation} alt={personalInfo.name + " " + personalInfo.lastName} />
          <div className={styles.logoText}>
            <span className={styles.logoName}>{personalInfo.name}</span>
            <span className={styles.logoSurname}>{personalInfo.lastName}</span>
          </div>
        </div>
        <div className={styles.navLinks}>
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={
                styles.navLink +
                (active === item.href ? " " + styles.active : "") +
                (item.label === "Download CV" ? " " + styles.downloadCv : "")
              }
              {...(item.download ? { download: true, target: "_blank", rel: "noopener noreferrer" } : {})}
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