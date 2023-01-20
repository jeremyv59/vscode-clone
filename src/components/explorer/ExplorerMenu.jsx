import React, { useState } from "react";
import { Resizable, ResizableBox } from "react-resizable";

const ExplorerMenu = () => {
  const [width, setWidth] = useState(200);

  const onResize = (event, { element, size, handle }) => {
    setWidth(size.width);
  };

  return (
    <Resizable width={width} height={450} onResize={onResize}>
      <div
        className="box"
        style={{
          width: width + "px",
          backgroundColor: "green",
        }}
      >
        <span>Contents</span>
      </div>
    </Resizable>
  );
};

export default ExplorerMenu;
