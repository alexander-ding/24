import React from "react";
import { KEY_MAP, mapOperationToKey, mapOperationToText } from "../../../../utils";
import "./index.scss";
import { compose, lifecycle } from "recompose";
import Mousetrap from "mousetrap";

const Operation = ({operation, isSelected, select}) => {
  return <div className={"operation " + (isSelected ? "selected" : "")} onClick={select}>
    <div className="operation-text">
      { mapOperationToText(operation) }
    </div>
  </div>;
}

const enhance = compose(
  lifecycle({
    componentDidMount() {
      Mousetrap.bind(KEY_MAP[mapOperationToKey(this.props.operation)].keys, this.props.select);
    },
    componentWillReceiveProps(nextProps) {
      Mousetrap.unbind(KEY_MAP[mapOperationToKey(this.props.operation)].keys);
      Mousetrap.bind(KEY_MAP[mapOperationToKey(this.props.operation)].keys, nextProps.select);
    },
    componentWillUnmount() {
      Mousetrap.unbind(KEY_MAP[mapOperationToKey(this.props.operation)].keys);
    }
  })
)

export default enhance(Operation);