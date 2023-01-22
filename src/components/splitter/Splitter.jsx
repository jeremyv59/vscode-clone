import React from "react";
import ExplorerMenu from "../explorer/ExplorerMenu";
import FileContent from "../file/FileContent";
import { CustomSplit } from "./splitter_styled";

const Splitter = () => {
  return (
    <CustomSplit sizes={[15, 85]} minSize={[0, 15]} direction="horizontal">
      <ExplorerMenu></ExplorerMenu>
      <FileContent></FileContent>
    </CustomSplit>
  );
};

export default Splitter;
