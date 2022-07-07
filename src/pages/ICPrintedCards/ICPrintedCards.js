import React from "react";
import PageLayout from "../../components/PageLayout/PageLayout";
import cardImg from "../../assets/CardImg.png";

function ICPrintedCards() {
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

  return (
    <PageLayout pageTitle="Cards">
      <div>
        <h2 className="text-xl lg:text-2xl font-bold my-10">
          <span className="text-buyellow">Providus</span> Banking Card Queue
          (Printed)
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-4 lg:flex lg:gap-2 mb-6">
        <div className="relative">
          <div
            onClick={openMenu}
            className="min-w-max rounded-lg bg-brightGray p-4 lg:px-7 w-full text-sm lg:text-base flex items-center justify-between gap-4 cursor-pointer"
          >
            <span className="pointer-events-none select-none">
              Ikeja GRA Lagos, Nigeria
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
                <rect x="0.786133" width="11.6068" height="14" fill="#6E6B7B" />
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

          <ul className="menu hidden rounded-lg shadow-menu z-20 py-2 mb-2 w-full bg-white border-1 absolute top-full rigfht-1/2">
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

        <div className="relative">
          <input
            type="text"
            placeholder="Search by Name / Email"
            className="min-w-max rounded-lg bg-brightGray p-4 lg:px-7 w-full border-0 text-sm lg:text-base"
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

        <div className="col-span-2 flex-1 flex items-center gap-2">
          <span>Filter By:</span>

          <div className="flex-1">
            <input
              type="date"
              placeholder="Search by Name / Email"
              className="appearance-none min-w-max rounded-lg bg-brightGray p-4 lg:px-7 w-full border-0 text-sm lg:text-base"
            />
          </div>

          <span> - </span>

          <div className="flex-1">
            <input
              type="date"
              placeholder="Search by Name / Email"
              className="appearance-none min-w-max rounded-lg bg-brightGray p-4 lg:px-7 w-full border-0 text-sm lg:text-base"
            />
          </div>
        </div>
      </div>

      <div className="rounded-lg py-4 px-2 bg-white grid grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-4 lg:gap-x-10 lg:gap-y-7">
        <img className="w-full" src={cardImg} alt="Printed card" />
        <img className="w-full" src={cardImg} alt="Printed card" />
        <img className="w-full" src={cardImg} alt="Printed card" />
        <img className="w-full" src={cardImg} alt="Printed card" />
        <img className="w-full" src={cardImg} alt="Printed card" />
        <img className="w-full" src={cardImg} alt="Printed card" />
        <img className="w-full" src={cardImg} alt="Printed card" />
        <img className="w-full" src={cardImg} alt="Printed card" />
        <img className="w-full" src={cardImg} alt="Printed card" />
        <img className="w-full" src={cardImg} alt="Printed card" />
        <img className="w-full" src={cardImg} alt="Printed card" />
        <img className="w-full" src={cardImg} alt="Printed card" />
        <img className="w-full" src={cardImg} alt="Printed card" />
        <img className="w-full" src={cardImg} alt="Printed card" />
        <img className="w-full" src={cardImg} alt="Printed card" />
        <img className="w-full" src={cardImg} alt="Printed card" />
        <img className="w-full" src={cardImg} alt="Printed card" />
        <img className="w-full" src={cardImg} alt="Printed card" />
        <img className="w-full" src={cardImg} alt="Printed card" />
        <img className="w-full" src={cardImg} alt="Printed card" />
      </div>
    </PageLayout>
  );
}

export default ICPrintedCards;
