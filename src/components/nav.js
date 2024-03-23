import React from "react";
import Cbutton from "./common/cbutton";

function Nav({ handleScroll, setPage }) {
  return (
    <div
      className="defPad horiFlex w-screen"
      style={{
        padding: "15px 20px",
        justifyContent: "space-between",
        backgroundColor: "white",
        borderBottom: "1px solid black",
        boxSizing: "border-box",
      }}
    >
      <div className="rc">Nexgen Digimedia</div>
      <div className="horiFlex">
        <button
          className="b22"
          onClick={() => {
            handleScroll("our-clients");
          }}
        >
          Our Work
        </button>
        <Cbutton
          text="Contact"
          contact={() => {
            handleScroll("contact-form");
          }}
        />
      </div>
    </div>
  );
}

export default Nav;
