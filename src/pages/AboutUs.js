import React from "react";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import FaqSection from "../components/FaqSection";
//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import styled from "styled-components";
import ScrollTop from "../components/ScrollTop";

const AboutUs = () => {
  return (
    <Work variants={pageAnimation} initial="hidden" animate="show" exit="exit">
      <AboutSection />
      <ServicesSection />
      <FaqSection />
      <ScrollTop />
    </Work>
  );
};
const Work = styled(motion.div)`
  overflow: hidden;
`;
export default AboutUs;
