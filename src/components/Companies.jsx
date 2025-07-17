import React from "react";
import styles from "./Companies.module.css";
import { useTranslation } from "react-i18next";
import GLOBALS from "../data/globals.json";

const companies = GLOBALS.companies;

export default function Companies() {
  const { t, i18n } = useTranslation();
  const [loadedImages, setLoadedImages] = React.useState({});

  React.useEffect(() => {
    const loadImages = async () => {
      const imagePromises = companies.map(async (company, index) => {
        try {
          const module = await import(company.imgPath);
          return { index, src: module.default };
        } catch (error) {
          console.error(`Failed to load image for ${company.name}:`, error);
          return { index, src: "" };
        }
      });

      const results = await Promise.all(imagePromises);
      const imageMap = {};
      results.forEach(({ index, src }) => {
        imageMap[index] = src;
      });
      setLoadedImages(imageMap);
    };

    loadImages();
  }, []);

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.label}>{t("companies.label")}</div>
        <h2 className={styles.heading}>{t("companies.heading")}</h2>
        <div className={styles.grid}>
          {companies.map((company, idx) => (
            <a
              key={idx}
              href={company.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
              style={{ textDecoration: "none" }}
            >
              <img
                src={loadedImages[idx] || ""}
                alt={company.name}
                className={styles.logo}
              />
              <div className={styles.name}>{company.name}</div>
              <div className={styles.position}>
                {company.position[i18n.language] || company.position.en}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}