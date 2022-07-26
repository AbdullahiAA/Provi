import React, { useEffect, useState } from "react";
import useDropdown from "../../hooks/useDropdown";
import Modal from "../Modal/Modal";
import ScrolledTable, {
  ScrolledTableBody,
  ScrolledTableHead,
} from "../Tables/ScrolledTable";

function AssignRoles() {
  const { hideMenu, showMenu } = useDropdown();

  const [tableData, setTableData] = useState([]);
  const [branches, setBranches] = useState([]);
  const [removeUserInfo, setRemoveUserInfo] = useState(null);

  const [openRemoveModal, setOpenRemoveModal] = useState(false);
  const [openSuccessModal, setOpenSuccessModal] = useState(false);

  const [openNewBranchModal, setOpenNewBranchModal] = useState(true);

  function assignRole(userID, newRole) {
    console.log(userID, newRole);

    const newTableData = tableData.map((row) => {
      if (row?.id === userID) {
        return { ...row, role: newRole };
      }

      return row;
    });

    setTableData(newTableData);
  }

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

  function assignBranch(userID, newBranch) {
    console.log(userID, newBranch);

    const newTableData = tableData.map((row) => {
      if (row?.id === userID) {
        return { ...row, branch: newBranch };
      }

      return row;
    });

    setTableData(newTableData);
  }

  function handleAddNewBranch(e) {
    e.preventDefault();
  }

  useEffect(() => {
    setBranches([
      "Ikeja GRA Lagos, Nigeria",
      "Lekki Phase 1 Lagos, Nigeria",
      "Ikoyi Lagos, Nigeria",
      "Mogodo Lagos, Nigeria",
      "Abuja Wasu Lagos, Nigeria",
      "Ikeja GRA 1 Lagos, Nigeria",
      "Ikeja GRA 2 Lagos, Nigeria",
      "Ikeja GRA 3 Lagos, Nigeria",
    ]);
  }, []);

  useEffect(() => {
    setTableData([
      {
        id: 1,
        fullName: "Modupe Akulasah",
        email: "modepef.a@prov.cgi",
        role: "Global Admin",
        status: "Active",
        branch: "Ikeja GRA Lagos, Nigeria",
      },
      {
        id: 2,
        fullName: "Modupe Akulasah",
        email: "modepef.a@prov.cgi",
        role: "Global Admin",
        status: "Suspended",
        branch: "Ikeja GRA Lagos, Nigeria",
      },
      {
        id: 3,
        fullName: "Modupe Akulasah",
        email: "modepef.a@prov.cgi",
        role: "Global Admin",
        status: "Active",
        branch: "Ikeja GRA Lagos, Nigeria",
      },
      {
        id: 4,
        fullName: "Modupe Akulasah",
        email: "modepef.a@prov.cgi",
        role: "Global Admin",
        status: "Active",
        branch: "Ikeja GRA Lagos, Nigeria",
      },
      {
        id: 5,
        fullName: "Modupe Akulasah",
        email: "modepef.a@prov.cgi",
        role: "Branch Admin",
        status: "Suspended",
        branch: "Ikeja GRA Lagos, Nigeria",
      },
      {
        id: 6,
        fullName: "Modupe Akulasah",
        email: "modepef.a@prov.cgi",
        role: "Branch Admin",
        status: "Active",
        branch: "Ikeja GRA Lagos, Nigeria",
      },
      {
        id: 7,
        fullName: "Modupe Akulasah",
        email: "modepef.a@prov.cgi",
        role: "Branch Admin",
        status: "Suspended",
        branch: "Ikeja GRA Lagos, Nigeria",
      },
      {
        id: 8,
        fullName: "Modupe Akulasah",
        email: "modepef.a@prov.cgi",
        role: "Internal Control",
        status: "Suspended",
        branch: "Ikeja GRA Lagos, Nigeria",
      },
      {
        id: 9,
        fullName: "Modupe Akulasah",
        email: "modepef.a@prov.cgi",
        role: "Global Admin",
        status: "Active",
        branch: "Ikeja GRA Lagos, Nigeria",
      },
      {
        id: 10,
        fullName: "Modupe Akulasah",
        email: "modepef.a@prov.cgi",
        role: "Internal Control",
        status: "Active",
        branch: "Ikeja GRA Lagos, Nigeria",
      },
    ]);
  }, []);

  return (
    <>
      {tableData.length === 0 ? (
        <p className="text-lg my-3">No user at the moment...</p>
      ) : (
        <div>
          <div className="flex items-center justify-between gap-4 mb-1">
            <div className="relative lg:max-w-lg flex-1">
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

            <div className="flex items-center gap-4">
              <button
                onClick={() => setOpenNewBranchModal(true)}
                className="flex gap-3 items-center py-3 px-4 font-semibold bg-white rounded-xl shadow-2xl transition duration-500 hover:scale-105"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.65723 4.32373V15.4071"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.11548 9.86523H15.1988"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <span className="text-textc text-sm">Add new branch</span>
              </button>
              <button className="flex gap-3 items-center py-3 px-4 font-semibold bg-white rounded-xl shadow-2xl transition duration-500 hover:scale-105">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>

                <span className="text-textc text-sm">
                  Upload list of branches
                </span>
              </button>
            </div>
          </div>

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
                  <td>{row?.fullName}</td>
                  <td>{row?.email}</td>
                  <td>{row?.role}</td>
                  <td>
                    <div className="relative w-fit m-auto">
                      <svg
                        className="cursor-pointer"
                        onClick={showMenu}
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
                      <ul
                        onClick={hideMenu}
                        className="menu hidden h-0 opacity-0 rounded-lg shadow-menu z-20 py-2 mb-2 w-32 bg-white border-1 absolute top-0 right-8"
                      >
                        <li
                          onClick={() => assignRole(row?.id, "Global Admin")}
                          className={`p-2.5 flex justify-center items-center text-10 font-medium font-poppins cursor-pointer transition ${
                            row?.role === "Global Admin"
                              ? "font-bold bg-buyellow text-white"
                              : "hover:text-black hover:bg-buyellow hover:bg-opacity-16"
                          }`}
                        >
                          Global Admin
                        </li>
                        <li
                          onClick={() => assignRole(row?.id, "Branch Admin")}
                          className={`p-2.5 flex justify-center items-center text-10 font-medium font-poppins cursor-pointer transition ${
                            row?.role === "Branch Admin"
                              ? "font-bold bg-buyellow text-white"
                              : "hover:text-black hover:bg-buyellow hover:bg-opacity-16"
                          }`}
                        >
                          Branch Admin
                        </li>
                        <li
                          onClick={() =>
                            assignRole(row?.id, "Internal Control")
                          }
                          className={`p-2.5 flex justify-center items-center text-10 font-medium font-poppins cursor-pointer transition ${
                            row?.role === "Internal Control"
                              ? "font-bold bg-buyellow text-white"
                              : "hover:text-black hover:bg-buyellow hover:bg-opacity-16"
                          }`}
                        >
                          Internal Control
                        </li>
                      </ul>
                    </div>
                  </td>
                  <td>
                    <div className="relative w-fit m-auto">
                      <button
                        onClick={showMenu}
                        className={`text-12 font-medium rounded-lg p-1 h-8 w-24 bg-opacity-25 flex items-center justify-center select-none ${
                          row?.status === "Active"
                            ? "bg-greenSheen"
                            : "bg-pigment"
                        }`}
                      >
                        {row?.status}
                      </button>
                      <ul
                        onClick={hideMenu}
                        className="menu hidden h-0 opacity-0 rounded-lg shadow-menu z-20 py-2 mb-2 w-32 bg-white border-1 absolute top-2 right-3/4"
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
                  <td>
                    <div className="relative">
                      <div
                        onClick={showMenu}
                        className=" bg-brightGray px-2.5 h-full min-h-36 rounded-lg flex items-center justify-between cursor-pointer"
                      >
                        <span className="text-10 pointer-events-none select-none">
                          {row?.branch}
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

                      <ul
                        onClick={hideMenu}
                        className="menu hidden opacity-0 h-0 rounded-lg shadow-menu z-20 py-2 mb-2 w-48 bg-white border-1 absolute top-1/2 right-1/2"
                      >
                        {branches?.map((branch, key) => (
                          <li
                            key={key}
                            onClick={() => assignBranch(row?.id, branch)}
                            className={`p-2.5 flex justify-center items-center text-10 font-medium font-poppins cursor-pointer transition ${
                              row?.branch === branch
                                ? "bg-buyellow text-white font-bold"
                                : "hover:text-black hover:bg-buyellow hover:bg-opacity-16"
                            }`}
                          >
                            {branch}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </td>
                </tr>
              ))}
            </ScrolledTableBody>
          </ScrolledTable>
        </div>
      )}

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

      <Modal
        showModal={openNewBranchModal}
        closeModal={() => setOpenNewBranchModal(false)}
      >
        <div className="bg-white rounded-lg py-11 px-8 shadow-lg relative">
          <h3 className="text-xl font-bold mb-5">Branch Details</h3>

          <svg
            className="absolute top-4 right-4 cursor-pointer"
            onClick={() => setOpenNewBranchModal(false)}
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.25 4.75L4.75 14.25"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.75 4.75L14.25 14.25"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <form onSubmit={handleAddNewBranch} className="mb-6">
            <div className="flex flex-col gap-2 mb-2">
              <label
                htmlFor="branchName"
                className="pl-3 text-lgray text-12 font-bold uppercase"
              >
                Branch Name
              </label>
              <input
                type="text"
                placeholder=""
                id="branchName"
                className="py-3 px-4 rounded-lg outline-0 border border-bgray bg-ibgray text-sm"
              />
            </div>
            <div className="flex flex-col gap-2 mb-2">
              <label
                htmlFor="branchAddr"
                className="pl-3 text-lgray text-12 font-bold uppercase"
              >
                Branch Address
              </label>
              <input
                type="text"
                placeholder=""
                id="branchAddr"
                className="py-3 px-4 rounded-lg outline-0 border border-bgray bg-ibgray text-sm"
              />
            </div>
            <div className="flex flex-col gap-2 mb-2">
              <label
                htmlFor="branchState"
                className="pl-3 text-lgray text-12 font-bold uppercase"
              >
                Branch State
              </label>
              <input
                type="text"
                placeholder=""
                id="branchState"
                className="py-3 px-4 rounded-lg outline-0 border border-bgray bg-ibgray text-sm"
              />
            </div>

            <div className="flex items-center justify-end mt-4">
              <button
                onClick={() => setOpenNewBranchModal(false)}
                type="submit"
                className="w-32 py-2 px-6 rounded-lg bg-buyellow text-white font-semibold transition duration-500 shadow-lg hover:shadow-2xl"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
}

export default AssignRoles;
