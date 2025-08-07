import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useScrollTo } from "../hooks/useScrollTo";
import ContactBar from "./ContactBar";
import Logo from "./Logo";

function Navbar() {
  const { t, i18n } = useTranslation();
  const [active, setActive] = React.useState("#hero");
  const [languageDropdownOpen, setLanguageDropdownOpen] = React.useState(false);
  const [isSticky, setIsSticky] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [contactBarHidden, setContactBarHidden] = React.useState(false);
  const scrollToSection = useScrollTo();
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: t("nav.home"), href: "#hero", hasSubmenu: [
      { label: t("nav.hero"), href: "#hero" },
      { label: t("nav.aptitudes"), href: "#aptitudes" },
      { label: t("nav.companies"), href: "#companies" },
      { label: t("nav.about"), href: "#about" },
      { label: t("nav.experience"), href: "#experience" },
      { label: t("nav.portfolio"), href: "#portfolio" },
    ] },
    { label: t("nav.skills"), href: "/skills" },
    { label: t("nav.contact"), href: "/contact" },
    { label: t("nav.tips"), href: "/tips" },
    { label: t("nav.downloadCV"), href: "/cv.pdf", download: true },
  ];

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' }
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  // Track scroll for sticky navbar and contact bar visibility
  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsSticky(scrollPosition > 100);
      setContactBarHidden(scrollPosition > 50); // Match ContactBar logic
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track active section on scroll
  React.useEffect(() => {
    const handleScroll = () => {
      // Only track sections when on home page
      if (location.pathname !== "/") {
        setActive(""); // Clear active state when not on home page
        return;
      }
      
      // Generate sections dynamically from navItems submenu
      const homeItem = navItems.find(item => item.hasSubmenu);
      const sections = homeItem?.hasSubmenu.map(subItem => subItem.href.replace('#', '')) || [];
      
      const navbar = document.querySelector(`.${styles.navbar}`);
      const navbarHeight = navbar ? navbar.offsetHeight : 80;
      const scrollPosition = window.scrollY + navbarHeight + 20; // Reduced buffer for more accurate tracking

      let foundActive = false;
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          const newActive = `#${sections[i]}`;
          if (newActive !== active) {
            setActive(newActive);
          }
          foundActive = true;
          break;
        }
      }
      
      // If no section is found, default to hero
      if (!foundActive) {
        setActive("#hero");
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname, active, navItems]);

  // Reset active state when leaving home page
  React.useEffect(() => {
    if (location.pathname !== "/") {
      setActive("");
    } else {
      setActive("#hero"); // Default to hero when on home page
    }
  }, [location.pathname]);

  // Helper function to check if main nav item should be active
  const isMainNavActive = (item) => {
    // For download CV, never show as active
    if (item.download) return false;
    
    // For home submenu, only show active if we're on home page
    if (item.hasSubmenu) {
      return location.pathname === "/";
    }
    
    // For page routes, only show active if we're actually on that specific page
    if (item.href.startsWith("/") && !item.download) {
      return location.pathname === item.href;
    }
    
    // For any other cases, don't show as active
    return false;
  };

  const handleNavClick = (e, item) => {
    e.preventDefault();
    setMobileMenuOpen(false); // Close mobile menu on navigation
    
    if (item.download) {
      // Handle download link
      window.open(item.href, '_blank');
      return;
    }

    if (item.hasSubmenu) {
      // Navigate to home page if not already there
      if (location.pathname !== "/") {
        navigate("/");
      }
      return;
    }
    
    // Handle page navigation vs section scrolling
    if (item.href.startsWith("/")) {
      navigate(item.href);
    } else {
      // Section navigation - ensure we're on home page first
      if (location.pathname !== "/") {
        navigate("/");
        // Wait for navigation then scroll
        setTimeout(() => {
          if (item.href === "#hero") {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          } else {
            scrollToSection(item.href);
          }
          setActive(item.href);
        }, 150);
      } else {
        if (item.href === "#hero") {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          scrollToSection(item.href);
        }
        setActive(item.href);
      }
    }
  };

  const handleSubmenuClick = (e, item) => {
    e.preventDefault();
    setMobileMenuOpen(false); // Close mobile menu on navigation
    
    // Submenu items are always sections, ensure we're on home page
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        if (item.href === "#hero") {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          scrollToSection(item.href);
        }
        setActive(item.href);
      }, 150);
    } else {
      if (item.href === "#hero") {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        scrollToSection(item.href);
      }
      setActive(item.href);
    }
    // setHomeSubmenuOpen(false);
  };

  const changeLanguage = (langCode) => {
    i18n.changeLanguage(langCode);
    setLanguageDropdownOpen(false);
  };

  return (
    <nav className={`${styles.navbar} ${isSticky ? styles.sticky : ''} ${contactBarHidden ? styles.contactBarHidden : ''}`}>
      <div className={styles.navbarContainer}>
        <Logo />

        {/* Mobile burger button */}
        <button 
          className={styles.mobileMenuButton}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className={`${styles.burgerLine} ${mobileMenuOpen ? styles.open : ''}`}></span>
          <span className={`${styles.burgerLine} ${mobileMenuOpen ? styles.open : ''}`}></span>
          <span className={`${styles.burgerLine} ${mobileMenuOpen ? styles.open : ''}`}></span>
        </button>

        <div className={`${styles.navContent} ${mobileMenuOpen ? styles.mobileOpen : ''}`}>
          <div className={styles.navLinks}>
            {navItems.map((item) => (
              <div key={item.label} className={styles.navItemWrapper}>
                <a
                  href={item.href}
                  className={
                    styles.navLink +
                    (isMainNavActive(item) ? " " + styles.active : "") +
                    (item.label === t("nav.downloadCV") ? " " + styles.downloadCv : "") +
                    (item.hasSubmenu ? " " + styles.hasSubmenu : "")
                  }
                  onClick={(e) => handleNavClick(e, item)}
                >
                  {item.label}
                </a>
              </div>
            ))}
          </div>

          {/* Submenu directly under main nav items */}
          {location.pathname === "/" && (
            <div className={styles.submenuRow}>
              {navItems.find(item => item.hasSubmenu)?.hasSubmenu.map((subItem) => (
                <a
                  key={subItem.label}
                  href={subItem.href}
                  className={`${styles.navLink} ${
                    active === subItem.href ? styles.active : ""
                  }`}
                  onClick={(e) => handleSubmenuClick(e, subItem)}
                >
                  {subItem.label}
                </a>
              ))}
            </div>
          )}

          {/* Mobile language selector - moved to end */}
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

        {/* Desktop language selector */}
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
    </nav>
  );
}

export default Navbar;