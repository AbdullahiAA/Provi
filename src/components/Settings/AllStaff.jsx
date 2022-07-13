import React, { useEffect, useState } from "react";
import ScrolledTable, {
  ScrolledTableBody,
  ScrolledTableHead,
} from "../Tables/ScrolledTable";

function AllStaff() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    setTableData([
      {
        fullName: "Modupe Femi Akulasah",
        dateCreated: "March 23, 2022",
        role: "Bank User",
      },
      {
        fullName: "Modupe Femi Akulasah",
        dateCreated: "March 23, 2022",
        role: "Bank User",
      },
      {
        fullName: "Modupe Femi Akulasah",
        dateCreated: "March 23, 2022",
        role: "Bank User",
      },
      {
        fullName: "Modupe Femi Akulasah",
        dateCreated: "March 23, 2022",
        role: "Bank User",
      },
      {
        fullName: "Modupe Femi Akulasah",
        dateCreated: "March 23, 2022",
        role: "Bank User",
      },
      {
        fullName: "Modupe Femi Akulasah",
        dateCreated: "March 23, 2022",
        role: "Bank User",
      },
      {
        fullName: "Modupe Femi Akulasah",
        dateCreated: "March 23, 2022",
        role: "Bank User",
      },
      {
        fullName: "Modupe Femi Akulasah",
        dateCreated: "March 23, 2022",
        role: "Bank User",
      },
      {
        fullName: "Modupe Femi Akulasah",
        dateCreated: "March 23, 2022",
        role: "Bank User",
      },
      {
        fullName: "Modupe Femi Akulasah",
        dateCreated: "March 23, 2022",
        role: "Bank User",
      },
      {
        fullName: "Modupe Femi Akulasah",
        dateCreated: "March 23, 2022",
        role: "Bank User",
      },
      {
        fullName: "Modupe Femi Akulasah",
        dateCreated: "March 23, 2022",
        role: "Bank User",
      },
      {
        fullName: "Modupe Femi Akulasah",
        dateCreated: "March 23, 2022",
        role: "Bank User",
      },
      {
        fullName: "Modupe Femi Akulasah",
        dateCreated: "March 23, 2022",
        role: "Bank User",
      },
      {
        fullName: "Modupe Femi Akulasah",
        dateCreated: "March 23, 2022",
        role: "Bank User",
      },
      {
        fullName: "Modupe Femi Akulasah",
        dateCreated: "March 23, 2022",
        role: "Bank User",
      },
      {
        fullName: "Modupe Femi Akulasah",
        dateCreated: "March 23, 2022",
        role: "Bank User",
      },
      {
        fullName: "Modupe Femi Akulasah",
        dateCreated: "March 23, 2022",
        role: "Bank User",
      },
    ]);
  }, []);

  return tableData.length === 0 ? (
    <p className="text-centser text-lg my-3">No staff at the moment...</p>
  ) : (
    <ScrolledTable>
      <ScrolledTableHead>
        <th>Full Name</th>
        <th>Date Created</th>
        <th>Roles</th>
        <th>Add Staff</th>
      </ScrolledTableHead>

      <ScrolledTableBody>
        {tableData?.map((row, key) => (
          <tr key={key}>
            <td>{row.fullName}</td>
            <td className="first-letter:underline">{row.dateCreated}</td>
            <td className="underline">{row.role}</td>
            <td className="flex items-center justify-center">
              <button className="text-13 text-white font-semibold rounded-3xl py-2 px-7 bg-buyellow select-none transition hover:bg-opacity-50 hover:text-textc">
                Add User
              </button>
            </td>
          </tr>
        ))}
      </ScrolledTableBody>
    </ScrolledTable>
  );
}

export default AllStaff;
