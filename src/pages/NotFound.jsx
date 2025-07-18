import React from "react";
import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";
import { useTranslation } from "react-i18next";

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <div className={styles.notFoundContainer}>
      <div className={styles.content}>
        <div className={styles.errorCode}>404</div>
        <h1 className={styles.title}>{t("notFound.title", "Page Not Found")}</h1>
        <p className={styles.description}>
          {t("notFound.description", "The page you're looking for doesn't exist or has been moved.")}
        </p>
        <Link to="/" className={styles.homeButton}>
          {t("notFound.goHome", "Go Back Home")}
        </Link>
      </div>
      <div className={styles.backgroundShape}></div>
    </div>
  );
}
