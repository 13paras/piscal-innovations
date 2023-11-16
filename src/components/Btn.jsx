import React from "react";

const Btn = ({ text, classes }) => {
  return (
    <button
      className={`group hover:after:content-[${text}] inline-block w-[150px] rounded-full p-[2px] px-3 py-3 text-sm transition-all duration-150 ease-in-out ${classes}`}
    >
      {text}
    </button>
  );
};

export default Btn;
