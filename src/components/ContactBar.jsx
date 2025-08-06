import React from "react";
import styles from "./ContactBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import personalInfo from "../data/personal-info.json";

function ContactBar() {
  const [isHidden, setIsHidden] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsHidden(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`${styles.contactBar} ${isHidden ? styles.hidden : ''}`}>
      <div className={styles.contactBarContainer}>
        {personalInfo.phone && (
          <a 
            href={`tel:${personalInfo.phone}`} 
            className={styles.phoneLink}
          >
            <FontAwesomeIcon icon={['fas', 'phone']} />
            <span>{personalInfo.phone}</span>
          </a>
        )}
        {personalInfo.email && (
          <a 
            href={`mailto:${personalInfo.email}`} 
            className={styles.emailLink}
          >
            <FontAwesomeIcon icon={['fas', 'envelope']} />
            <span>{personalInfo.email}</span>
          </a>
        )}
      </div>
    </div>
  );
}

export default ContactBar;
