import React from "react";
import NavigationButton from "./NavigationButton";
import "./index.scss";
import { compose, lifecycle } from "recompose";
import Mousetrap from "mousetrap";
import { KEY_MAP } from "../../utils";

const Navigation = ({onPrevious, isPreviousDisabled, onNext}) => {
  return <div className="navigation">
    <NavigationButton text="Previous" onClick={onPrevious} disabled={isPreviousDisabled}/>
    <NavigationButton text="Next" onClick={onNext}/>
  </div>;
}

const enhance = compose(
  lifecycle({
    componentWillMount() {
      Mousetrap.bind(KEY_MAP["SELECT_PREVIOUS"], this.props.onPrevious);
      Mousetrap.bind(KEY_MAP["SELECT_NEXT"], this.props.onNext);
    },
    componentWillReceiveProps(nextProps) {
      Mousetrap.unbind(KEY_MAP["SELECT_PREVIOUS"]);
      Mousetrap.bind(KEY_MAP["SELECT_PREVIOUS"], nextProps.onPrevious);
      Mousetrap.unbind(KEY_MAP["SELECT_NEXT"]);
      Mousetrap.bind(KEY_MAP["SELECT_NEXT"], nextProps.onNext);
    },
    componentWillUnmount() {
      Mousetrap.unbind(KEY_MAP["SELECT_PREVIOUS"]);
      Mousetrap.unbind(KEY_MAP["SELECT_NEXT"]);
    }
  })
)

export default enhance(Navigation);