import React from "react";
import logo from "../images/logo.svg";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

function Footer() {
  return (
    <>
      <div
        className="horiFlex defPad"
        style={{
          width: "100%",
          alignItems: "start",
          borderTop: "1px solid black",
          paddingTop: "10px",
          paddingBottom: "10px",
          justifyContent: "center",
          borderColor: "#959595",
        }}
      >
        <div style={{ fontSize: "15px", color: "#959595" }}>
          © Nexgen Digimedia 2024
        </div>
      </div>
    </>
  );
}

export default Footer;
