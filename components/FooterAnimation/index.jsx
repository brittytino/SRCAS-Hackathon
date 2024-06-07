"use client";

import { useState, useEffect } from "react";
import styles from "./index.module.css";

const images = [
  "/footer/sdg/1.png",
  "/footer/sdg/2.png",
  "/footer/sdg/3.png",
  "/footer/sdg/4.png",
  "/footer/sdg/5.png",
  "/footer/sdg/6.png",
  "/footer/sdg/7.png",
  "/footer/sdg/8.png",
  "/footer/sdg/9.png",
  "/footer/sdg/10.png",
  "/footer/sdg/11.png",
  "/footer/sdg/12.png",
  "/footer/sdg/13.png",
  "/footer/sdg/14.png",
  "/footer/sdg/15.png",
  "/footer/sdg/16.png",
  "/footer/sdg/17.png",
];

export default function FooterAnimation() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const rotationInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 0.8 * 1000); // Change image every 2 seconds

    return () => {
      clearInterval(rotationInterval);
    };
  }, []);

  return (
    <div className="flex items-start">
      <div className={`${styles.rotatingContainer}`}>
        <img
          src={images[currentIndex]}
          alt="Footer Image"
          className="w-44 lg:w-52 xl:w-72"
        />
      </div>
    </div>
  );
}
