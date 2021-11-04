import React from "react";
import TopMenu from "./TopMenu";
import SideMenu from "./SideMenu";
import MainContent from "./MainContent";
import { albums } from "../data/albums";


function App() {
  return <div className="app-container">
    <TopMenu />
    <SideMenu />
    <MainContent albumsPics ={ albums}/>

  </div>;

}

export default App;
