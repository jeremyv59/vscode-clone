import { AppContainer, MainContent } from "./app_styled";
import ExplorerMenu from "./components/explorer/ExplorerMenu";
import FileContent from "./components/file/FileContent";
import FooterBar from "./components/footer/FooterBar";
import HeaderBar from "./components/header/HeaderBar";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <AppContainer>
      <HeaderBar></HeaderBar>
      <MainContent>
        <Sidebar></Sidebar>
        <ExplorerMenu></ExplorerMenu>
        <FileContent></FileContent>
      </MainContent>
      <FooterBar></FooterBar>
    </AppContainer>
  );
}

export default App;
