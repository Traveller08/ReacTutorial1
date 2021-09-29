import React from "react";
import PropTypes from "prop-types";
const Card = ({ heading, desc, color, bgcolor }) => {
  return (
    <div className="card" style={{ backgroundColor: { bgcolor } }}>
      <h1>{heading}</h1>
      <h4>{desc}</h4>
      <button style={{ backgroundColor: { color } }} className="btn">
        submit
      </button>
    </div>
  );
};
Card.defaultProps = {
  heading: "card",
  desc: "this is a standard template for card generation",
  color: "black",
  bgcolor: "white"
};
Card.PropTypes = {
  heading: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  color: PropTypes.string,
  bgcolor: PropTypes.string
};

export default Card;
