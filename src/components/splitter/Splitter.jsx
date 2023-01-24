import React from "react";
import { CustomSplit } from "./splitter_styled";

const Splitter = ({
  directionValue,
  children,
  flexDirectionValue,
  sizes,
  minSizes,
  snapOff,
}) => {
  return (
    <CustomSplit
      flexDirValue={flexDirectionValue}
      gutterSize={3}
      sizes={sizes}
      minSize={minSizes}
      direction={directionValue}
      snapOffset={snapOff}
    >
      {children}
    </CustomSplit>
  );
};

export default Splitter;
