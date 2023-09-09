import React, { useState } from "react";
import "./DivBody.css"; // Create a CSS file for styling
import Board from "./Board";
function Divbody({ group, order }) {
  return (
    <div className="divbody">
      <Board group={group} order={order} />
    </div>
  );
}

export default Divbody;
