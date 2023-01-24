import React from "react";
import { CustomSplit } from "./splitter_styled";

const Splitter = ({
  directionValue,
  children,
  flexDirectionValue,
  sizes,
  minSizes,
}) => {
  return (
    <CustomSplit
      flexDirValue={flexDirectionValue}
      gutterSize={3}
      sizes={sizes}
      minSize={minSizes}
      direction={directionValue}
    >
      {children}
    </CustomSplit>
  );
};

export default Splitter;
