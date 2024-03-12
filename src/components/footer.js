import React from "react";
import logo from "../images/logocolor.png";
import { AiFillLinkedin } from "react-icons/ai";

function Footer() {
  return (
    <>
      <div
        className="vertFlex defPad"
        style={{
          width: "100%",
          marginTop: "40px",
        //   borderTop: "1px solid",
          paddingTop: "40px",
          paddingBottom: "40px",
        }}
      >
        <div
          className="horiFlex"
          style={{ width: "100%", alignItems: "start" }}
        >
          <img src={logo} alt="" style={{ height: "100px" }} />
          <div
            className="vertFlex"
            style={{ flex: 1, alignItems: "end", gap: "10px" }}
          >
            <div
              style={{
                width: "100%",
                textAlign: "end",
                fontSize: "37.92px",
              }}
            >
              Get in touch with Us
            </div>
            <div className="horiFlex" style={{ gap: "10px" }}>
              <a
                href="https://www.linkedin.com/company/nexgen-digimedia/"
                target="_blank"
                style={{
                  fontSize: "20px",
                  letterSpacing: "1px",
                }}
              >
                <AiFillLinkedin size={40} />
              </a>
            </div>
            <div className="horiFlex" style={{ gap: "10px" }}>
              +91 90125 10996
            </div>
          </div>
        </div>
      </div>
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
