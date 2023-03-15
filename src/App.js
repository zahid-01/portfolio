import { useState } from "react";

import "./App.css";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/main Content/MainContent";

function App() {
  const [currrentPage, setCurrentPage] = useState("me");

  const displayPage = (data) => {
    setCurrentPage(data);
  };

  return (
    <div className="App">
      <Sidebar setPage={displayPage} />
      <MainContent page={currrentPage} />
    </div>
  );
}

export default App;
