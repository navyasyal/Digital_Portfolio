import React from "react";
import "./Highlights.css";
import { highlights } from "../data/portfolio";

const Highlights = () => {
  return (
    <div className="highlights-container">
      {highlights.map((item, index) => (
        <div className="highlight-card" key={index}>
          <h3>{item.k}</h3>
          <p>{item.v}</p>
        </div>
      ))}
    </div>
  );
};

export default Highlights;