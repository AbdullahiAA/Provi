import React, { useEffect, useState } from "react";
import useDropdown from "../../hooks/useDropdown";
import Modal from "../Modal/Modal";
import ScrolledTable, {
  ScrolledTableBody,
  ScrolledTableHead,
} from "../Tables/ScrolledTable";

function BranchStaff() {
  const { hideMenu, showMenu } = useDropdown();

  const [tableData, setTableData] = useState([]);
  const [removeUserInfo, setRemoveUserInfo] = useState(null);

  const [openRemoveModal, setOpenRemoveModal] = useState(false);
  const [openSuccessModal, setOpenSuccessModal] = useState(false);

  function changeStatus(userID, newStatus) {
    console.log(userID, newStatus);

    const newTableData = tableData.map((row) => {
      if (row?.id === userID) {
        return { ...row, status: newStatus };
      }

      return row;
    });

    setTableData(newTableData);
  }

  function removeUser(userID) {
    console.log(userID);

    const newTableData = tableData.filter((row) => {
      return row?.id !== userID;
    });

    setTableData(newTableData);
    setOpenRemoveModal(false);
    setOpenSuccessModal(true);
  }

  useEffect(() => {
    setTableData([
      {
        id: 1,
        fullName: " Femi Akulasah",
        dateCreated: "March 23, 2022",
        role: "Bank Staff",
        status: "Active",
      },
      {
        id: 2,
        fullName: "Modupe Femi Akulasah",
        dateCreated: "March 23, 2022",
        role: "Bank Staff",
        status: "Suspended",
      },
      {
        id: 3,
        fullName: "Modupe Femi Akulasah",
        dateCreated: "March 23, 2022",
        role: "Bank Staff",
        status: "Active",
      },
      {
        id: 4,
        fullName: "Modupe Femi Akulasah",
        dateCreated: "March 23, 2022",
        role: "Bank Staff",
        status: "Active",
      },
      {
        id: 5,
        fullName: "Modupe Femi Akulasah",
        dateCreated: "March 23, 2022",
        role: "Bank Staff",
        status: "Suspended",
      },
      {
        id: 6,
        fullName: "Modupe Femi Akulasah",
        dateCreated: "March 23, 2022",
        role: "Bank Staff",
        status: "Active",
      },
      {
        id: 7,
        fullName: "Modupe Femi Akulasah",
        dateCreated: "March 23, 2022",
        role: "Bank Staff",
        status: "Active",
      },
      {
        id: 8,
        fullName: "Modupe Femi Akulasah",
        dateCreated: "March 23, 2022",
        role: "Bank Staff",
        status: "Active",
      },
      {
        id: 9,
        fullName: "Modupe Femi Akulasah",
        dateCreated: "March 23, 2022",
        role: "Bank Staff",
        status: "Suspended",
      },
      {
        id: 10,
        fullName: "Modupe Femi Akulasah",
        dateCreated: "March 23, 2022",
        role: "Bank Staff",
        status: "Active",
      },
      {
        id: 11,
        fullName: "Modupe Femi Akulasah",
        dateCreated: "March 23, 2022",
        role: "Bank Staff",
        status: "Active",
      },
      {
        id: 12,
        fullName: "Modupe Femi Akulasah",
        dateCreated: "March 23, 2022",
        role: "Bank Staff",
        status: "Active",
      },
      {
        id: 13,
        fullName: "Modupe Femi Akulasah",
        dateCreated: "March 23, 2022",
        role: "Bank Staff",
        status: "Active",
      },
      {
        id: 14,
        fullName: "Modupe Femi Akulasah",
        dateCreated: "March 23, 2022",
        role: "Bank Staff",
        status: "Suspended",
      },
      {
        id: 15,
        fullName: "Modupe Femi Akulasah",
        dateCreated: "March 23, 2022",
        role: "Bank Staff",
        status: "Active",
      },
      {
        id: 16,
        fullName: "Modupe Femi Akulasah",
        dateCreated: "March 23, 2022",
        role: "Bank Staff",
        status: "Active",
      },
      {
        id: 17,
        fullName: "Modupe Femi Akulasah",
        dateCreated: "March 23, 2022",
        role: "Bank Staff",
        status: "Active",
      },
      {
        id: 18,
        fullName: "Modupe Femi Akulasah",
        dateCreated: "March 23, 2022",
        role: "Bank Staff",
        status: "Active",
      },
    ]);
  }, []);

  return tableData.length === 0 ? (
    <p className="text-lg my-3">No branch staff at the moment...</p>
  ) : (
    <>
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
                    onClick={showMenu}
                    className={`text-12 font-medium rounded-lg p-1 bg-opacity-25 w-28 h-8 select-none ${
                      row.status === "Active" ? "bg-greenSheen" : "bg-pigment"
                    }`}
                  >
                    {row.status}
                  </button>
                  <ul
                    onClick={hideMenu}
                    className="menu hidden opacity-0 h-0 rounded-lg shadow-menu z-20 py-2 mb-2 w-32 bg-white border-1 absolute top-2 right-3/4"
                  >
                    <li
                      onClick={() => changeStatus(row?.id, "Active")}
                      className={`p-2.5 flex justify-center items-center text-12 font-medium font-poppins cursor-pointer transition ${
                        row?.status === "Active"
                          ? "font-bold bg-buyellow text-white"
                          : "hover:text-black hover:bg-buyellow hover:bg-opacity-16"
                      }`}
                    >
                      Active
                    </li>
                    <li
                      onClick={() => changeStatus(row?.id, "Suspended")}
                      className={`p-2.5 flex justify-center items-center text-12 font-medium font-poppins cursor-pointer transition ${
                        row?.status === "Suspended"
                          ? "font-bold bg-buyellow text-white"
                          : "hover:text-black hover:bg-buyellow hover:bg-opacity-16"
                      }`}
                    >
                      Suspend User
                    </li>
                    <li
                      onClick={() => {
                        setRemoveUserInfo(row);
                        setOpenRemoveModal(true);
                      }}
                      className={`p-2.5 flex justify-center items-center text-12 text-pigment font-medium font-poppins cursor-pointer transition ${
                        row?.status === "Remove User"
                          ? "font-bold bg-buyellow text-white"
                          : "hover:text-pigment hover:bg-buyellow hover:bg-opacity-16"
                      }`}
                    >
                      Remove User
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
          ))}
        </ScrolledTableBody>
      </ScrolledTable>

      <Modal
        showModal={openRemoveModal}
        closeModal={() => setOpenRemoveModal(false)}
      >
        <div className="bg-white rounded-lg py-11 px-8 shadow-lg">
          <h3 className="text-xl font-semibold mb-5 text-center">
            Remove {removeUserInfo?.fullName} from the branch staffs?
          </h3>

          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => removeUser(removeUserInfo?.id)}
              type="submit"
              className=" py-2 px-6 rounded-lg bg-buyellow text-white font-semibold text-lg transition duration-500 hover:shadow-xl"
            >
              Yes
            </button>
            <button
              onClick={() => setOpenRemoveModal(false)}
              type="submit"
              className=" py-2 px-6 rounded-lg bg-buyellow text-white font-semibold text-lg transition duration-500 hover:shadow-xl"
            >
              No
            </button>
          </div>
        </div>
      </Modal>

      <Modal
        showModal={openSuccessModal}
        closeModal={() => setOpenSuccessModal(false)}
      >
        <div className="bg-white rounded-lg py-11 px-8 shadow-lg">
          <h3 className="text-xl font-semibold mb-5 text-center">
            User Removed
          </h3>

          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => setOpenSuccessModal(false)}
              type="submit"
              className=" py-2 px-6 rounded-lg bg-buyellow text-white font-semibold text-lg transition duration-500 hover:shadow-xl"
            >
              OK
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default BranchStaff;
