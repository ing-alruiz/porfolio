import React from "react";
import styles from "./Footer.module.css";
import { useTranslation } from "react-i18next";
import personalInfo from "../data/personal-info.json";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <span className={styles.footerText}>
        © {new Date().getFullYear()} {personalInfo.name} {personalInfo.lastName}.{" "}
        {t("footer.copyright")}
      </span>
    </footer>
  );
}

export default Footer;