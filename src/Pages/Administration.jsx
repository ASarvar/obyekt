import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import FooterBottom from "../components/Footer/FooterBottom";
import AdministrationPage from '../components/Administration/AdministrationPage'

const Administration = () => {
  return (
    <>
      <Header position="menu_nav"/>
      <AdministrationPage/>
      <Footer />
      <FooterBottom />
    </>
  );
};
export default Administration;
