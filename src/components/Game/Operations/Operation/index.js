import React from "react";
import { mapOperationToText } from "../../../../utils";
import "./index.scss";

const Operation = ({operation, isSelected, select}) => {
  return <div className={"operation " + (isSelected ? "selected" : "")} onClick={select}>
    <div className="operation-text">
      { mapOperationToText(operation) }
    </div>
  </div>;
}

export default Operation;