import React from "react";
//Animations
import { motion } from "framer-motion";
import styled from "styled-components";
import { pageAnimation, titleAnimation } from "../animation";

const ContactUs = () => {
  return (
    <ContactStyle
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnimation}>Get in touch.</motion.h2>
        </Hide>
      </Title>
      <div>
        <Hide>
          <Social variants={titleAnimation}>
            <Circle />
            <h2> Send Us A Message </h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnimation}>
            <Circle />
            <h2> Send an email </h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnimation}>
            <Circle />
            <h2> Social Media </h2>
          </Social>
        </Hide>
      </div>
    </ContactStyle>
  );
};

const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  background: white;
  @media screen and (max-width: 1300px) {
    padding: 2rem 4rem;
    height: 100%;
  }
`;

const Title = styled.div`
  margin-right: 4rem;
  color: black;
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #353535;
  @media screen and (max-width: 1300px) {
    padding: 0;
    width: 2rem;
    height: 2rem;
  }
`;

const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
  }
  @media screen and (max-width: 1300px) {
    h2 {
      font-size: 2rem;
    }
  }
`;

export default ContactUs;
