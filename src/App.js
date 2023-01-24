import { AppContainer, MainContent } from "./app_styled";
import FooterBar from "./components/footer/FooterBar";
import HeaderBar from "./components/header/HeaderBar";
import Sidebar from "./components/sidebar/Sidebar";
import Splitter from "./components/splitter/Splitter";
import ExplorerMenu from "./components/explorer/ExplorerMenu";
import CodeContent from "./components/codeContent/CodeContent";
import { useState } from "react";
import FileContextProvider from "./context/FileContext";

function App() {
  const [selectedFile, setSelectedFile] = useState();

  return (
    <FileContextProvider>
      <AppContainer>
        <HeaderBar></HeaderBar>
        <MainContent>
          <Sidebar></Sidebar>
          <Splitter directionValue={"horizontal"}>
            <ExplorerMenu setFileSelected={setSelectedFile}></ExplorerMenu>
            <CodeContent></CodeContent>
          </Splitter>
        </MainContent>
        <FooterBar></FooterBar>
      </AppContainer>
    </FileContextProvider>
  );
}

export default App;
