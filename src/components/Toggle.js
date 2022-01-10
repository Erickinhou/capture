import { motion } from "framer-motion";
import React, { useState } from "react";

const Toggle = ({ title, children }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <motion.div
      layout
      onClick={() => setToggle(!toggle)}
      style={{ cursor: "pointer" }}
    >
      <motion.h4 layout>{title}</motion.h4>
      {toggle && children}
      <motion.div layout className="faq-line"></motion.div>
    </motion.div>
  );
};

export default Toggle;
