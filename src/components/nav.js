import React from "react";
import Cbutton from "./common/cbutton";

function Nav({ contact }) {
  return (
    <div
      className="defPad horiFlex w-screen"
      style={{
        height: "150px",
        justifyContent: "space-between",
        backgroundColor: "white",
        borderBottom: "1px solid black",
      }}
    >
      <div className="rc" style={{ userSelect: "none" }}>
        Nexgen Digimedia
      </div>
      <Cbutton text="Contact" contact={contact} />
    </div>
  );
}

export default Nav;
