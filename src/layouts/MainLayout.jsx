import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import styles from "./MainLayout.module.css";

function MainLayout() {
  return (
    <>
      <Navbar />
      <div className={styles.mainContent}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default MainLayout;
