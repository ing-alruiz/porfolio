import React from "react";
import styles from "./Footer.module.css";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";
import personalInfo from "../data/personal-info.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useScrollTo } from "../hooks/useScrollTo";
import { usePageNavigation } from "../hooks/usePageNavigation";
import Logo from "./Logo";

function Footer() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const scrollToSection = useScrollTo();
  const navigateToPage = usePageNavigation();

  const handleSectionClick = (href) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        if (href === "#hero") {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          scrollToSection(href);
        }
      }, 100);
    } else {
      if (href === "#hero") {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        scrollToSection(href);
      }
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Main Footer Content */}
        <div className={styles.footerContent}>
          {/* Brand Section */}
          <div className={styles.footerSection}>
            <div className={styles.brandSection}>
              <Logo size="large" className={styles.footerLogo} />
              <div className={styles.brandText}>
                <p className={styles.brandTagline}>{t("footer.tagline")}</p>
              </div>
            </div>
            <p className={styles.sectionDescription}>
              {t("footer.description")}
            </p>
            <div className={styles.socialLinks}>
              {personalInfo.socialMedia?.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label={social.platform}
                >
                  <FontAwesomeIcon icon={['fab', social.icon]} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.footerSection}>
            <h4 className={styles.sectionTitle}>{t("footer.quickLinks")}</h4>
            <ul className={styles.linksList}>
              <li>
                <button 
                  onClick={() => handleSectionClick("#hero")}
                  className={styles.footerLink}
                >
                  {t("nav.hero")}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleSectionClick("#about")}
                  className={styles.footerLink}
                >
                  {t("nav.about")}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleSectionClick("#experience")}
                  className={styles.footerLink}
                >
                  {t("nav.experience")}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleSectionClick("#portfolio")}
                  className={styles.footerLink}
                >
                  {t("nav.portfolio")}
                </button>
              </li>
            </ul>
          </div>

          {/* Services/Pages */}
          <div className={styles.footerSection}>
            <h4 className={styles.sectionTitle}>{t("footer.services")}</h4>
            <ul className={styles.linksList}>
              <li>
                <button 
                  onClick={() => navigateToPage("/skills")}
                  className={styles.footerLink}
                >
                  {t("nav.skills")}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateToPage("/tips")}
                  className={styles.footerLink}
                >
                  {t("nav.tips")}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateToPage("/contact")}
                  className={styles.footerLink}
                >
                  {t("nav.contact")}
                </button>
              </li>
              <li>
                <a 
                  href="/cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.footerLink}
                >
                  {t("nav.downloadCV")}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className={styles.footerSection}>
            <h4 className={styles.sectionTitle}>{t("footer.contactInfo")}</h4>
            <div className={styles.contactInfo}>
              {personalInfo.email && (
                <div className={styles.contactItem}>
                  <FontAwesomeIcon icon={['fas', 'envelope']} />
                  <a href={`mailto:${personalInfo.email}`} className={styles.contactLink}>
                    {personalInfo.email}
                  </a>
                </div>
              )}
              {personalInfo.phone && (
                <div className={styles.contactItem}>
                  <FontAwesomeIcon icon={['fas', 'phone']} />
                  <a href={`tel:${personalInfo.phone}`} className={styles.contactLink}>
                    {personalInfo.phone}
                  </a>
                </div>
              )}
              {personalInfo.location && (
                <div className={styles.contactItem}>
                  <FontAwesomeIcon icon={['fas', 'map-marker-alt']} />
                  <span className={styles.contactText}>
                    {typeof personalInfo.location === 'string' 
                      ? personalInfo.location 
                      : `${personalInfo.location.city}, ${personalInfo.location.country}`
                    }
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className={styles.footerBottom}>
          <div className={styles.footerBottomContent}>
            <span className={styles.copyright}>
              © {new Date().getFullYear()} {personalInfo.name} {personalInfo.lastName}. {t("footer.copyright")}
            </span>
            <div className={styles.footerBottomLinks}>
              <button 
                onClick={() => navigateToPage("/privacy")}
                className={styles.footerBottomLink}
              >
                {t("footer.privacy")}
              </button>
              <button 
                onClick={() => navigateToPage("/terms")}
                className={styles.footerBottomLink}
              >
                {t("footer.terms")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;