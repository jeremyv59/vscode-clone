import React from "react";
import { CustomSplit } from "./splitter_styled";

const Splitter = ({ directionValue, children, flexDirectionValue }) => {
  return (
    <CustomSplit
      flexDirValue={flexDirectionValue}
      gutterSize={3}
      sizes={[15, 85]}
      minSize={[0, 15]}
      direction={directionValue}
    >
      {children}
    </CustomSplit>
  );
};

export default Splitter;
