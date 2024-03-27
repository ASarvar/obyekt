import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import FooterBottom from "../components/Footer/FooterBottom";
import Bookreader from '../components/BookReader/BookReader'

const BookReader = () => {
  return (
    <>
      <Header position="menu_nav"/>
      <Bookreader/>
      <Footer />
      <FooterBottom />
    </>
  );
};
export default BookReader;
