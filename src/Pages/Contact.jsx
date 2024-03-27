import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import FooterBottom from "../components/Footer/FooterBottom";
import Contacts from "../components/Contacts/Contacts";
const About = () => {
  return (
    <>
      <Header position="menu_nav" />
      <Contacts />
      <Footer/>
      <FooterBottom />
    </>
  );
};
export default About;
