import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./Terms.module.css";
import personalInfo from "../data/personal-info.json";

export default function Terms() {
  const { t } = useTranslation();

  return (
    <div className={styles.termsContainer}>
      <div className={styles.content}>
        <header className={styles.header}>
          <h1 className={styles.title}>{t("terms.title")}</h1>
          <p className={styles.lastUpdated}>
            {t("terms.lastUpdated")}: {new Date().toLocaleDateString()}
          </p>
        </header>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>{t("terms.introduction.title")}</h2>
          <p className={styles.text}>
            {t("terms.introduction.text", { name: `${personalInfo.name} ${personalInfo.lastName}` })}
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>{t("terms.acceptance.title")}</h2>
          <p className={styles.text}>{t("terms.acceptance.text")}</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>{t("terms.services.title")}</h2>
          <p className={styles.text}>{t("terms.services.description")}</p>
          <ul className={styles.list}>
            <li>{t("terms.services.items.portfolio")}</li>
            <li>{t("terms.services.items.contact")}</li>
            <li>{t("terms.services.items.resources")}</li>
            <li>{t("terms.services.items.blog")}</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>{t("terms.userConduct.title")}</h2>
          <p className={styles.text}>{t("terms.userConduct.description")}</p>
          <ul className={styles.list}>
            <li>{t("terms.userConduct.items.lawful")}</li>
            <li>{t("terms.userConduct.items.respectful")}</li>
            <li>{t("terms.userConduct.items.noHarm")}</li>
            <li>{t("terms.userConduct.items.noSpam")}</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>{t("terms.intellectualProperty.title")}</h2>
          <p className={styles.text}>{t("terms.intellectualProperty.description")}</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>{t("terms.disclaimer.title")}</h2>
          <p className={styles.text}>{t("terms.disclaimer.description")}</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>{t("terms.limitation.title")}</h2>
          <p className={styles.text}>{t("terms.limitation.description")}</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>{t("terms.termination.title")}</h2>
          <p className={styles.text}>{t("terms.termination.description")}</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>{t("terms.changes.title")}</h2>
          <p className={styles.text}>{t("terms.changes.description")}</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>{t("terms.contact.title")}</h2>
          <p className={styles.text}>{t("terms.contact.description")}</p>
          <div className={styles.contactInfo}>
            <p><strong>{t("terms.contact.email")}:</strong> {personalInfo.email}</p>
            {personalInfo.phone && (
              <p><strong>{t("terms.contact.phone")}:</strong> {personalInfo.phone}</p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
