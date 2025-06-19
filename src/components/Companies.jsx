import React from "react";
import styles from "./Companies.module.css";
import mobilzeLogo from "../assets/images/companies/Migrations Logo (White).svg";
import ex2Logo from "../assets/images/companies/EXSquared-Orange-svg-1.svg";
import revityLogo from "../assets/images/companies/revvity-logo.png";
import intelLogo from "../assets/images/companies/intel-header-logo.svg";

const companies = [
  {
    name: "Mobilze",
    img: mobilzeLogo,
    url: "https://mobilze.com",
    position: "Software Developer II",
  },
  {
    name: "Ex2 OutCoding",
    img: ex2Logo,
    url: "https://latam.exsquared.com/",
    position: ".Net Developer",
  },
  {
    name: "Revvity",
    img: revityLogo,
    url: "https://www.revvity.com/",
    position: ".Net Developer",
  },
  {
    name: "Intel",
    img: intelLogo,
    url: "https://www.intel.la/",
    position: "Technical Lead",
  },
];

export default function Companies() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.label}>
          Favourite Clients
        </div>
        <h2 className={styles.heading}>
          Work With Trusted Comapny.
        </h2>
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
                src={company.img}
                alt={company.name}
                className={styles.logo}
              />
              <div className={styles.name}>
                {company.name}
              </div>
              <div className={styles.position}>
                {company.position}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}