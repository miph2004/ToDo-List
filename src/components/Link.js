import React from "react";
import PropTypes from "prop-types";

const Link = (props) => {
  return (
    <>
      <li className={props.active ? "selected" : ""} onClick={props.onClick}>
        {props.children}
      </li>
      <span></span>
    </>
  );
};

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Link;
