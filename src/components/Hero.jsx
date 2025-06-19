import React from "react";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <section id="home" className={styles.heroSection}>
      <img
        src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1500&q=80"
        alt=""
        className={styles.heroBg}
      />
      <div className={styles.heroOverlay} />
      <div className={styles.heroContent}>
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="John Doe"
          className={styles.heroAvatar}
        />
        <div className={styles.heroName}>John Doe</div>
        <div className={styles.heroRole}>Web</div>
        <div className={styles.heroActions}>
          <a href="#contact" className={styles.heroButton}>Contact</a>
          <a href="#portfolio" className={styles.heroButton}>My Works</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;