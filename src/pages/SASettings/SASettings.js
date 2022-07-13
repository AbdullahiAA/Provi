import React, { useEffect, useState } from "react";
import PageLayout from "../../components/PageLayout/PageLayout";
import ScrolledTable, {
  ScrolledTableBody,
  ScrolledTableHead,
} from "../../components/Tables/ScrolledTable";

function SASettings() {
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
        fullName: "Modupe Femi Akulasah",
        email: "modepef.a@providus.cgi",
        status: "Active",
        lastActive: "22/05/2022",
        role: "Global Admin",
      },
      {
        fullName: "Modupe Femi Akulasah",
        email: "modepef.a@providus.cgi",
        status: "Active",
        lastActive: "22/05/2022",
        role: "Global Admin",
      },
      {
        fullName: "Modupe Femi Akulasah",
        email: "modepef.a@providus.cgi",
        status: "Active",
        lastActive: "22/05/2022",
        role: "Global Admin",
      },
      {
        fullName: "Modupe Femi Akulasah",
        email: "modepef.a@providus.cgi",
        status: "Active",
        lastActive: "22/05/2022",
        role: "Global Admin",
      },
      {
        fullName: "Modupe Femi Akulasah",
        email: "modepef.a@providus.cgi",
        status: "Active",
        lastActive: "22/05/2022",
        role: "Global Admin",
      },
      {
        fullName: "Modupe Femi Akulasah",
        email: "modepef.a@providus.cgi",
        status: "Active",
        lastActive: "22/05/2022",
        role: "Global Admin",
      },
      {
        fullName: "Modupe Femi Akulasah",
        email: "modepef.a@providus.cgi",
        status: "Active",
        lastActive: "22/05/2022",
        role: "Global Admin",
      },
      {
        fullName: "Modupe Femi Akulasah",
        email: "modepef.a@providus.cgi",
        status: "Active",
        lastActive: "22/05/2022",
        role: "Global Admin",
      },
      {
        fullName: "Modupe Femi Akulasah",
        email: "modepef.a@providus.cgi",
        status: "Active",
        lastActive: "22/05/2022",
        role: "Global Admin",
      },
      {
        fullName: "Modupe Femi Akulasah",
        email: "modepef.a@providus.cgi",
        status: "Active",
        lastActive: "22/05/2022",
        role: "Global Admin",
      },
    ]);
  }, []);

  return (
    <PageLayout pageTitle="Settings">
      <div>
        <h2 className="text-xl lg:text-2xl font-bold my-10">
          <span className="text-buyellow">Providus</span> Assign Role Settings
        </h2>
      </div>

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
            <th>Status</th>
            <th>Last Active</th>
            <th>Role</th>
            <th>Assign Role</th>
          </ScrolledTableHead>

          <ScrolledTableBody>
            {tableData?.map((row, key) => (
              <tr key={key}>
                <td>{row.fullName}</td>
                <td className="underline">{row.email}</td>
                <td className="first-letter:underline">{row.status}</td>
                <td>{row.lastActive}</td>
                <td className="underline">{row.role}</td>
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
                        Internal Control
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
            ))}
          </ScrolledTableBody>
        </ScrolledTable>
      )}
    </PageLayout>
  );
}

export default SASettings;
