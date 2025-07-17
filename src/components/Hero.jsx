import React from "react";
import styles from "./Hero.module.css";
import personalInfo from "../data/personal-info.json";
import GLOBALS from "../data/globals.json";

const socialLinks = GLOBALS.socialLinks;

const roles = GLOBALS.roles || [
  "Full Stack Developer",];

function useTypewriter(strings, speed = 80, pause = 1200) {
  const [index, setIndex] = React.useState(0);
  const [subIndex, setSubIndex] = React.useState(0);
  const [deleting, setDeleting] = React.useState(false);

  React.useEffect(() => {
    if (subIndex === strings[index].length + 1 && !deleting) {
      const timeout = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(timeout);
    }
    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % strings.length);
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) => (deleting ? prev - 1 : prev + 1));
    }, deleting ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, strings, speed, pause]);

  return strings[index].substring(0, subIndex);
}

export default function Hero() {
  const typedRole = useTypewriter(roles);

  return (
    <section id="home" className={styles.heroSection}>
      {/* Decorative shapes */}
      <svg className={styles.shapeTopLeft} width="40" height="40">
        <line
          x1="10"
          y1="10"
          x2="30"
          y2="10"
          stroke="var(--color-accent)"
          strokeWidth="3"
        />
        <line
          x1="10"
          y1="10"
          x2="10"
          y2="30"
          stroke="var(--color-accent)"
          strokeWidth="3"
        />
      </svg>
      <svg className={styles.shapeBottomLeft} width="40" height="40">
        <line
          x1="30"
          y1="30"
          x2="10"
          y2="30"
          stroke="var(--color-accent)"
          strokeWidth="3"
        />
        <line
          x1="10"
          y1="10"
          x2="10"
          y2="30"
          stroke="var(--color-accent)"
          strokeWidth="3"
        />
      </svg>
      <svg className={styles.shapeTopRight} width="40" height="40">
        <text
          x="10"
          y="30"
          fontSize="24"
          fill="var(--color-accent)"
        >
          ✦
        </text>
      </svg>
      <svg className={styles.shapeBottomRight} width="40" height="40">
        <text
          x="10"
          y="30"
          fontSize="24"
          fill="var(--color-accent)"
        >
          ✦
        </text>
      </svg>
      {/* Main content */}
      <div className={styles.heroContent}>
        <div className={styles.left}>
          <div className={styles.hello}>HELLO I'M</div>
          <div className={styles.name}>
            {personalInfo.name}
            <br />
            {personalInfo.lastName}
          </div>
          <div className={styles.roleLine}>
            <span className={styles.rolePrefix}>A Passionate</span>
            <span className={styles.role}>
              <span style={{ whiteSpace: "pre" }}>{typedRole}</span>
              <span className={styles.cursor}>|</span>
            </span>
          </div>
          <a href="/cv.pdf" className={styles.sayHelloBtn}>
            Download CV
          </a>
        </div>
        <div className={styles.right}>
          <div className={styles.avatarWrapper}>
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="James Smith"
              className={styles.avatar}
            />
            <div className={styles.circleBg}></div>
          </div>
          <div className={styles.socials}>
            {socialLinks.map((item, idx) => (
              <a
                key={idx}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
              >
                <i className={item.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}