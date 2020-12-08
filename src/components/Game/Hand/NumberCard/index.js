import React from "react";
import { GOAL_NUMBER, KEY_MAP } from "../../../../utils";
import "./index.scss";
import { compose, lifecycle } from "recompose";
import Mousetrap from "mousetrap";

const NumberCard = ({isHidden, isSelected, isFinal, n, select}) => {
  return isHidden ? 
  <div className="number-card-hidden"/> :
  <div className={"number-card " + (isFinal ? 
    (n.equals(GOAL_NUMBER) ? "correct" : "incorrect") :
    (isSelected ? "selected" : ""))
  } onClick={select}>
    <div className="number-card-number">
      { n.toFraction() }
    </div>
  </div>;
}

const enhance = compose(lifecycle({
  componentDidMount() {
    if (!this.props.isHidden) {
      Mousetrap.bind(KEY_MAP["SELECT_" + (this.props.index + 1).toString()].keys, this.props.select);
    }
  },
  componentWillReceiveProps(nextProps) {
    Mousetrap.unbind(KEY_MAP["SELECT_" + (this.props.index + 1).toString()].keys);
    if (!nextProps.isHidden) {
      Mousetrap.bind(KEY_MAP["SELECT_" + (this.props.index + 1).toString()].keys, nextProps.select);
    }
  },
  componentWillUnmount() {
    if (!this.props.isHidden) {
      Mousetrap.unbind(KEY_MAP["SELECT_" + (this.props.index + 1).toString()].keys);
    } 
  }
}))


export default enhance(NumberCard);