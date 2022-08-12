import React from "react";

export default function Button({ className, ...rest }) {
  return (
    <button
      className={`${className} rounded-lg shadow-sm px-3 py-2 border w-full`}
      {...rest}
    ></button>
  );
}
