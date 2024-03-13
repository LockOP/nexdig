import React from "react";
import logo from "../images/logo.svg";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

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
          <img
            className="foologo"
            src={logo}
            alt=""
            style={{ height: "100px" }}
          />
          <div
            className="vertFlex"
            style={{ flex: 1, alignItems: "end", gap: "10px" }}
          >
            <div
              className="f1"
              style={{
                width: "100%",
                textAlign: "end",
              }}
            >
              Get in touch with Us
            </div>
            <div className="horiFlex" style={{ gap: "10px" }}>
              <a
                rel="noreferrer"
                href="https://www.instagram.com/nexgen_digimedia?igsh=ODZlZjNtYnhwcWNx"
                target="_blank"
                style={{
                  fontSize: "20px",
                  letterSpacing: "1px",
                }}
              >
                <AiFillInstagram size={40} color="#F56040" />
              </a>
              <a
                rel="noreferrer"
                href="https://www.linkedin.com/company/nexgen-digimedia/"
                target="_blank"
                style={{
                  fontSize: "20px",
                  letterSpacing: "1px",
                }}
              >
                <AiFillLinkedin size={40} color="#0077B5" />
              </a>
            </div>
            <div className="horiFlex" style={{ gap: "10px" }}>
              deepak.pandey@nexgendigimedia.com
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
