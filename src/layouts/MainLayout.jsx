import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import styles from "./MainLayout.module.css";
import ContactBar from "../components/ContactBar.jsx";

function MainLayout() {
  const [contactBarHidden, setContactBarHidden] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setContactBarHidden(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <ContactBar />
      <Navbar />
      <div className={`${styles.mainContent} ${contactBarHidden ? styles.contactBarHidden : styles.contactBarVisible}`}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default MainLayout;
