import React from "react";
import { motion } from "framer-motion";
import { About, Description, Hide, Image } from "../styles";
import { titleAnimation, simpleFade, photoAnimation } from "../animation";
import home1 from "../img/home1.png";
import Wave from "../components/Wave";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div className="title">
          <Hide>
            <motion.h2 variants={titleAnimation}>He work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>
              your <span>Dreams</span> come{" "}
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>true.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={simpleFade}>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </motion.p>
        <motion.button variants={simpleFade}>Contact Us</motion.button>
      </Description>
      <Image>
        <motion.img
          variants={photoAnimation}
          src={home1}
          alt="guy with the camera"
        />
      </Image>
      <Wave />
    </About>
  );
};

export default AboutSection;
