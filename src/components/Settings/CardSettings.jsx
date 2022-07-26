import React from "react";
import StatsCard from "../StatsCard/StatsCard";

function CardSettings() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="-mt-5">
      <StatsCard
        data={[
          { title: "Current Bank Card In Stock", total: "20,000" },
          { title: "Total Branch", total: "10" },
        ]}
      />

      <div className="flex flex-col lg:grid grid-cols-2 gap-x-20 gap-y-5 pb-8 lg:w-11/12">
        <form onSubmit={handleSubmit} className="flex gap-5 items-center">
          <p className="text-base lg:text-lg font-medium flex-1">
            Minimun Re-Order Level
          </p>
          <input
            type="number"
            className="rounded-lg py-3 px-4 lg:py-4 lg:px-4 w-20 font-semibold bg-platinum border-sgray placeholder:text-sgry text-sm lg:text-base"
            placeholder="50"
          />
          <button
            type="submit"
            className="rounded-lg font-semibold bg-buyellow text-white py-3 px-4 lg:py-4 lg:px-6 text-sm lg:text-base transition duration-500 hover:shadow-lg"
          >
            Update
          </button>
        </form>
        <form onSubmit={handleSubmit} className="flex gap-5 items-center">
          <p className="text-base lg:text-lg font-medium flex-1">
            Update Blank Card In The Bank
          </p>
          <input
            type="number"
            className="rounded-lg py-3 px-4 lg:py-4 lg:px-4 w-20 font-semibold bg-platinum border-sgray placeholder:text-sgry text-sm lg:text-base"
            placeholder="30000"
          />
          <button
            type="submit"
            className="rounded-lg font-semibold bg-buyellow text-white py-3 px-4 lg:py-4 lg:px-6 text-sm lg:text-base transition duration-500 hover:shadow-lg"
          >
            Update
          </button>
        </form>
        <form onSubmit={handleSubmit} className="flex gap-5 items-center">
          <p className="text-base lg:text-lg font-medium flex-1">
            Standard Request Limit
          </p>
          <input
            type="number"
            className="rounded-lg py-3 px-4 lg:py-4 lg:px-4 w-20 font-semibold bg-platinum border-sgray placeholder:text-sgry text-sm lg:text-base"
            placeholder="300"
          />
          <button
            type="submit"
            className="rounded-lg font-semibold bg-buyellow text-white py-3 px-4 lg:py-4 lg:px-6 text-sm lg:text-base transition duration-500 hover:shadow-lg"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default CardSettings;
