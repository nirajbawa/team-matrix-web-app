import React from "react";
import FooterAbout from "./FooterAbout";
import Footer from "./Footer";

function FooterMain() {
  return (
    <div className="w-full h-full flex flex-col">
      <FooterAbout />
      <Footer />
    </div>
  );
}

export default FooterMain;
