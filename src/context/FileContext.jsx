import React, { useState } from "react";
import { createContext } from "react";

export const FileContext = createContext();

const FileContextProvider = ({ children }) => {
  const [selectedFile, setSelectedFile] = useState();

  return (
    <FileContext.Provider value={{ selectedFile, setSelectedFile }}>
      {children}
    </FileContext.Provider>
  );
};

export default FileContextProvider;
