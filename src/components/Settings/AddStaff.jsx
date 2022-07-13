import React, { useState } from "react";
import AllStaff from "./AllStaff";
import BranchStaff from "./BranchStaff";

function AddStaff() {
  const [activeSection, setActiveSection] = useState("All Staff");

  return (
    <div>
      <div className="flex gap-8">
        <div className="relative flex-1 lg:max-w-lg w-fudll mb-1">
          <input
            type="text"
            placeholder="Search by Name / Email"
            className="rounded-lg bg-brightGray py-3 px-4 lg:px-7 w-full border-0 text-sm lg:text-base"
          />

          <svg
            className="absolute right-5 top-1/2 transform -translate-y-1/2 pointer-events-none"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21.0004 20.9999L16.6504 16.6499"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="flex rounded-lg overflow-hidden mb-1">
          <button
            className={`py-3 px-6 text-sm lg:text-base font-semibold transition hover:text-textc hover:bg-buyellow hover:bg-opacity-16
            ${
              activeSection === "All Staff"
                ? "text-white bg-buyellow"
                : "text-textc bg-brightGray"
            }`}
            onClick={() => setActiveSection("All Staff")}
          >
            All Staff
          </button>
          <button
            className={`py-3 px-6 text-sm lg:text-base font-semibold transition hover:text-textc hover:bg-buyellow hover:bg-opacity-16
            ${
              activeSection === "Branch Staff"
                ? "text-white bg-buyellow"
                : "text-textc bg-brightGray"
            }`}
            onClick={() => setActiveSection("Branch Staff")}
          >
            Branch Staff
          </button>
        </div>
      </div>

      {activeSection === "All Staff" && <AllStaff />}
      {activeSection === "Branch Staff" && <BranchStaff />}
    </div>
  );
}

export default AddStaff;
