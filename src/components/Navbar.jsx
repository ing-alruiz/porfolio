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
  const [homeSubmenuOpen, setHomeSubmenuOpen] = React.useState(false);
  const scrollToSection = useScrollTo();


  const navItems = [
    { label: t("nav.home"), href: "", hasSubmenu: [
      { label: t("nav.companies"), href: "#companies" },
      { label: t("nav.about"), href: "#about" },
      { label: t("nav.experience"), href: "#experience" },
      { label: t("nav.portfolio"), href: "#portfolio" },
    ] },
    { label: t("nav.skills"), href: "#skills" },
    { label: t("nav.contact"), href: "#contact" },
    { label: t("nav.tips"), href: "#tips" },
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
      const navbar = document.querySelector(`.${styles.navbar}`);
      const navbarHeight = navbar ? navbar.offsetHeight : 80; // fallback to 80px if navbar not found
      const scrollPosition = window.scrollY + navbarHeight + 50; // Add extra 50px buffer

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

    if (item.hasSubmenu) {
      setHomeSubmenuOpen(!homeSubmenuOpen);
      return;
    }
    
    // Handle section navigation
    scrollToSection(item.href);
    setActive(item.href);
    setHomeSubmenuOpen(false);
  };

  const handleSubmenuClick = (e, item) => {
    e.preventDefault();
    scrollToSection(item.href);
    setActive(item.href);
    setHomeSubmenuOpen(false);
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
            <div key={item.label} className={styles.navItemWrapper}>
              <a
                href={item.href}
                className={
                  styles.navLink +
                  (active === item.href ? " " + styles.active : "") +
                  (item.label === t("nav.downloadCV") ? " " + styles.downloadCv : "") +
                  (item.hasSubmenu ? " " + styles.hasSubmenu : "")
                }
                onClick={(e) => handleNavClick(e, item)}
              >
                {item.label}
                {item.hasSubmenu && <span className={styles.submenuArrow}>▼</span>}
              </a>
              {item.hasSubmenu && homeSubmenuOpen && (
                <div className={styles.submenu}>
                  {item.hasSubmenu.map((subItem) => (
                    <a
                      key={subItem.label}
                      href={subItem.href}
                      className={`${styles.submenuItem} ${
                        active === subItem.href ? styles.active : ""
                      }`}
                      onClick={(e) => handleSubmenuClick(e, subItem)}
                    >
                      {subItem.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
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