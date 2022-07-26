import React from "react";
import StatsCard from "../StatsCard/StatsCard";

function CardInfo() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div>
      <StatsCard data={[{ title: "Your Blank Card In Stock", total: "73" }]} />

      <div>
        <h4 className="mb-4 text-md text-lblack text-lg font-semibold">
          Request for Blank Cards
        </h4>

        <form
          className="flex items-center gap-4 lg:gap-6"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Number of blank cards"
            className="rounded-lg bg-ibgray py-3 px-4 lg:px-7 border-bgray text-sm lg:text-base"
          />

          <button
            type="submit"
            className="rounded-lg py-3 px-4 lg:px-6 text-sm lg:text-base font-semibold transition text-white bg-buyellow shadow-btn hover:text-textc hover:bg-opacity-16"
          >
            Send Request
          </button>

          {/* Show this on successful form submission*/}
          <div className="flex gap-2 items-center justify-center">
            <svg
              width="31"
              height="31"
              viewBox="0 0 31 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.5 30.5C23.7843 30.5 30.5 23.7843 30.5 15.5C30.5 7.21573 23.7843 0.5 15.5 0.5C7.21573 0.5 0.5 7.21573 0.5 15.5C0.5 23.7843 7.21573 30.5 15.5 30.5Z"
                fill="white"
                stroke="#E7E5E5"
              />
              <path
                d="M23 9L12 20L7 15"
                stroke="#34CDA7"
                stokeWidth="2"
                stokeLinecap="round"
                stokeLinejoin="round"
              />
            </svg>

            <p className="text-sm font-medium text-independence">
              Request has been sent
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CardInfo;
