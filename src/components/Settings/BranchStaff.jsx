import React, { useEffect, useState } from "react";
import ScrolledTable, {
  ScrolledTableBody,
  ScrolledTableHead,
} from "../Tables/ScrolledTable";

function BranchStaff() {
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
        dateCreated: "March 23, 2022",
        role: "Bank Staff",
        status: "Active",
      },
      {
        fullName: "Modupe Femi Akulasah",
        dateCreated: "March 23, 2022",
        role: "Bank Staff",
        status: "Suspended",
      },
      {
        fullName: "Modupe Femi Akulasah",
        dateCreated: "March 23, 2022",
        role: "Bank Staff",
        status: "Active",
      },
      {
        fullName: "Modupe Femi Akulasah",
        dateCreated: "March 23, 2022",
        role: "Bank Staff",
        status: "Active",
      },
      {
        fullName: "Modupe Femi Akulasah",
        dateCreated: "March 23, 2022",
        role: "Bank Staff",
        status: "Suspended",
      },
      {
        fullName: "Modupe Femi Akulasah",
        dateCreated: "March 23, 2022",
        role: "Bank Staff",
        status: "Active",
      },
      {
        fullName: "Modupe Femi Akulasah",
        dateCreated: "March 23, 2022",
        role: "Bank Staff",
        status: "Active",
      },
      {
        fullName: "Modupe Femi Akulasah",
        dateCreated: "March 23, 2022",
        role: "Bank Staff",
        status: "Active",
      },
      {
        fullName: "Modupe Femi Akulasah",
        dateCreated: "March 23, 2022",
        role: "Bank Staff",
        status: "Suspended",
      },
      {
        fullName: "Modupe Femi Akulasah",
        dateCreated: "March 23, 2022",
        role: "Bank Staff",
        status: "Active",
      },
      {
        fullName: "Modupe Femi Akulasah",
        dateCreated: "March 23, 2022",
        role: "Bank Staff",
        status: "Active",
      },
      {
        fullName: "Modupe Femi Akulasah",
        dateCreated: "March 23, 2022",
        role: "Bank Staff",
        status: "Active",
      },
      {
        fullName: "Modupe Femi Akulasah",
        dateCreated: "March 23, 2022",
        role: "Bank Staff",
        status: "Active",
      },
      {
        fullName: "Modupe Femi Akulasah",
        dateCreated: "March 23, 2022",
        role: "Bank Staff",
        status: "Suspended",
      },
      {
        fullName: "Modupe Femi Akulasah",
        dateCreated: "March 23, 2022",
        role: "Bank Staff",
        status: "Active",
      },
      {
        fullName: "Modupe Femi Akulasah",
        dateCreated: "March 23, 2022",
        role: "Bank Staff",
        status: "Active",
      },
      {
        fullName: "Modupe Femi Akulasah",
        dateCreated: "March 23, 2022",
        role: "Bank Staff",
        status: "Active",
      },
      {
        fullName: "Modupe Femi Akulasah",
        dateCreated: "March 23, 2022",
        role: "Bank Staff",
        status: "Active",
      },
    ]);
  }, []);

  return tableData.length === 0 ? (
    <p className="text-centser text-lg my-3">
      No branch staff at the moment...
    </p>
  ) : (
    <ScrolledTable>
      <ScrolledTableHead>
        <th>Full Name</th>
        <th>Date Created</th>
        <th>Roles</th>
        <th>status</th>
      </ScrolledTableHead>

      <ScrolledTableBody>
        {tableData?.map((row, key) => (
          <tr key={key}>
            <td>{row.fullName}</td>
            <td className="first-letter:underline">{row.dateCreated}</td>
            <td className="underline">{row.role}</td>
            <td className="flex items-center justify-center">
              <div className="relative w-fit m-auto">
                <button
                  onClick={openMenu}
                  className={`text-12 font-medium rounded-lg p-1 bg-opacity-25 w-28 h-8 select-none ${
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
          </tr>
        ))}
      </ScrolledTableBody>
    </ScrolledTable>
  );
}

export default BranchStaff;
