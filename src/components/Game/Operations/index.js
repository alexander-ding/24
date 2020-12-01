import React from "react";
import Operation from "./Operation";
import "./index.scss";
import { ALL_OPERATIONS } from "../../../utils";

const Operations = ({selected, selectOperation}) => {
  return <div className="operations">
    {ALL_OPERATIONS.map((operation, index) => 
      <Operation 
        key={index}
        operation={operation} 
        select={() => selectOperation(operation)}
        isSelected={selected === operation}
      />
    )}
  </div>;
}

export default Operations;