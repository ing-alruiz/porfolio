import React from "react";
import styles from "./Experience.module.css";
import { useTranslation } from "react-i18next";
import GLOBALS from "../data/globals.json";

export default function Experience() {
  const { t, i18n } = useTranslation();
  const experiences = GLOBALS.experience;

  return (
    <section id="experience" className={styles.experienceSection}>
      <div className="container">
        <h3 className="sectionTitle">{t("experience.title")}</h3>
        
        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <div key={index} className={styles.timelineItem}>
              <div className={styles.leftContent}>
                <div className={styles.companyInfo}>
                  <div className={styles.company}>{exp.company}</div>
                  <div className={styles.position}>
                    {exp.position[i18n.language] || exp.position.en}
                  </div>
                  <div className={styles.metadata}>
                    <span className={styles.location}>{exp.location}</span>
                    <span className={styles.period}>{exp.period}</span>
                  </div>
                </div>
              </div>

              <div className={styles.timelineMarker}>
                <div className={styles.markerDot}></div>
                {index < experiences.length - 1 && (
                  <div className={styles.markerLine}></div>
                )}
              </div>
              
              <div className={styles.rightContent}>
                <div className={styles.keyPoints}>
                  <ul>
                    {(exp.keyPoints[i18n.language] || exp.keyPoints.en).map((point, pointIndex) => (
                      <li key={pointIndex} className={styles.keyPoint}>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
