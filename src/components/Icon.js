import React from "react";
import { FaTimes, FaRegCircle } from "react-icons/fa";

const Icon = ({ iconName }) => {
  switch (iconName) {
    case "cross":
      return <FaTimes className="icons x" />;
    case "circle":
      return <FaRegCircle className="icons o" />;
    default:
      return <div></div>;
  }
};

export default Icon;
