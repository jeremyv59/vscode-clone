import { AppContainer, MainContent } from "./app_styled";
import FooterBar from "./components/footer/FooterBar";
import HeaderBar from "./components/header/HeaderBar";
import Sidebar from "./components/sidebar/Sidebar";
import Splitter from "./components/splitter/Splitter";
import ExplorerMenu from "./components/explorer/ExplorerMenu";
import CodeContent from "./components/codeContent/CodeContent";
import { useContext, useState } from "react";
import FileContextProvider from "./context/FileContext";

function App() {
  const [explorerOpen, setExplorerOpen] = useState(false);

  return (
    <FileContextProvider>
      <AppContainer>
        <HeaderBar></HeaderBar>
        <MainContent>
          <Sidebar open={explorerOpen} setOpen={setExplorerOpen}></Sidebar>
          <Splitter
            sizes={explorerOpen ? [15, 85] : [0, 100]}
            snapOff={150}
            minSizes={[0, 15]}
            directionValue={"horizontal"}
            flexDirectionValue="row"
          >
            <ExplorerMenu isOpen={explorerOpen}></ExplorerMenu>
            <CodeContent></CodeContent>
          </Splitter>
        </MainContent>
        <FooterBar></FooterBar>
      </AppContainer>
    </FileContextProvider>
  );
}

export default App;
