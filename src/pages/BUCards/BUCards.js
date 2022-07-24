import React, { useState } from "react";
import PageLayout from "../../components/PageLayout/PageLayout";
import cardImg from "../../assets/CardImg.png";
import Modal from "../../components/Modal/Modal";

function BUCards() {
  const [openModal, setOpenModal] = useState(false);

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
    <>
      <PageLayout pageTitle="Cards">
        <div>
          <h2 className="text-xl lg:text-2xl font-bold my-10">
            <span className="text-buyellow">Providus</span> Banking Card Queue
          </h2>
        </div>

        <div className="flex gap-4 mb-6">
          <div className="text-center max-w-xs min-w-max rounded-lg bg-siblack text-white p-4 lg:px-7 w-full text-sm lg:text-base">
            <span className="pointer-events-none select-none">
              Ikeja GRA Lagos, Nigeria
            </span>
          </div>

          <div className="relative w-full lg:mr-20">
            <input
              type="text"
              placeholder="Search by Name"
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

          <button className="uppercase w-52 p-4 lg:px-7 text-sm lg:text-base text-white font-semibold rounded-lg bg-buyellow shadow-md hover:shadow-xl active:shadow-sm transition">
            Print
          </button>
        </div>

        <div className="rounded-lg py-4 px-2 bg-white grid grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-4 lg:gap-y-7">
          {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((r, key) => (
            <div className="flex gap-1 w-full" key={key}>
              <div>
                <img className="w-full" src={cardImg} alt="Printed card" />
              </div>

              <div className="relative">
                <svg
                  className="cursor-pointer"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <ul className="py-3 w-max rounded-lg bg-white shadow-menu absolute right-3/4 top-3">
                  <li
                    className="py-2 px-4 flex gap-2 items-center cursor-pointer hover:bg-buyellow hover:bg-opacity-25"
                    onClick={() => setOpenModal(true)}
                  >
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 19 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.70831 3.16699H3.16665C2.74672 3.16699 2.34399 3.33381 2.04706 3.63074C1.75013 3.92767 1.58331 4.3304 1.58331 4.75033V15.8337C1.58331 16.2536 1.75013 16.6563 2.04706 16.9532C2.34399 17.2502 2.74672 17.417 3.16665 17.417H14.25C14.6699 17.417 15.0726 17.2502 15.3696 16.9532C15.6665 16.6563 15.8333 16.2536 15.8333 15.8337V10.292"
                        stroke="#2F444F"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M14.6458 1.97918C14.9608 1.66424 15.3879 1.4873 15.8333 1.4873C16.2787 1.4873 16.7059 1.66424 17.0208 1.97918C17.3358 2.29413 17.5127 2.72128 17.5127 3.16668C17.5127 3.61208 17.3358 4.03924 17.0208 4.35418L9.49998 11.875L6.33331 12.6667L7.12498 9.50002L14.6458 1.97918Z"
                        stroke="#2F444F"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                    <span className="text-10">Edit Name</span>
                  </li>
                  <li className="py-2 px-4 flex gap-2 items-center cursor-pointer hover:bg-buyellow hover:bg-opacity-25">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 19 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.75 7.12467V1.58301H14.25V7.12467"
                        stroke="#2F444F"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4.74998 14.25H3.16665C2.74672 14.25 2.34399 14.0832 2.04706 13.7863C1.75013 13.4893 1.58331 13.0866 1.58331 12.6667V8.70833C1.58331 8.28841 1.75013 7.88568 2.04706 7.58875C2.34399 7.29182 2.74672 7.125 3.16665 7.125H15.8333C16.2532 7.125 16.656 7.29182 16.9529 7.58875C17.2498 7.88568 17.4166 8.28841 17.4166 8.70833V12.6667C17.4166 13.0866 17.2498 13.4893 16.9529 13.7863C16.656 14.0832 16.2532 14.25 15.8333 14.25H14.25"
                        stroke="#2F444F"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M14.25 11.083H4.75V17.4163H14.25V11.083Z"
                        stroke="#2F444F"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                    <span className="text-10">Print Card</span>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </PageLayout>

      <Modal showModal={openModal} closeModal={() => setOpenModal(false)}>
        <form className="bg-white rounded-lg py-11 px-8 shadow-lg">
          <h3 className="text-xl font-semibold mb-5">
            Edit Name on card for printing...
          </h3>

          <input
            type="text"
            placeholder="First Name"
            className="w-full py-4 px-6 bg-platinum text-romanSilver font-semibold mb-8 border-0 text-lg"
          />

          <button
            type="submit"
            className="w-full py-4 px-6 bg-buyellow text-white font-semibold text-lg transition hover:shadow-lg"
          >
            Request Change Name
          </button>
        </form>
      </Modal>
    </>
  );
}

export default BUCards;
