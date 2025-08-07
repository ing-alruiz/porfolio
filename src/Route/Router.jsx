import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import NotFound from "../pages/NotFound.jsx";
import Privacy from "../pages/Privacy.jsx";
import Terms from "../pages/Terms.jsx";
import MainLayout from "../layouts/MainLayout.jsx";

function AppRouter() {
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap" rel="stylesheet" />
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="terms" element={<Terms />} />
            {/* Add more routes here if needed */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default AppRouter;