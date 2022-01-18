import React, { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const useScroll = () => {
  const controls = useAnimation();
  const [element, view] = useInView({ threshold: 0.3 });
  useEffect(() => {
    if (view) {
      controls.start("show");
    } else {
      controls.start("hidden");
    }
  }, [element, controls, view]);
  return [element, controls];
};

export { useScroll };
