import React from "react";
import "./MessageBox.css";

export default function MessageBox(props) {
  return (
    <div className={`alert alert-${props.varient || "info"}`}>
      {props.children}
    </div>
  );
}
