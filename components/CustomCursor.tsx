"use client";

import React, { useEffect, useRef, useState } from "react";

type CursorVariant = "default" | "button" | "text";

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  const [cursorVariant, setCursorVariant] = useState<CursorVariant>("default");
  const [isHovered, setIsHovered] = useState(false);

  const pos = useRef({ x: 0, y: 0 });
  const mouse = useRef({ x: 0, y: 0 });

  // Animation loop
  useEffect(() => {
    const animate = () => {
      const distX = mouse.current.x - pos.current.x;
      const distY = mouse.current.y - pos.current.y;

      pos.current.x += distX * 0.05;
      pos.current.y += distY * 0.05;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
      }

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      if (target.matches("button, a, [role='button'], .cursor-pointer")) {
        setCursorVariant("button");
        setIsHovered(true);
      } else if (target.matches("h1, h2, h3, .text-cursor")) {
        setCursorVariant("text");
        setIsHovered(true);
      } else {
        setCursorVariant("default");
        setIsHovered(false);
      }
    };

    const handleMouseOut = () => {
      setCursorVariant("default");
      setIsHovered(false);
    };

    document.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseover", handleMouseOver, true);
    document.addEventListener("mouseout", handleMouseOut, true);
    document.body.style.cursor = "none";


    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver, true);
      document.removeEventListener("mouseout", handleMouseOut, true);
      document.body.style.cursor = "auto";
    };
  }, []);

  const getCursorStyles = (): React.CSSProperties => {
    const style: React.CSSProperties = {
      position: "fixed",
      top: 0,
      left: 0,
      bottom:0,
      right:0,
      transform: `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`,
      pointerEvents: "visible",
      zIndex: 9999,
      borderRadius: "9999px",
      transition: "width 0.2s, height 0.2s, background 0.2s, border 0.2s",
      mixBlendMode: "difference",
    };

    switch (cursorVariant) {
      case "button":
        return {
          ...style,
          width: "70px",
          height: "70px",
          background: "rgba(255, 255, 255, 0.2)",
          border: "2px solid #fff",
        };
        case "text":
        return {
          ...style,
          width: "40px",
          height: "40px",
          background: "rgba(255, 255, 255, 0.1)", // semi-transparent
          backdropFilter: "blur(5px)", // glass blur
          WebkitBackdropFilter: "blur(10px)", // Safari support
          border: "1px solid rgba(255, 255, 255, 0.2)", // subtle border
          borderRadius: "8px",
          mixBlendMode:'color-burn',
        };
      default:
        return {
          ...style,
          width: "40px",
          height: "40px",
          background: "none",
          border:'1px solid white',
        };
    }
  };

  const getDotStyles = (): React.CSSProperties => ({
    position: "fixed",
    top: 0,
    left: 0,
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    background: cursorVariant === "button" ? "transparent" : "#fff",
    zIndex: 9999,
    pointerEvents: "none",
    opacity: isHovered ? 0 : 1,
    transition: "opacity 0.15s ease-out",
    transform: `translate3d(${mouse.current.x}px, ${mouse.current.y}px, 0)`,
  });

  return (
    <>
      <div ref={cursorRef} style={getCursorStyles()} className="md:block hidden " />
      <div ref={dotRef} style={getDotStyles()} />
    </>
  );
};

export default CustomCursor;
