import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import FooterBottom from "../components/Footer/FooterBottom";
import EmptyOjbects from '../components/EmptyOjbects/EmptyOjbects'

const EmptyOjbectsPage = () => {
  return (
    <>
      <Header position="menu_nav"/>
      <EmptyOjbects/>
      <Footer />
      <FooterBottom />
    </>
  );
};
export default EmptyOjbectsPage;
