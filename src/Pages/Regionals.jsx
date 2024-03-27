import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import FooterBottom from "../components/Footer/FooterBottom";
import RegionalsPage from '../components/Regionals/RegionalsPage'

const Regionals = () => {
  return (
    <>
      <Header position="menu_nav"/>
      <RegionalsPage/>
      <Footer />
      <FooterBottom />
    </>
  );
};
export default Regionals;
