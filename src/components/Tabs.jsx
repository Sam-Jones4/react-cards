import React from "react";

export default function Tabs({ tabs, activeTab, setActiveTab }) {
  return (
    <div className="tabs">
      {tabs.map(tab => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={activeTab === tab ? "active" : ""}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}