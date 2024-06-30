import React from "react";
import Header from "../../Companents/Header/Header";
import SectionTwo from "../../Companents/SectionTwo/SectionTwo";
import SectionThree from "../../Companents/SectionThree/SectionThree";
import SectionFour from "../../Companents/SectionFour/SectionFour";
import SectionOne from "../../Companents/SectionOne/SectionOne";
import SectionFive from "../../Companents/SectionFive/SectionFive";
import SectionSix from "../../Companents/SectionSix/SectionSix";
import SectionSeven from "../../Companents/SectionSeven/SectionSeven";
import Footer from "../../Companents/Footer/Footer";
import Brands from "../../Companents/Brands/Brands";

const Home = () => {
  return (
    <>
      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      <Brands />
      <Footer />
    </>
  );
};

export default Home;
