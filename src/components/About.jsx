import React from "react";
import styles from "./About.module.css";
import { useTranslation } from "react-i18next";
import personalInfo from "../data/personal-info.json";

export default function About() {
  const { t, i18n } = useTranslation();
  
  // Calculate age from date of birth
  const calculateAge = (dateOfBirth) => {
    if (!dateOfBirth) return 29; // Default age
    
    // Handle different date formats
    let birthDate;
    if (typeof dateOfBirth === 'string') {
      // Try parsing the date string
      birthDate = new Date(dateOfBirth);
    } else if (typeof dateOfBirth === 'number') {
      // If it's already a number, use it as birth year
      const currentYear = new Date().getFullYear();
      return currentYear - dateOfBirth;
    } else {
      return 29; // Default age
    }
    
    // Check if the date is valid
    if (isNaN(birthDate.getTime())) {
      return 29; // Default age if invalid date
    }
    
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    // Adjust age if birthday hasn't occurred this year
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    
    // Ensure age is a valid number
    return isNaN(age) ? 29 : age;
  };

  const age = calculateAge(personalInfo.dateOfBirth);

  return (
    <section id="about" className={styles.aboutSection}>
      {/* Decorative shapes */}
      <svg className={styles.shapeTopLeft} width="60" height="60">
        <rect
          x="10"
          y="10"
          width="40"
          height="40"
          fill="var(--color-accent)"
          rx="4"
        />
      </svg>
      <svg className={styles.shapeTopRight} width="60" height="60">
        <rect
          x="10"
          y="10"
          width="40"
          height="40"
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth="3"
          rx="4"
        />
      </svg>
      <svg className={styles.shapeBottomLeft} width="60" height="60">
        <rect
          x="10"
          y="10"
          width="40"
          height="40"
          fill="var(--color-accent)"
          rx="4"
        />
      </svg>
      <svg className={styles.shapeBottomRight} width="60" height="60">
        <rect
          x="10"
          y="10"
          width="40"
          height="40"
          fill="var(--color-accent)"
          rx="4"
        />
      </svg>

      <div className={styles.container}>
        <h3 className="sectionTitle">{t("about.title")}</h3>
        <div className={styles.aboutContent}>
          <div className={styles.left}>
            <div className={styles.profileWrapper}>
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt={personalInfo.name + " " + personalInfo.lastName}
                className={styles.profileImage}
              />
              <div className={styles.downloadCv}>
                <a href="/cv.pdf" className={styles.downloadBtn}>
                  <i className="fa fa-download"></i>
                  <span>{t("about.downloadCV")}</span>
                </a>
              </div>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.sectionHeader}>
              <h1 className={styles.mainTitle}>
                {t("about.heading")}
              </h1>
            </div>

            <div className={styles.description}>
              <p>{t("about.description1")}</p>
              <p>{t("about.description2")}</p>
            </div>

            <div className={styles.personalInfo}>
              <div className={styles.infoGrid}>
                <div className={styles.infoItem}>
                  <span className={styles.label}>{t("about.name")}</span>
                  <span className={styles.value}>{personalInfo.name} {personalInfo.lastName}</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.label}>{t("about.phone")}</span>
                  <span className={styles.value}>{personalInfo.phone}</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.label}>{t("about.age")}</span>
                  <span className={styles.value}>{age} {t("about.years")}</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.label}>{t("about.email")}</span>
                  <span className={styles.value}>{personalInfo.email}</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.label}>{t("about.occupation")}</span>
                  <span className={styles.value}>{personalInfo.currentOccupation[i18n.language] || personalInfo.currentOccupation.en}</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.label}>{t("about.nationality")}</span>
                  <span className={styles.value}>{personalInfo.nationality[i18n.language] || personalInfo.nationality.en}</span>
                </div>
              </div>
            </div>
{/* 
            <div className={styles.signature}>
              <div className={styles.signatureText}>{personalInfo.name} {personalInfo.lastName}</div>
              <div className={styles.signatureTitle}>
                <strong>{personalInfo.name.toUpperCase()} {personalInfo.lastName.toUpperCase()}</strong> {personalInfo.currentOccupation[i18n.language] || personalInfo.currentOccupation.en}
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
