import React from "react";
import Location from "./icons/location.svg";
import Link from "./icons/link.svg";
import Branch from "./icons/branch.svg";
import Law from "./icons/law.svg";
import Star from "./icons/star.svg";

const Icon = ({ symbol }) => {
  switch (symbol) {
    case "location": return <Location />;
    case "link": return <Link />;
    case "branch": return <Branch />;
    case "law": return <Law />;
    case "star": return <Star />;
    default: return null;
  }
}

export default Icon;