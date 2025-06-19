import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.footerText}>
        © {new Date().getFullYear()} John Doe. All rights reserved.
      </span>
    </footer>
  );
}

export default Footer;