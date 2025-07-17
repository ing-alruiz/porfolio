import React from "react";
import styles from "./About.module.css";
import { useTranslation } from "react-i18next";
import personalInfo from "../data/personal-info.json";

export default function About() {
  const { t, i18n } = useTranslation();

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
            <h3 className={styles.sectionTitle}>{t("about.title")}</h3>
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
                <span className={styles.value}>29 Years</span>
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

          <div className={styles.signature}>
            <div className={styles.signatureText}>{personalInfo.name} {personalInfo.lastName}</div>
            <div className={styles.signatureTitle}>
              <strong>{personalInfo.name.toUpperCase()} {personalInfo.lastName.toUpperCase()}</strong> {personalInfo.currentOccupation[i18n.language] || personalInfo.currentOccupation.en}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
