import React from "react";

export default function Input({ className, ...rest }) {
  return (
    <input
      className={`${className} rounded-lg shadow-sm px-3 py-2 border w-full`}
      {...rest}
    ></input>
  );
}
