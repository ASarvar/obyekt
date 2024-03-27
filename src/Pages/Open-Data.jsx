import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import FooterBottom from "../components/Footer/FooterBottom";
import OpenData from '../components/Opendata/OpenDataPage'

const Opendata = () => {
  return (
    <>
      <Header position="menu_nav"/>
      <OpenData/>
      <Footer />
      <FooterBottom />
    </>
  );
};
export default Opendata;
