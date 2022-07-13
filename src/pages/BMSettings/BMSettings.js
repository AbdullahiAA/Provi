import React, { useState } from "react";
import PageLayout from "../../components/PageLayout/PageLayout";
import AddStaff from "../../components/Settings/AddStaff";
import CardInfo from "../../components/Settings/CardInfo";
import UserSettings from "../../components/Settings/UserSettings";

function BMSettings() {
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
            activePage === "Add Staff"
              ? "text-white bg-buyellow hover:text-white"
              : "text-textc hover:text-gray hover:bg-opacity-16"
          }`}
          onClick={() => setActivePage("Add Staff")}
        >
          Add Staff
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

      {activePage === "User Settings" && <UserSettings />}
      {activePage === "Add Staff" && <AddStaff />}
      {activePage === "Card Info" && <CardInfo />}
    </PageLayout>
  );
}

export default BMSettings;
