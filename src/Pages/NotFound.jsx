import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import FooterBottom from "../components/Footer/FooterBottom";
import Advantages from '../components/Advantages/Advantages'
import NotFoundPage from '../components/NotFound/NotFoundPage'

const NotFound = () => {
  return (
    <>
      <Header position="menu_nav"/>
      <NotFoundPage/>
      <Footer />
      <FooterBottom />
    </>
  );
};
export default NotFound;
