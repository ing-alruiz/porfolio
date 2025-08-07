import React from "react";
import styles from "./Logo.module.css";
import globals from '../data/globals.json';
import personalInfo from '../data/personal-info.json';

function Logo({ showText = true, size = "default", className = "" }) {
  return (
    <div className={`${styles.logo} ${styles[size]} ${className}`}>
      <img 
        src={globals.logoLocation} 
        alt={`${personalInfo.name} ${personalInfo.lastName}`} 
        className={styles.logoImage}
      />
      {showText && (
        <div className={styles.logoText}>
          <span className={styles.logoName}>{personalInfo.name}</span>
          <span className={styles.logoSurname}>{personalInfo.lastName}</span>
        </div>
      )}
    </div>
  );
}

export default Logo;
