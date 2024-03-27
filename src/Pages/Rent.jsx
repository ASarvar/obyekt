import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import FooterBottom from "../components/Footer/FooterBottom";
import RentPage from '../components/Rent/RentPage'

const Rent = () => {
  return (
    <>
      <Header position="menu_nav"/>
      <RentPage/>
      <Footer />
      <FooterBottom />
    </>
  );
};
export default Rent;
