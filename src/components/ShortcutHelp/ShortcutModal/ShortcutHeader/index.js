import React from "react";
import Divider from "../Divider";

const ShortcutHeader = ({text}) => {
  return <>
    <h3>{text}</h3>
    <Divider/>
  </>
}

export default ShortcutHeader;