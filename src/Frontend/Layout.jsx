// File: src/Frontend/Layout.jsx

import React from "react";
import Header from "./Shared/Header/Header.jsx";
import Footer from "./Shared/Footer/Footer.jsx";
import AppRouting from "./AppRouting.jsx";

const Layout = () => {
  return (
    <>
    <div class="wrapper-area">
      <Header />
      {/* <main id="main-content"> */}
        <AppRouting />
      {/* </main> */}
      <Footer />
      </div>
    </>
  );
};

export default Layout;
