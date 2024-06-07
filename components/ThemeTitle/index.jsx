"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ThemeTitle = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setCursorVariant] = useState("default");
  const [display, setDisplay] = useState("block");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  useEffect(() => {
    setDisplay(window.innerWidth < 450 ? "none" : "block");
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      display: display,
    },
    text: {
      height: 120,
      width: 120,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "#DED9C6",
      mixBlendMode: "difference",
    },
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return (
    <>
      <p className="text-[#ffffff] text-[1.25rem] md:text-[1.5rem] font-bold font-medium uppercase">
        Theme :{" "}
      </p>
      <p
        className="text-[#ffffff] text-[2.375rem] md:text-[3rem] 
          font-medium leading-[1.2] md:leading-[1.1] font-semibold"
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
      >
        Sustainable 
        <br /> Development Goals
      </p>

      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
      />
    </>
  );
};

export default ThemeTitle;
