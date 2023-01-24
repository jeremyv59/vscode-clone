import React, { useState } from "react";
import { createContext } from "react";

const FileContext = createContext(null);

const FileContextProvider = ({ children }) => {
  const [selectedFile, setSelectedFile] = useState();

  return (
    <FileContext.Provider value={{ value, setValue }}>
      {children}
    </FileContext.Provider>
  );
};

export default FileContextProvider;
