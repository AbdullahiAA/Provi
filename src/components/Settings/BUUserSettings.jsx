import React from "react";

function BUUserSettings() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div>
      <h2 className="text-xl lg:text-2xl font-bold mt-10 mb-6">User Details</h2>

      <form onSubmit={handleSubmit} className="mb-6">
        <div className="grid grid-cols-2 gap-8 lg:gap-12 max-w-3xl mb-6">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="fullName"
              className="pl-3 text-lgray text-12 font-semibold uppercase"
            >
              Full Name
            </label>
            <input
              type="text"
              placeholder="Jones Ferdinard"
              id="fullName"
              className="py-3 px-4 rounded-lg outline-0 border border-bgray bg-ibgray text-sm placeholder:text-independence placeholder:text-opacity-40"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="pl-3 text-lgray text-12 font-semibold uppercase"
            >
              Email
            </label>
            <input
              type="email"
              placeholder="jones.ferdinard@providus.com.ng"
              id="email"
              className="py-3 px-4 rounded-lg outline-0 border border-bgray bg-ibgray text-sm placeholder:text-independence placeholder:text-opacity-40"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 lg:gap-12 max-w-3xl mb-6">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="phone"
              className="pl-3 text-lgray text-12 font-semibold uppercase"
            >
              Phone
            </label>
            <input
              type="tel"
              placeholder="09817717171"
              id="phone"
              className="py-3 px-4 rounded-lg outline-0 border border-bgray bg-ibgray text-sm placeholder:text-independence placeholder:text-opacity-40"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="role"
              className="pl-3 text-lgray text-12 font-semibold uppercase"
            >
              Role
            </label>
            <input
              type="text"
              placeholder="Bank User"
              id="role"
              className="py-3 px-4 rounded-lg outline-0 border border-bgray bg-ibgray text-sm placeholder:text-independence placeholder:text-opacity-40 cursor-not-allowed"
              disabled
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 lg:gap-12 max-w-3xl mb-6">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="branch"
              className="pl-3 text-lgray text-12 font-semibold uppercase"
            >
              Branch
            </label>
            <input
              type="text"
              placeholder="Mogodo Lagos, Nigeria"
              id="branch"
              className="py-3 px-4 rounded-lg outline-0 border border-bgray bg-ibgray text-sm placeholder:text-independence placeholder:text-opacity-40"
            />
          </div>
        </div>

        <h3 className="text-base lg:text-lg font-bold my-6 lg:my-8">
          Change Password
        </h3>

        <div className="grid grid-cols-2 gap-8 lg:gap-12 max-w-3xl mb-6">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="currentPassword"
              className="pl-3 text-lgray text-12 font-semibold uppercase"
            >
              Current Password
            </label>
            <input
              type="password"
              placeholder="*****"
              id="currentPassword"
              autoComplete="off"
              className="py-3 px-4 rounded-lg outline-0 border border-bgray bg-ibgray text-sm placeholder:text-independence placeholder:text-opacity-40"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="newPassword"
              className="pl-3 text-lgray text-12 font-semibold uppercase"
            >
              New Password
            </label>
            <input
              type="password"
              placeholder="*****"
              id="newPassword"
              autoComplete="off"
              className="py-3 px-4 rounded-lg outline-0 border border-bgray bg-ibgray text-sm placeholder:text-independence placeholder:text-opacity-40"
            />
          </div>
        </div>

        <button
          className="py-3 px-4 lg:py-3.5 lg:px-6 text-sm lg:text-base text-white font-semibold rounded-lg bg-buyellow shadow-md hover:shadow-xl active:shadow-sm transition"
          type="submit"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default BUUserSettings;
