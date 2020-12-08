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
      Mousetrap.bind(KEY_MAP["SELECT_PREVIOUS"].keys, this.props.onPrevious);
      Mousetrap.bind(KEY_MAP["SELECT_NEXT"].keys, this.props.onNext);
    },
    componentWillReceiveProps(nextProps) {
      Mousetrap.unbind(KEY_MAP["SELECT_PREVIOUS"].keys);
      Mousetrap.bind(KEY_MAP["SELECT_PREVIOUS"].keys, nextProps.onPrevious);
      Mousetrap.unbind(KEY_MAP["SELECT_NEXT"].keys);
      Mousetrap.bind(KEY_MAP["SELECT_NEXT"].keys, nextProps.onNext);
    },
    componentWillUnmount() {
      Mousetrap.unbind(KEY_MAP["SELECT_PREVIOUS"].keys);
      Mousetrap.unbind(KEY_MAP["SELECT_NEXT"].keys);
    }
  })
)

export default enhance(Navigation);