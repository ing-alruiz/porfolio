import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./Privacy.module.css";
import personalInfo from "../data/personal-info.json";

export default function Privacy() {
  const { t } = useTranslation();

  return (
    <div className={styles.privacyContainer}>
      <div className={styles.content}>
        <header className={styles.header}>
          <h1 className={styles.title}>{t("privacy.title")}</h1>
          <p className={styles.lastUpdated}>
            {t("privacy.lastUpdated")}: {new Date().toLocaleDateString()}
          </p>
        </header>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>{t("privacy.introduction.title")}</h2>
          <p className={styles.text}>
            {t("privacy.introduction.text", { name: `${personalInfo.name} ${personalInfo.lastName}` })}
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>{t("privacy.dataCollection.title")}</h2>
          <p className={styles.text}>{t("privacy.dataCollection.description")}</p>
          <ul className={styles.list}>
            <li>{t("privacy.dataCollection.items.contactInfo")}</li>
            <li>{t("privacy.dataCollection.items.usageData")}</li>
            <li>{t("privacy.dataCollection.items.technicalData")}</li>
            <li>{t("privacy.dataCollection.items.cookies")}</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>{t("privacy.dataUse.title")}</h2>
          <p className={styles.text}>{t("privacy.dataUse.description")}</p>
          <ul className={styles.list}>
            <li>{t("privacy.dataUse.items.communication")}</li>
            <li>{t("privacy.dataUse.items.improvement")}</li>
            <li>{t("privacy.dataUse.items.analytics")}</li>
            <li>{t("privacy.dataUse.items.legal")}</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>{t("privacy.dataSharing.title")}</h2>
          <p className={styles.text}>{t("privacy.dataSharing.description")}</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>{t("privacy.cookies.title")}</h2>
          <p className={styles.text}>{t("privacy.cookies.description")}</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>{t("privacy.userRights.title")}</h2>
          <p className={styles.text}>{t("privacy.userRights.description")}</p>
          <ul className={styles.list}>
            <li>{t("privacy.userRights.items.access")}</li>
            <li>{t("privacy.userRights.items.correction")}</li>
            <li>{t("privacy.userRights.items.deletion")}</li>
            <li>{t("privacy.userRights.items.portability")}</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>{t("privacy.contact.title")}</h2>
          <p className={styles.text}>
            {t("privacy.contact.description")}
          </p>
          <div className={styles.contactInfo}>
            <p><strong>{t("privacy.contact.email")}:</strong> {personalInfo.email}</p>
            {personalInfo.phone && (
              <p><strong>{t("privacy.contact.phone")}:</strong> {personalInfo.phone}</p>
            )}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>{t("privacy.changes.title")}</h2>
          <p className={styles.text}>{t("privacy.changes.description")}</p>
        </section>
      </div>
    </div>
  );
}
