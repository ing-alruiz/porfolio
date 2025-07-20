import React from "react";
import styles from "./Portfolio.module.css";
import "../styles/grain-background.css";
import { useTranslation } from "react-i18next";

const projects = [
  {
    title: "Project 1",
    image: "https://sakura.saadasran.com/images/portfolio/1.jpg",
    description: "Landing page design.",
  },
  {
    title: "Project 2",
    image: "https://sakura.saadasran.com/images/portfolio/2.jpg",
    description: "Corporate website.",
  },
  {
    title: "Project 3",
    image: "https://sakura.saadasran.com/images/portfolio/3.jpg",
    description: "E-commerce UI.",
  },
  {
    title: "Project 4",
    image: "https://sakura.saadasran.com/images/portfolio/4.jpg",
    description: "Portfolio showcase.",
  },
  {
    title: "Project 5",
    image: "https://sakura.saadasran.com/images/portfolio/5.jpg",
    description: "Creative branding.",
  },
  {
    title: "Project 6",
    image: "https://sakura.saadasran.com/images/portfolio/6.jpg",
    description: "Mobile app design.",
  },
];

function Portfolio() {
  const { t } = useTranslation();

  return (
    <section
      id="portfolio"
      className={`${styles.portfolioSection}`}
    >
      <h2 className={styles.portfolioTitle}>{t("portfolio.title")}</h2>
      <div className={styles.portfolioDividerWrapper}>
        <div className={styles.portfolioDivider} />
      </div>
      <div className={styles.portfolioGrid}>
        {projects.map((project, idx) => (
          <div key={idx} className={styles.portfolioCard}>
            <div className={styles.portfolioImageWrapper}>
              <img
                src={project.image}
                alt={project.title}
                className={styles.portfolioImage}
              />
            </div>
            <div className={styles.portfolioCardContent}>
              <h3 className={styles.portfolioCardTitle}>{project.title}</h3>
              <p className={styles.portfolioCardDesc}>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;