import React from "react";
import styles from "./Aptitudes.module.css";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const aptitudes = [
  {
    id: "adaptability",
    icon: ["fas", "arrows-spin"],
    titleKey: "aptitudes.adaptability.title",
    descriptionKey: "aptitudes.adaptability.description"
  },
  {
    id: "investigative",
    icon: ["fas", "magnifying-glass"],
    titleKey: "aptitudes.investigative.title",
    descriptionKey: "aptitudes.investigative.description"
  },
  {
    id: "innovation",
    icon: ["fas", "lightbulb"],
    titleKey: "aptitudes.innovation.title",
    descriptionKey: "aptitudes.innovation.description"
  },
  {
    id: "attention",
    icon: ["fas", "eye"],
    titleKey: "aptitudes.attention.title",
    descriptionKey: "aptitudes.attention.description"
  },
  {
    id: "initiative",
    icon: ["fas", "rocket"],
    titleKey: "aptitudes.initiative.title",
    descriptionKey: "aptitudes.initiative.description"
  },
  {
    id: "teamwork",
    icon: ["fas", "users"],
    titleKey: "aptitudes.teamwork.title",
    descriptionKey: "aptitudes.teamwork.description"
  }
];

function Aptitudes() {
  const { t } = useTranslation();

  return (
    <section id="aptitudes" className={styles.aptitudesSection}>
      <div className="container">
        <h3 className="sectionTitle">{t("aptitudes.title")}</h3>
        <div className={styles.carouselContainer}>
          <div className={styles.carouselTrack}>
            {/* First set of aptitudes */}
            {aptitudes.map((aptitude) => (
              <div key={aptitude.id} className={styles.aptitudeCard}>
                <div className={styles.iconWrapper}>
                  <FontAwesomeIcon icon={aptitude.icon} className={styles.icon} />
                </div>
                <div className={styles.cardContent}>
                  <h4 className={styles.cardTitle}>{t(aptitude.titleKey)}</h4>
                  <p className={styles.cardDescription}>{t(aptitude.descriptionKey)}</p>
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {aptitudes.map((aptitude) => (
              <div key={`duplicate-${aptitude.id}`} className={styles.aptitudeCard}>
                <div className={styles.iconWrapper}>
                  <FontAwesomeIcon icon={aptitude.icon} className={styles.icon} />
                </div>
                <div className={styles.cardContent}>
                  <h4 className={styles.cardTitle}>{t(aptitude.titleKey)}</h4>
                  <p className={styles.cardDescription}>{t(aptitude.descriptionKey)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Aptitudes;
