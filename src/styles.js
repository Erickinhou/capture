import styled from "styled-components";
import { motion } from "framer-motion";

//styled Components

export const About = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem 10rem;
  color: white;
  gap: 5rem;
  @media screen and (max-width: 1300px) {
    padding: 2rem 4rem;
    flex-direction: column;
    justify-content: center;
  }
`;
export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  z-index: 2;
  h2 {
    font-weight: lighter;
  }
  @media screen and (max-width: 1300px) {
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 0;
  }
`;

export const Image = styled.div`
  flex: 1;
  z-index: 2;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
  @media screen and (max-width: 1300px) {
    width: 100vw;
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;
