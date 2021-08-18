import React, { useState } from "react";
import "./ColorSelector.css";
import { SketchPicker } from "react-color";
import { PaintAppStore } from "../PaintAppStore";
const ColorSelector = () => {
  const color_ = PaintAppStore.useState((s) => s.color);
  const [display, setDisplay] = useState(false);
  const onClickMethod = () => {
    setDisplay(!display);
  };

  const onCloseMethod = () => {
    setDisplay(false);
  };

  const handleChangeComplete = (color, event) => {
    PaintAppStore.update((s) => {
      s.color = color.hex;
    });
    console.log("New Color " + color);
    event;
  };

  const popover = {
    position: "absolute",
    zIndex: "3",
  };

  const cover = {
    position: "fixed",
    top: "0px",
    right: "0px",
    bottom: "0px",
    left: "0px",
  };
  return (
    <div>
      <a className="colorSelector" onClick={onClickMethod}>
        select color
      </a>
      {display ? (
        <div style={popover}>
          <div style={cover} onClick={onCloseMethod} />
          <SketchPicker onChange={handleChangeComplete} color={color_} />
        </div>
      ) : null}
    </div>
  );
};

export default ColorSelector;
