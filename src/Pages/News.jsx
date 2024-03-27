import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import FooterBottom from "../components/Footer/FooterBottom";
import News from "../components/News/News";
import Advantages from "../components/Advantages/Advantages";
import Youtube from "../components/Youtube/Youtube";

const NewsPage = () => {
  return (
    <>
      <Header position="menu_nav" />
      <br/>
      <News />
      {/* <Youtube />  */}
      {/* <Advantages /> */}
      <Footer />
      <FooterBottom />
    </>
  );
};
export default NewsPage;
