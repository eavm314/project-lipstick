import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as regStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

export default function Stars({ numStar }) {
  const em=16
  return (
    <div className="flex">
      <FontAwesomeIcon icon={numStar >= 1 ? solidStar : regStar} color="#000000"/>
      <FontAwesomeIcon icon={numStar >= 2 ? solidStar : regStar} color="#000000"/>
      <FontAwesomeIcon icon={numStar >= 3 ? solidStar : regStar} color="#000000"/>
      <FontAwesomeIcon icon={numStar >= 4 ? solidStar : regStar} color="#000000"/>
      <FontAwesomeIcon icon={numStar >= 5 ? solidStar : regStar} color="#000000"/>
    </div>
  )

}