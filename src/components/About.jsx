import React from "react";
import styles from "./About.module.css";

export default function About() {
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
              alt="James Smith"
              className={styles.profileImage}
            />
            <div className={styles.downloadCv}>
              <a href="/cv.pdf" className={styles.downloadBtn}>
                <i className="fa fa-download"></i>
                <span>DOWNLOAD MY CV</span>
              </a>
            </div>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.sectionHeader}>
            <h3 className={styles.sectionTitle}>ABOUT ME</h3>
            <h1 className={styles.mainTitle}>
              I Develop System that Works
            </h1>
          </div>

          <div className={styles.description}>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
              officia deserunt mollit anim id est laboru doloremque laudantium, 
              totaeaque ipsa quae ab illo inven tore veritatis et quasi architecto 
              beatae vitae.
            </p>
            <p>
              Oremque laudantium, totaeaque ipsa quae
            </p>
          </div>

          <div className={styles.personalInfo}>
            <div className={styles.infoGrid}>
              <div className={styles.infoItem}>
                <span className={styles.label}>Name</span>
                <span className={styles.value}>James Smith</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.label}>Phone</span>
                <span className={styles.value}>+123 456 7890</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.label}>Age</span>
                <span className={styles.value}>29 Years</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.label}>Email</span>
                <span className={styles.value}>hello@thames.com</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.label}>Occupation</span>
                <span className={styles.value}>System Engineer</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.label}>Nationality</span>
                <span className={styles.value}>Bangladeshi</span>
              </div>
            </div>
          </div>

          <div className={styles.signature}>
            <div className={styles.signatureText}>Bruce Wayne</div>
            <div className={styles.signatureTitle}>
              <strong>BRUCE WAYNE</strong> Software Architect, Google Inc.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
