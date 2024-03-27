import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import FooterBottom from "../components/Footer/FooterBottom";
import OrgStructure from '../components/Structure/OrgStructure'

const Structure = () => {
  return (
    <>
      <Header position="menu_nav"/>
      <OrgStructure/>
      <Footer />
      <FooterBottom />
    </>
  );
};
export default Structure;
