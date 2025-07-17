import React from "react";
import styles from "./Navbar.module.css";
import globals from '../data/globals.json';
import { useTranslation } from "react-i18next";
import personalInfo from '../data/personal-info.json';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useScrollTo } from "../hooks/useScrollTo";

function Navbar() {
  const { t, i18n } = useTranslation();
  const [active, setActive] = React.useState("#home");
  const [languageDropdownOpen, setLanguageDropdownOpen] = React.useState(false);
  const scrollToSection = useScrollTo();

  const navItems = [
    { label: t("nav.home"), href: "#home" },
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.service"), href: "#service" },
    { label: t("nav.experience"), href: "#experience" },
    { label: t("nav.skills"), href: "#skills" },
    { label: t("nav.portfolio"), href: "#portfolio" },
    { label: t("nav.facts"), href: "#facts" },
    { label: t("nav.testimonials"), href: "#testimonials" },
    { label: t("nav.posts"), href: "#posts" },
    { label: t("nav.contact"), href: "#contact" },
    { label: t("nav.downloadCV"), href: "/cv.pdf", download: true },
  ];

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' }
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  // Track active section on scroll
  React.useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'service', 'experience', 'skills', 'portfolio', 'facts', 'testimonials', 'posts', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActive(`#${sections[i]}`);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, item) => {
    e.preventDefault();
    
    if (item.download) {
      // Handle download link
      window.open(item.href, '_blank');
      return;
    }
    
    // Handle section navigation
    scrollToSection(item.href);
    setActive(item.href);
  };

  const changeLanguage = (langCode) => {
    i18n.changeLanguage(langCode);
    setLanguageDropdownOpen(false);
  };

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
                (item.label === t("nav.downloadCV") ? " " + styles.downloadCv : "")
              }
              onClick={(e) => handleNavClick(e, item)}
            >
              {item.label}
            </a>
          ))}
          <div className={styles.languageSelector}>
            <button
              className={styles.languageButton}
              onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
            >
              <FontAwesomeIcon icon={['fas', 'earth-americas']} /> {currentLanguage.code.toUpperCase()}
            </button>
            {languageDropdownOpen && (
              <div className={styles.languageDropdown}>
                {languages.map((lang) => (
                  <div
                    key={lang.code}
                    className={`${styles.languageOption} ${
                      i18n.language === lang.code ? styles.selected : ""
                    }`}
                    onClick={() => changeLanguage(lang.code)}
                  >
                    {lang.flag} {lang.name}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;