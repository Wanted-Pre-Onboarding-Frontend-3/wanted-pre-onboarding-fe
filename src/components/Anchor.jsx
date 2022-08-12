import React from "react";
import { Link } from "react-router-dom";

export default function Anchor({ className, ...rest }) {
  return (
    <Link
      className={`${className} rounded-lg shadow-sm px-3 py-2 border w-full`}
      {...rest}
    ></Link>
  );
}
