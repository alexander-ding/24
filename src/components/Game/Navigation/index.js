import React from "react";
import "./index.scss";
import NavigationButton from "./NavigationButton";
import { compose, lifecycle } from "recompose";
import Mousetrap from "mousetrap";
import { KEY_MAP } from "../../../utils";

const Navigation = ({goBack, reset}) => {
  return <div className="game-navigation">
    <NavigationButton text="Back" onClick={goBack}/>
    <NavigationButton text="Reset" onClick={reset}/>
  </div>;
}

const enhance = compose(lifecycle({
  componentDidMount() {
    Mousetrap.bind(KEY_MAP["SELECT_BACK"].keys, this.props.goBack);
    Mousetrap.bind(KEY_MAP["SELECT_RESET"].keys, this.props.reset);
  },
  componentWillReceiveProps(nextProps) {
    Mousetrap.unbind(KEY_MAP["SELECT_BACK"].keys);
    Mousetrap.unbind(KEY_MAP["SELECT_RESET"].keys);
    Mousetrap.bind(KEY_MAP["SELECT_BACK"].keys, nextProps.goBack);
    Mousetrap.bind(KEY_MAP["SELECT_RESET"].keys, nextProps.reset);
  },
  componentWillUnmount() {
    Mousetrap.unbind(KEY_MAP["SELECT_BACK"].keys);
    Mousetrap.unbind(KEY_MAP["SELECT_RESET"].keys);
  }
}))

export default enhance(Navigation);