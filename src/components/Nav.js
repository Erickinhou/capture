import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const Nav = () => {
  const { pathname } = useLocation();
  return (
    <StyledNav>
      <h1>
        <a id="logo" href="#">
          Capture
        </a>
      </h1>
      <ul>
        <li>
          <Link to="/">1. About Us</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/" ? "110%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/work">2. Our Work</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/work" ? "110%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/contact">3. Contact Us</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/contact" ? "110%" : "0%" }}
          />
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 10;
  min-height: 10vh;
  display: flex;
  align-items: center;
  margin: auto;
  justify-content: space-between;
  padding: 1rem 10rem;
  background: #282828;
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    justify-content: space-around;
    list-style: none;
    font-size: 0.8rem;
    flex-grow: 1;
  }
  #logo {
    font-size: 1.5rem;
    font-family: "Lobster";
    font-weight: lighter;
  }
  li {
    position: relative;
  }
  @media screen and (max-width: 1300px) {
    flex-direction: column;
    padding: 0;
    h1 {
      padding-top: 5px;
    }
    ul {
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding-bottom: 0.3rem;
      padding-top: 0.3rem;
      li {
        padding-left: 0;
        position: relative;
      }
    }
  }
`;

const Line = styled(motion.div)`
  height: 0.3rem;
  background: #23d997;
  width: 5%;
  position: absolute;
  bottom: -80%;
  @media screen and (max-width: 1300px) {
    left: 0%;
    bottom: -40%;
  }
`;

export default Nav;
