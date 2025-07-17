import React from "react";
import styles from "./Hero.module.css";
import personalInfo from "../data/personal-info.json";
import GLOBALS from "../data/globals.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
import yoImage from "../assets/images/yo.png";

const socialLinks = GLOBALS.socialLinks;

function useTypewriter(strings, speed = 80, pause = 1200) {
  const [index, setIndex] = React.useState(0);
  const [subIndex, setSubIndex] = React.useState(0);
  const [deleting, setDeleting] = React.useState(false);

  React.useEffect(() => {
    if (!strings || strings.length === 0) return;
    
    if (subIndex === strings[index].length + 1 && !deleting) {
      const timeout = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(timeout);
    }
    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % strings.length);
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) => (deleting ? prev - 1 : prev + 1));
    }, deleting ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, strings, speed, pause]);

  return strings && strings[index] ? strings[index].substring(0, subIndex) : '';
}

export default function Hero() {
  const { t, i18n } = useTranslation();
  const roles = GLOBALS.roles[i18n.language] || GLOBALS.roles.en;
  const typedRole = useTypewriter(roles);
  
  // Debug log to check if roles are loaded
  React.useEffect(() => {
    console.log('Current language:', i18n.language);
    console.log('Available roles:', GLOBALS.roles);
    console.log('Selected roles:', roles);
  }, [i18n.language, roles]);
  
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });
  
  React.useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const moveX = (e.clientX - centerX) * 0.02;
      const moveY = (e.clientY - centerY) * 0.02;
      
      setMousePos({ x: moveX, y: moveY });
    };
    
    const heroSection = document.getElementById('home');
    if (heroSection) {
      heroSection.addEventListener('mousemove', handleMouseMove);
      return () => heroSection.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <section id="home" className={styles.heroSection}>
      {/* Decorative shapes */}
      <svg 
        className={styles.shapeTopLeft} 
        width="40" 
        height="40"
        style={{
          transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <line
          x1="10"
          y1="10"
          x2="30"
          y2="10"
          stroke="var(--color-accent)"
          strokeWidth="3"
        />
        <line
          x1="10"
          y1="10"
          x2="10"
          y2="30"
          stroke="var(--color-accent)"
          strokeWidth="3"
        />
      </svg>
      <svg 
        className={styles.shapeBottomLeft} 
        width="40" 
        height="40"
        style={{
          transform: `translate(${-mousePos.x}px, ${mousePos.y}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <line
          x1="30"
          y1="30"
          x2="10"
          y2="30"
          stroke="var(--color-accent)"
          strokeWidth="3"
        />
        <line
          x1="10"
          y1="10"
          x2="10"
          y2="30"
          stroke="var(--color-accent)"
          strokeWidth="3"
        />
      </svg>
      <svg 
        className={styles.shapeTopRight} 
        width="40" 
        height="40"
        style={{
          transform: `translate(${-mousePos.x}px, ${-mousePos.y}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <text
          x="10"
          y="30"
          fontSize="24"
          fill="var(--color-accent)"
        >
          ✦
        </text>
      </svg>
      <svg 
        className={styles.shapeBottomRight} 
        width="40" 
        height="40"
        style={{
          transform: `translate(${mousePos.x}px, ${-mousePos.y}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <text
          x="10"
          y="30"
          fontSize="24"
          fill="var(--color-accent)"
        >
          ✦
        </text>
      </svg>
      {/* Main content */}
      <div className={styles.heroContent}>
        <div className={styles.left}>
          <div className={styles.hello}>{t("hero.hello")}</div>
          <div className={styles.name}>
            {personalInfo.name}
            <br />
            {personalInfo.lastName}
          </div>
          <div className={styles.roleLine}>
            <span className={styles.rolePrefix}>{t("hero.passionate")}</span>
            <span className={styles.role}>
              <span style={{ whiteSpace: "pre" }}>{typedRole}</span>
              <span className={styles.cursor}>|</span>
            </span>
          </div>
          <a href="/cv.pdf" className={styles.sayHelloBtn}>
            {t("hero.downloadCV")}
          </a>
        </div>
        <div className={styles.right}>
          <div className={styles.avatarWrapper}>
            <img
              src={yoImage}
              alt={personalInfo.name}
              className={styles.avatar}
            />
            <div className={styles.circleBg}></div>
          </div>
          <div className={styles.socials}>
            {socialLinks.map((item, idx) => (
              <a
                key={idx}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
              >
                <FontAwesomeIcon icon={item.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}