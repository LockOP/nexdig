import React from "react";
import { MdChevronRight } from "react-icons/md";

function Cbutton({ text = "Click", contact }) {
  return (
    <button onClick={() => contact()}>
      {text} <MdChevronRight size={20} className="cbr" />
    </button>
  );
}

export default Cbutton;
