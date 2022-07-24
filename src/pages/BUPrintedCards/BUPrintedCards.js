import React, { useEffect, useState } from "react";
import PageLayout from "../../components/PageLayout/PageLayout";
import cardImg from "../../assets/CardImg.png";

function BUPrintedCards() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards([
      {
        id: 1,
        cardNumber: "1234567890",
        holdersName: "Tejiri Meek",
      },
      {
        id: 2,
        cardNumber: "1234567890",
        holdersName: "Tejiri Meek",
      },
      {
        id: 3,
        cardNumber: "1234567890",
        holdersName: "Tejiri Meek",
      },
      {
        id: 4,
        cardNumber: "1234567890",
        holdersName: "Tejiri Meek",
      },
      {
        id: 5,
        cardNumber: "1234567890",
        holdersName: "Tejiri Meek",
      },
      {
        id: 6,
        cardNumber: "1234567890",
        holdersName: "Tejiri Meek",
      },
      {
        id: 7,
        cardNumber: "1234567890",
        holdersName: "Tejiri Meek",
      },
      {
        id: 8,
        cardNumber: "1234567890",
        holdersName: "Tejiri Meek",
      },
      {
        id: 9,
        cardNumber: "1234567890",
        holdersName: "Tejiri Meek",
      },
      {
        id: 10,
        cardNumber: "1234567890",
        holdersName: "Tejiri Meek",
      },
      {
        id: 11,
        cardNumber: "1234567890",
        holdersName: "Tejiri Meek",
      },
      {
        id: 12,
        cardNumber: "1234567890",
        holdersName: "Tejiri Meek",
      },
      {
        id: 13,
        cardNumber: "1234567890",
        holdersName: "Tejiri Meek",
      },
      {
        id: 14,
        cardNumber: "1234567890",
        holdersName: "Tejiri Meek",
      },
      {
        id: 15,
        cardNumber: "1234567890",
        holdersName: "Tejiri Meek",
      },
      {
        id: 16,
        cardNumber: "1234567890",
        holdersName: "Tejiri Meek",
      },
    ]);
  }, []);

  return (
    <PageLayout pageTitle="Cards">
      <div>
        <h2 className="text-xl lg:text-2xl font-bold my-10">
          <span className="text-buyellow">Providus</span> Banking Card Queue
          (Printed)
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-4 lg:flex lg:gap-2 mb-6">
        <div className="relative col-span-2">
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

        <div className="col-span-2 flex-1 flex items-center gap-2 lg:mr-20">
          <span>Filter By:</span>

          <div className="flex-1">
            <input
              type="date"
              className="appearance-none min-w-max rounded-lg bg-brightGray p-4 lg:px-7 w-full border-0 text-sm lg:text-base"
            />
          </div>

          <span> - </span>

          <div className="flex-1">
            <input
              type="date"
              className="appearance-none min-w-max rounded-lg bg-brightGray p-4 lg:px-7 w-full border-0 text-sm lg:text-base"
            />
          </div>
        </div>

        <button className="w-fit uppercase p-4 px-7 text-sm lg:text-base text-white font-semibold rounded-lg bg-buyellow shadow-md hover:shadow-xl active:shadow-sm transition">
          Print
        </button>
      </div>

      <div className="rounded-lg py-4 px-2 bg-white grid grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-4 lg:gap-y-7">
        {cards?.map((card, key) => (
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

              <ul className="py-1 w-max rounded-lg bg-white shadow-menu absolute right-3/4 top-3">
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

                  <span className="text-10">Re-Print Card</span>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}

export default BUPrintedCards;
