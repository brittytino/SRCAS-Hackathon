"use client";

import { useEffect, useRef } from "react";
import Sketch from "./sktech";
import Image from "next/image";
import hacksphereLogo from "@/public/hacksphereLogo.png";
import "./style.css";

const HacksphereLogo = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let sketch;
    if (containerRef.current) {
      sketch = new Sketch({ dom: containerRef.current });
    }
    return () => {
      if (
        containerRef.current &&
        sketch &&
        containerRef.current.contains(sketch.renderer.domElement)
      ) {
        containerRef.current.removeChild(sketch.renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="min-[1240px]:h-72 flex items-center justify-center my-12 lg:my-8">
      <Image
        src={hacksphereLogo}
        className={"max-w-[30rem] min-w-[15rem] w-[70%] min-[1240px]:invisible"}
        alt="Hacksphere Logo"
        priority
      />
      <div
        className="w-full h-full absolute top-0 -z-[1] left-0 bg-cover bg-fixed"
        style={{
          backgroundColor: "#000",
          backgroundImage: "url(/background.png)",
        }}
        id="canvasContainer"
        ref={containerRef}
        data-grid="30"
        data-mouse="0.25"
        data-strength="0.23"
      >
        <img src="/hacksphere.png" alt="Hacksphere Logo" id="hacksphereLogo" />
      </div>
    </div>
  );
};

export { HacksphereLogo };
