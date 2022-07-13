import React, { useEffect, useState } from "react";
import ScrolledTable, {
  ScrolledTableBody,
  ScrolledTableHead,
} from "../Tables/ScrolledTable";

function AssignRoles() {
  const [tableData, setTableData] = useState([]);

  function openMenu(e) {
    const parentElement = e.target.parentElement;
    const targetMenu =
      parentElement.children[parentElement.children.length - 1];

    if (targetMenu.classList.contains("hidden") === false) {
      targetMenu.classList.add("hidden");
    } else {
      closeAllMenus();
      targetMenu.classList.remove("hidden");
    }
  }

  function closeAllMenus() {
    const menus = document.querySelectorAll(".menu");

    menus.forEach((menu) => {
      if (menu.classList.contains("hidden") === false) {
        menu.classList.add("hidden");
      }
    });
  }

  useEffect(() => {
    setTableData([
      {
        fullName: "Modupe Akulasah",
        email: "modepef.a@prov.cgi",
        role: "Global Admin",
        status: "Active",
        branch: "Ikeja GRA Lagos, Nigeria",
      },
      {
        fullName: "Modupe Akulasah",
        email: "modepef.a@prov.cgi",
        role: "Global Admin",
        status: "Suspended",
        branch: "Ikeja GRA Lagos, Nigeria",
      },
      {
        fullName: "Modupe Akulasah",
        email: "modepef.a@prov.cgi",
        role: "Global Admin",
        status: "Active",
        branch: "Ikeja GRA Lagos, Nigeria",
      },
      {
        fullName: "Modupe Akulasah",
        email: "modepef.a@prov.cgi",
        role: "Global Admin",
        status: "Active",
        branch: "Ikeja GRA Lagos, Nigeria",
      },
      {
        fullName: "Modupe Akulasah",
        email: "modepef.a@prov.cgi",
        role: "Branch Admin",
        status: "Active",
        branch: "Ikeja GRA Lagos, Nigeria",
      },
      {
        fullName: "Modupe Akulasah",
        email: "modepef.a@prov.cgi",
        role: "Branch Admin",
        status: "Active",
        branch: "Ikeja GRA Lagos, Nigeria",
      },
      {
        fullName: "Modupe Akulasah",
        email: "modepef.a@prov.cgi",
        role: "Branch Admin",
        status: "Active",
        branch: "Ikeja GRA Lagos, Nigeria",
      },
      {
        fullName: "Modupe Akulasah",
        email: "modepef.a@prov.cgi",
        role: "Internal Control",
        status: "Suspended",
        branch: "Ikeja GRA Lagos, Nigeria",
      },
      {
        fullName: "Modupe Akulasah",
        email: "modepef.a@prov.cgi",
        role: "Global Admin",
        status: "Active",
        branch: "Ikeja GRA Lagos, Nigeria",
      },
      {
        fullName: "Modupe Akulasah",
        email: "modepef.a@prov.cgi",
        role: "Internal Control",
        status: "Active",
        branch: "Ikeja GRA Lagos, Nigeria",
      },
    ]);
  }, []);

  return (
    <div>
      <div className="relative lg:max-w-lg mb-1">
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

      {tableData.length > 0 && (
        <ScrolledTable>
          <ScrolledTableHead>
            <th>Full Name</th>
            <th>Email</th>
            <th>Roles</th>
            <th>Assign Role</th>
            <th>Status</th>
            <th>Assign Branch</th>
          </ScrolledTableHead>

          <ScrolledTableBody>
            {tableData?.map((row, key) => (
              <tr key={key}>
                <td>{row.fullName}</td>
                <td>{row.email}</td>
                <td>{row.role}</td>
                <td>
                  <div className="relative w-fit m-auto">
                    <svg
                      className="cursor-pointer"
                      onClick={openMenu}
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="pointer-events-none"
                        d="M13 12.9971C13 12.4448 12.5523 11.9971 12 11.9971C11.4477 11.9971 11 12.4448 11 12.9971C11 13.5494 11.4477 13.9971 12 13.9971C12.5523 13.9971 13 13.5494 13 12.9971Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        className="pointer-events-none"
                        d="M6 12.9971C6 12.4448 5.55228 11.9971 5 11.9971C4.44772 11.9971 4 12.4448 4 12.9971C4 13.5494 4.44772 13.9971 5 13.9971C5.55228 13.9971 6 13.5494 6 12.9971Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        className="pointer-events-none"
                        d="M20 12.9971C20 12.4448 19.5523 11.9971 19 11.9971C18.4477 11.9971 18 12.4448 18 12.9971C18 13.5494 18.4477 13.9971 19 13.9971C19.5523 13.9971 20 13.5494 20 12.9971Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <ul className="menu hidden rounded-lg shadow-menu z-20 py-2 mb-2 w-32 bg-white border-1 absolute top-0 right-8">
                      <li className="p-2.5 flex justify-center items-center text-10 font-bold font-poppins cursor-pointer bg-buyellow text-white transition">
                        Global Admin
                      </li>
                      <li className="p-2.5 flex justify-center items-center text-10 font-medium font-poppins cursor-pointer hover:bg-buyellow hover:bg-opacity-16 transition">
                        Branch Admin
                      </li>
                      <li className="p-2.5 flex justify-center items-center text-10 font-medium font-poppins cursor-pointer hover:bg-buyellow hover:bg-opacity-16 transition">
                        Internal Control
                      </li>
                    </ul>
                  </div>
                </td>
                <td>
                  <div className="relative w-fit m-auto">
                    <button
                      onClick={openMenu}
                      className={`text-12 font-medium rounded-lg p-1 h-8 w-24 bg-opacity-25 flex items-center justify-center select-none ${
                        row.status === "Active" ? "bg-greenSheen" : "bg-pigment"
                      }`}
                    >
                      {row.status}
                    </button>
                    <ul className="menu hidden rounded-lg shadow-menu z-20 py-2 mb-2 w-32 bg-white border-1 absolute top-2 right-3/4">
                      <li className="p-2.5 flex justify-center items-center text-12 font-bold font-poppins cursor-pointer bg-buyellow text-white transition">
                        Active
                      </li>
                      <li className="p-2.5 flex justify-center items-center text-12 font-medium font-poppins cursor-pointer hover:bg-buyellow hover:bg-opacity-16 transition">
                        Suspend User
                      </li>
                      <li className="p-2.5 flex justify-center items-center text-12 text-pigment font-medium font-poppins cursor-pointer hover:bg-buyellow hover:bg-opacity-16 transition">
                        Remove User
                      </li>
                    </ul>
                  </div>
                </td>
                <td>
                  <div className="relative">
                    <div
                      onClick={openMenu}
                      className=" bg-brightGray px-2.5 h-full min-h-36 rounded-lg flex items-center justify-between cursor-pointer"
                    >
                      <span className="text-10 pointer-events-none select-none">
                        {row.branch}
                      </span>
                      <svg
                        width="13"
                        height="25"
                        viewBox="0 0 13 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="pointer-events-none"
                      >
                        <path
                          d="M9.82967 9.15817C9.73295 9.27484 9.63622 9.33317 9.49114 9.33317C9.34605 9.33317 9.24933 9.27484 9.15261 9.15817L6.58943 6.0665L4.02625 9.15817C3.83281 9.3915 3.54263 9.3915 3.34919 9.15817C3.15574 8.92484 3.15574 8.57484 3.34919 8.3415L6.2509 4.8415C6.44434 4.60817 6.73451 4.60817 6.92796 4.8415L9.82967 8.3415C10.0231 8.57484 10.0231 8.92484 9.82967 9.15817Z"
                          fill="black"
                        />
                        <mask
                          id="mask0_1295_1313"
                          maskUnits="userSpaceOnUse"
                          x="3"
                          y="4"
                          width="7"
                          height="6"
                        >
                          <path
                            d="M9.82967 9.15817C9.73295 9.27484 9.63622 9.33317 9.49114 9.33317C9.34605 9.33317 9.24933 9.27484 9.15261 9.15817L6.58943 6.0665L4.02625 9.15817C3.83281 9.3915 3.54263 9.3915 3.34919 9.15817C3.15574 8.92484 3.15574 8.57484 3.34919 8.3415L6.2509 4.8415C6.44434 4.60817 6.73451 4.60817 6.92796 4.8415L9.82967 8.3415C10.0231 8.57484 10.0231 8.92484 9.82967 9.15817Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask0_1295_1313)">
                          <rect
                            x="0.786133"
                            width="11.6068"
                            height="14"
                            fill="#6E6B7B"
                          />
                        </g>
                        <path
                          d="M9.82967 16.6582L6.92796 20.1582C6.83124 20.2748 6.73452 20.3332 6.58943 20.3332C6.44434 20.3332 6.34762 20.2748 6.2509 20.1582L3.34919 16.6582C3.15574 16.4248 3.15574 16.0748 3.34919 15.8415C3.54263 15.6082 3.83281 15.6082 4.02625 15.8415L6.58943 18.9332L9.15261 15.8415C9.34605 15.6082 9.63622 15.6082 9.82967 15.8415C10.0231 16.0748 10.0231 16.4248 9.82967 16.6582Z"
                          fill="black"
                        />
                        <mask
                          id="mask1_1295_1313"
                          maskUnits="userSpaceOnUse"
                          x="3"
                          y="15"
                          width="7"
                          height="6"
                        >
                          <path
                            d="M9.82967 16.6582L6.92796 20.1582C6.83124 20.2748 6.73452 20.3332 6.58943 20.3332C6.44434 20.3332 6.34762 20.2748 6.2509 20.1582L3.34919 16.6582C3.15574 16.4248 3.15574 16.0748 3.34919 15.8415C3.54263 15.6082 3.83281 15.6082 4.02625 15.8415L6.58943 18.9332L9.15261 15.8415C9.34605 15.6082 9.63622 15.6082 9.82967 15.8415C10.0231 16.0748 10.0231 16.4248 9.82967 16.6582Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask1_1295_1313)">
                          <rect
                            x="0.786133"
                            y="11"
                            width="11.6068"
                            height="14"
                            fill="#BABFC7"
                          />
                        </g>
                      </svg>
                    </div>

                    <ul className="menu hidden rounded-lg shadow-menu z-20 py-2 mb-2 w-48 bg-white border-1 absolute top-1/2 right-1/2">
                      <li className="p-2.5 flex justify-center items-center text-10 font-bold font-poppins cursor-pointer bg-buyellow text-white transition">
                        Ikeja GRA Lagos, Nigeria
                      </li>
                      <li className="p-2.5 flex justify-center items-center text-10 font-medium font-poppins cursor-pointer hover:bg-buyellow hover:bg-opacity-16 transition">
                        Lekki Phase 1 Lagos, Nigeria
                      </li>
                      <li className="p-2.5 flex justify-center items-center text-10 font-medium font-poppins cursor-pointer hover:bg-buyellow hover:bg-opacity-16 transition">
                        Ikoyi Lagos, Nigeria
                      </li>
                      <li className="p-2.5 flex justify-center items-center text-10 font-medium font-poppins cursor-pointer hover:bg-buyellow hover:bg-opacity-16 transition">
                        Mogodo Lagos, Nigeria
                      </li>
                      <li className="p-2.5 flex justify-center items-center text-10 font-medium font-poppins cursor-pointer hover:bg-buyellow hover:bg-opacity-16 transition">
                        Abuja Wasu Lagos, Nigeria
                      </li>
                      <li className="p-2.5 flex justify-center items-center text-10 font-medium font-poppins cursor-pointer hover:bg-buyellow hover:bg-opacity-16 transition">
                        Ikeja GRA Lagos, Nigeria
                      </li>
                      <li className="p-2.5 flex justify-center items-center text-10 font-medium font-poppins cursor-pointer hover:bg-buyellow hover:bg-opacity-16 transition">
                        Ikeja GRA Lagos, Nigeria
                      </li>
                      <li className="p-2.5 flex justify-center items-center text-10 font-medium font-poppins cursor-pointer hover:bg-buyellow hover:bg-opacity-16 transition">
                        Ikeja GRA Lagos, Nigeria
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
            ))}
          </ScrolledTableBody>
        </ScrolledTable>
      )}
    </div>
  );
}

export default AssignRoles;
