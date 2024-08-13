import React from "react";
const Styles = {
  primary:
    "bg-blue-700 text-white px-8 py-2 rounded-full transition-all hover:bg-blue-500",
  secondary:
    "bg-slate-300 px-5 py-2 rounded-xl transition-all hover:bg-slate-200 shadow-md",
  danger: "bg-red-500 text-white px-3 py-2 rounded-md w-40 hover:bg-red-700",
  outline: "border border-gray-700 px-3 py-2 rounded-md w-40 hover:bg-gray-300",
};
const Button = ({ text, styles, onclick }) => {
  return <button onClick={onclick} className={Styles[styles]} >{text}</button>;
};

export default Button;
