import React, { useState } from "react";
import PageLayout from "../../components/PageLayout/PageLayout";
import BUCardInfo from "../../components/Settings/BUCardInfo";
import BUUserSettings from "../../components/Settings/BUUserSettings";

function BUSettings() {
  const [activePage, setActivePage] = useState("User Settings");

  return (
    <PageLayout pageTitle="Settings">
      <div>
        <h2 className="text-xl lg:text-2xl font-bold my-10">
          <span className="text-buyellow">Providus</span> Banking User Settings
        </h2>
      </div>

      <div className="pb-5 mb-5 border-b border-lightSilver">
        <button
          className={`py-3 px-4 lg:py-3.5 lg:px-6 text-sm lg:text-base font-semibold rounded-lg hover:bg-buyellow transition
          ${
            activePage === "User Settings"
              ? "text-white bg-buyellow hover:text-white"
              : "text-textc hover:text-gray hover:bg-opacity-16"
          }`}
          onClick={() => setActivePage("User Settings")}
        >
          User Settings
        </button>
        <button
          className={`py-3 px-4 lg:py-3.5 lg:px-6 text-sm lg:text-base font-semibold rounded-lg hover:bg-buyellow transition
          ${
            activePage === "Card Info"
              ? "text-white bg-buyellow hover:text-white"
              : "text-textc hover:text-gray hover:bg-opacity-16"
          }`}
          onClick={() => setActivePage("Card Info")}
        >
          Card Info
        </button>
      </div>

      {activePage === "User Settings" && <BUUserSettings />}
      {activePage === "Card Info" && <BUCardInfo />}
    </PageLayout>
  );
}

export default BUSettings;
