import React, { useEffect, useState } from "react";

export default function SpecialCursor() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorStyle, setCursorStyle] = useState({
    transition: "none",
    transform: "translate(-50%, -50%)", // Center the cursor initially
    filter: 'none',
  });

  const [scale1, setScale1] = useState("100%");
  const [scale2, setScale2] = useState("100%");
  const [scale3, setScale3] = useState("100%");
  const [scale4, setScale4] = useState("100%");

  useEffect(() => {
    const updateCursorPosition = (e) => {
      const newX = e.pageX - 200;
      const newY = e.pageY - 70 - 200;

      setTimeout(() => {
        setCursorStyle({
          transition: "transform 0.15s ease-out",
          transform: `translate(${newX}px, ${newY}px)`,
          filter: 'blur(1px)', // Add motion blur
        });
        setCursorPosition({ x: newX, y: newY });
      }, 150); // Adjust delay as needed
    };

    document.addEventListener("mousemove", updateCursorPosition);

    return () => {
      document.removeEventListener("mousemove", updateCursorPosition);
    };
  }, []);

  // Event handler for hovering buttons or anchors
  const handleHover = () => {
    console.log("i am triggered");
    // setCursorStyle({
    //   ...cursorStyle,
    //   scale: "10%",
    // });
    setScale1("50%");
    setScale2("40%");
    setScale3("40%");
    setScale4("20%");
  };

  // Event handler for removing hover effect
  const handleHoverOut = () => {
    // setCursorStyle({
    //   ...cursorStyle,
    //   scale: "100%",
    // });
    setScale1("100%");
    setScale2("100%");
    setScale3("100%");
    setScale4("100%");
  };

  // Add event listeners to buttons and anchors
  useEffect(() => {
    const buttons = document.querySelectorAll("button");
    const anchors = document.querySelectorAll("a");
    const inputs = document.querySelectorAll("input");
    const textareas = document.querySelectorAll("textarea");

    buttons.forEach((button) => {
      button.addEventListener("mouseenter", handleHover);
      button.addEventListener("mouseleave", handleHoverOut);
    });

    anchors.forEach((anchor) => {
      anchor.addEventListener("mouseenter", handleHover);
      anchor.addEventListener("mouseleave", handleHoverOut);
    });

    inputs.forEach((anchor) => {
      anchor.addEventListener("mouseenter", handleHover);
      anchor.addEventListener("mouseleave", handleHoverOut);
    });

    textareas.forEach((anchor) => {
      anchor.addEventListener("mouseenter", handleHover);
      anchor.addEventListener("mouseleave", handleHoverOut);
    });

    return () => {
      buttons.forEach((button) => {
        button.removeEventListener("mouseenter", handleHover);
        button.removeEventListener("mouseleave", handleHoverOut);
      });

      anchors.forEach((anchor) => {
        anchor.removeEventListener("mouseenter", handleHover);
        anchor.removeEventListener("mouseleave", handleHoverOut);
      });

      inputs.forEach((anchor) => {
        anchor.removeEventListener("mouseenter", handleHover);
        anchor.removeEventListener("mouseleave", handleHoverOut);
      });

      textareas.forEach((anchor) => {
        anchor.removeEventListener("mouseenter", handleHover);
        anchor.removeEventListener("mouseleave", handleHoverOut);
      });
    };
  }, [cursorPosition]); // Ensure cursorPosition is included in dependency array to prevent memory leaks

  return (
    <div className="cur-holder" style={cursorStyle}>
      <div className="cur-position">
        <div className="c-box-1" style={{ scale: scale1 }}>
          <div className="planet-1"></div>
        </div>
        <div className="c-box-2" style={{ scale: scale2 }}>
          <div className="planet-2"></div>
        </div>
        <div className="c-box-2-2" style={{ scale: scale3 }}>
          <div className="planet-3"></div>
        </div>
        <div className="c-box-3" style={{ scale: scale4 }}>
          <div className="planet-4"></div>
        </div>
      </div>
    </div>
  );
}
