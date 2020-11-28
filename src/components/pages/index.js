import React, { useState } from "react";
import HeroSection from "../HeroSection";
import InfoSection from "../InfoSection";
import { homeObjOne, homeObjThree, homeObjTwo } from "../InfoSection/Data";
import Navbar from "../Navbar/index";
import Sidebar from "../Sidebar/index";
import Services from "../Services";
import Footer from "../Footer";
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Services />
      <InfoSection {...homeObjThree} />
      <Footer />
    </>
  );
};

export default Home;
