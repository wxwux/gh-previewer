import React from "react";
import Location from "./icons/location.svg";
import Link from "./icons/link.svg";
import Branch from "./icons/branch.svg";
import Law from "./icons/law.svg";
import Star from "./icons/star.svg";
import Check from "./icons/check.svg";

const Icon = ({ symbol, ...props }) => {
  switch (symbol) {
    case "location": return <Location {...props} />;
    case "link": return <Link {...props} />;
    case "branch": return <Branch {...props} />;
    case "law": return <Law {...props} />;
    case "star": return <Star {...props} />;
    case "check": return <Check viewBox="0 0 24 24" {...props} />;
    default: return null;
  }
}


export default Icon;