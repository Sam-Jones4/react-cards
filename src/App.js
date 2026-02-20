import React, { useState } from "react";
import Tabs from "./components/Tabs";
import CategoryView from "./components/CategoryView";
import { quotes } from "./data/Quotes";
import "./App.css";

function App() {
  const tabLabels = ["By Theme", "By Author", "By Time"];
  const [activeTab, setActiveTab] = useState("By Theme");

  const typeMap = {
    "By Theme": "byTheme",
    "By Author": "byAuthor",
    "By Time": "byTime"
  };

  return (
    <div className="App">
      <h1>Quote Cards</h1>
      <Tabs tabs={tabLabels} activeTab={activeTab} setActiveTab={setActiveTab} />
      <CategoryView quotes={quotes} type={typeMap[activeTab]} />
    </div>
  );
}

export default App;