import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import FooterBottom from "../components/Footer/FooterBottom";
import DepartmentsPage from '../components/Departments/DepartmentsPage'

const Departments = () => {
  return (
    <>
      <Header position="menu_nav"/>
      <DepartmentsPage/>
      <Footer />
      <FooterBottom />
    </>
  );
};
export default Departments;
