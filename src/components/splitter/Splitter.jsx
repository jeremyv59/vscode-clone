import React from "react";
import { CustomSplit } from "./splitter_styled";

const Splitter = ({
  directionValue,
  children,
  flexDirectionValue,
  sizes,
  minSizes,
  snapOff,
  explorerIsOpen,
}) => {
  return (
    <CustomSplit
      flexDirValue={flexDirectionValue}
      gutterSize={1.5}
      sizes={sizes}
      minSize={minSizes}
      direction={directionValue}
      snapOffset={snapOff}
      explorerIsOpen={explorerIsOpen}
    >
      {children}
    </CustomSplit>
  );
};

export default Splitter;
