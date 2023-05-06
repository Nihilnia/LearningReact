import React from "react";

export default function UserInput(props) {
  return (
    <input
      type="text"
      name={props.name}
      value={props.firstName}
      onChange={props.handleClickEvent}
      placeholder={props.placeHolder}
    />
  );
}
