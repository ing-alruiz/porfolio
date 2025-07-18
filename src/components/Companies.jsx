import React from "react";
import styles from "./Companies.module.css";
import { useTranslation } from "react-i18next";
import GLOBALS from "../data/globals.json";
import mobilzeLogo from "../assets/images/companies/Migrations Logo (White).svg";
import ex2Logo from "../assets/images/companies/EXSquared-Orange-svg-1.svg";
import revityLogo from "../assets/images/companies/revvity-logo.png";
import intelLogo from "../assets/images/companies/intel-header-logo.svg";
import hclLogo from "../assets/images/companies/hcl-logo.svg";

const companies = GLOBALS.companies;

// Create a mapping object for the imported images
const imageMap = {
  Mobilze: mobilzeLogo,
  "Ex2 OutCoding": ex2Logo,
  Revvity: revityLogo,
  Intel: intelLogo,
  "HCL Technologies": hclLogo,
};

export default function Companies() {
  const { t, i18n } = useTranslation();

  return (
    <section id="companies" className={styles.section}>
      <div className="container">
        <div className="sectionTitle">{t("companies.label")}</div>
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
                src={imageMap[company.name] || ""}
                alt={company.name}
                className={styles.logo}
              />
              {/* <div className={styles.name}>{company.name}</div> */}
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