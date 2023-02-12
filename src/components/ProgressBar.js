import React from "react";

export default function ProgressBar(props) {
  const { bgcolor, completed } = props;

  const containerStyles = {
    height: 15,
    width: "100%",
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: 10,
    flexbasis: "60%",
  };

  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: "inherit",
    textAlign: "right",
    transition: "width 2s",
  };

  const labelStyles = {
    color: "white",
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles} />
    </div>
  );
}
