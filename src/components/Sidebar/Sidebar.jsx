import React from "react";

import { NavLink } from "react-router-dom";
import logo from "../../assets/sidelogo.svg";

function Sidebar() {
  return (
    <div className="bg-siblack w-sidebar-sm lg:w-1/4 lg:min-w-sidebar-md lg:max-w-sidebar-lg h-screen fixed top-0 bottom-0 z-50">
      <div className="py-6 lg:py-8 px-4 lg:px-6 pr-6 lg:pr-12 w-full select-none">
        <img className="w-full" src={logo} alt="Logo" />
      </div>

      <div className="py-8 lg:py-12 flex flex-col h-full">
        <nav>
          <ul>
            <li>
              <NavLink
                to="/ic-dashboard"
                className="group flex gap-4 lg:gap-6 items-center py-5 pl-4 lg:pl-8 pr-2 border-l-3 border-transparent transition ease-out duration-500 select-none hover:bg-lgray hover:bg-opacity-8 hover:border-lavender"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-lgray shrink-0 group-hover:fill-lavender"
                >
                  <path d="M15.5233 8.94116H8.54418L13.1921 13.5891C13.3698 13.7667 13.6621 13.7812 13.8448 13.6091C14.983 12.5367 15.7659 11.0912 15.9957 9.46616C16.0351 9.18793 15.8042 8.94116 15.5233 8.94116ZM15.0577 7.03528C14.8154 3.52176 12.0077 0.714119 8.49418 0.471767C8.22595 0.453237 8.00006 0.679413 8.00006 0.948236V7.5294H14.5815C14.8504 7.5294 15.0762 7.30352 15.0577 7.03528ZM6.5883 8.94116V1.96206C6.5883 1.68118 6.34153 1.45029 6.06359 1.48971C2.55859 1.985 -0.120524 5.04705 0.00418193 8.71675C0.132417 12.4856 3.37742 15.5761 7.14801 15.5288C8.63036 15.5103 10.0001 15.0326 11.1262 14.2338C11.3586 14.0691 11.3739 13.727 11.1724 13.5256L6.5883 8.94116Z" />
                </svg>

                <span className="text-lgray text-sm lg:text-base group-hover:text-lavender">
                  Dashboard
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/request"
                className="group flex gap-4 lg:gap-6 items-center py-5 pl-4 lg:pl-8 pr-2 border-l-3 border-transparent transition ease-out duration-500 select-none hover:bg-lgray hover:bg-opacity-8 hover:border-lavender"
              >
                <svg
                  width="14"
                  height="16"
                  viewBox="0 0 14 16"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-lgray shrink-0 group-hover:fill-lavender"
                >
                  <path d="M7 8C9.20938 8 11 6.20937 11 4C11 1.79063 9.20938 0 7 0C4.79063 0 3 1.79063 3 4C3 6.20937 4.79063 8 7 8ZM9.99375 9.01875L8.5 15L7.5 10.75L8.5 9H5.5L6.5 10.75L5.5 15L4.00625 9.01875C1.77812 9.125 0 10.9469 0 13.2V14.5C0 15.3281 0.671875 16 1.5 16H12.5C13.3281 16 14 15.3281 14 14.5V13.2C14 10.9469 12.2219 9.125 9.99375 9.01875Z" />
                </svg>

                <span className="text-lgray text-sm lg:text-base group-hover:text-lavender">
                  Request
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/ic-printed-cards"
                className="group flex gap-4 lg:gap-6 items-center py-5 pl-4 lg:pl-8 pr-2 border-l-3 border-transparent transition ease-out duration-500 select-none hover:bg-lgray hover:bg-opacity-8 hover:border-lavender"
              >
                <svg
                  width="16"
                  height="14"
                  viewBox="0 0 16 14"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-lgray shrink-0 group-hover:fill-lavender"
                >
                  <path d="M13.25 4H2.75C1.505 4 0.5 5.005 0.5 6.25V10.75H3.5V13.75H12.5V10.75H15.5V6.25C15.5 5.005 14.495 4 13.25 4ZM11 12.25H5V8.5H11V12.25ZM13.25 7C12.8375 7 12.5 6.6625 12.5 6.25C12.5 5.8375 12.8375 5.5 13.25 5.5C13.6625 5.5 14 5.8375 14 6.25C14 6.6625 13.6625 7 13.25 7ZM12.5 0.25H3.5V3.25H12.5V0.25Z" />
                </svg>

                <span className="text-lgray text-sm lg:text-base group-hover:text-lavender">
                  Printed Cards
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/reports"
                className="group flex gap-4 lg:gap-6 items-center py-5 pl-4 lg:pl-8 pr-2 border-l-3 border-transparent transition ease-out duration-500 select-none hover:bg-lgray hover:bg-opacity-8 hover:border-lavender"
              >
                <svg
                  width="12"
                  height="16"
                  viewBox="0 0 12 16"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-lgray shrink-0 group-hover:fill-lavender"
                >
                  <path d="M8.66667 0.2C9.1372 0.361318 9.56535 0.626549 9.91933 0.976L11.0233 2.08133C11.3732 2.43486 11.6387 2.86284 11.8 3.33333H8.66667V0.2ZM7.33333 8H4.66667C4.48986 8 4.32029 8.07024 4.19526 8.19526C4.07024 8.32029 4 8.48986 4 8.66667C4 8.84348 4.07024 9.01305 4.19526 9.13807C4.32029 9.2631 4.48986 9.33333 4.66667 9.33333H7.33333C7.51014 9.33333 7.67971 9.2631 7.80474 9.13807C7.92976 9.01305 8 8.84348 8 8.66667C8 8.48986 7.92976 8.32029 7.80474 8.19526C7.67971 8.07024 7.51014 8 7.33333 8ZM8.66667 4.66667C8.31304 4.66667 7.97391 4.52619 7.72386 4.27614C7.47381 4.02609 7.33333 3.68696 7.33333 3.33333V0H3.33333C2.4496 0.00105857 1.60237 0.352588 0.97748 0.97748C0.352588 1.60237 0.00105857 2.4496 0 3.33333V12.6667C0.00105857 13.5504 0.352588 14.3976 0.97748 15.0225C1.60237 15.6474 2.4496 15.9989 3.33333 16H8.66667C9.5504 15.9989 10.3976 15.6474 11.0225 15.0225C11.6474 14.3976 11.9989 13.5504 12 12.6667V4.66667H8.66667ZM8.66667 13.3333H3.33333C3.15652 13.3333 2.98695 13.2631 2.86193 13.1381C2.7369 13.013 2.66667 12.8435 2.66667 12.6667C2.66667 12.4899 2.7369 12.3203 2.86193 12.1953C2.98695 12.0702 3.15652 12 3.33333 12H8.66667C8.84348 12 9.01305 12.0702 9.13807 12.1953C9.2631 12.3203 9.33333 12.4899 9.33333 12.6667C9.33333 12.8435 9.2631 13.013 9.13807 13.1381C9.01305 13.2631 8.84348 13.3333 8.66667 13.3333ZM7.33333 10.6667H4.66667C4.13623 10.6667 3.62753 10.456 3.25245 10.0809C2.87738 9.70581 2.66667 9.1971 2.66667 8.66667C2.66667 8.13623 2.87738 7.62753 3.25245 7.25245C3.62753 6.87738 4.13623 6.66667 4.66667 6.66667H7.33333C7.86377 6.66667 8.37247 6.87738 8.74755 7.25245C9.12262 7.62753 9.33333 8.13623 9.33333 8.66667C9.33333 9.1971 9.12262 9.70581 8.74755 10.0809C8.37247 10.456 7.86377 10.6667 7.33333 10.6667Z" />
                </svg>
                <span className="text-lgray text-sm lg:text-base group-hover:text-lavender">
                  Reports
                </span>
              </NavLink>
            </li>
          </ul>
        </nav>

        <nav className="flex-1 flex items-center">
          <ul className="w-full">
            <li className="border-t border-t-platinum border-opacity-10">
              <NavLink
                to="/ic-settings"
                className="group flex gap-4 lg:gap-6 items-center py-5 pl-4 lg:pl-8 pr-2 border-l-3 border-transparent transition ease-out duration-500 select-none hover:bg-lgray hover:bg-opacity-8 hover:border-lavender"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="fill-lgray shrink-0 group-hover:fill-lavender"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M15.2311 9.86546L13.8999 9.09671C14.0343 8.37171 14.0343 7.62796 13.8999 6.90296L15.2311 6.13421C15.3843 6.04671 15.453 5.86546 15.403 5.69671C15.0561 4.58421 14.4655 3.57796 13.6936 2.74046C13.5749 2.61233 13.3811 2.58108 13.2311 2.66858L11.8999 3.43733C11.3405 2.95608 10.6968 2.58421 9.99989 2.34046V0.806084C9.99989 0.631084 9.87802 0.477959 9.70614 0.440459C8.55927 0.184209 7.38427 0.196709 6.29365 0.440459C6.12177 0.477959 5.9999 0.631084 5.9999 0.806084V2.34358C5.30615 2.59046 4.6624 2.96233 4.0999 3.44046L2.77177 2.67171C2.61865 2.58421 2.42802 2.61233 2.30927 2.74358C1.5374 3.57796 0.946773 4.58421 0.599898 5.69983C0.546773 5.86858 0.618648 6.04983 0.771773 6.13733L2.10302 6.90608C1.96865 7.63108 1.96865 8.37483 2.10302 9.09983L0.771773 9.86858C0.618648 9.95608 0.549898 10.1373 0.599898 10.3061C0.946773 11.4186 1.5374 12.4248 2.30927 13.2623C2.42802 13.3905 2.62177 13.4217 2.77177 13.3342L4.10302 12.5655C4.6624 13.0467 5.30615 13.4186 6.00302 13.6623V15.1998C6.00302 15.3748 6.1249 15.528 6.29677 15.5655C7.44365 15.8217 8.61864 15.8092 9.70927 15.5655C9.88114 15.528 10.003 15.3748 10.003 15.1998V13.6623C10.6968 13.4155 11.3405 13.0436 11.903 12.5655L13.2343 13.3342C13.3874 13.4217 13.578 13.3936 13.6968 13.2623C14.4686 12.428 15.0593 11.4217 15.4061 10.3061C15.453 10.1342 15.3843 9.95296 15.2311 9.86546ZM7.99989 10.4998C6.62177 10.4998 5.4999 9.37796 5.4999 7.99983C5.4999 6.62171 6.62177 5.49983 7.99989 5.49983C9.37802 5.49983 10.4999 6.62171 10.4999 7.99983C10.4999 9.37796 9.37802 10.4998 7.99989 10.4998Z" />
                </svg>

                <span className="text-lgray text-sm lg:text-base group-hover:text-lavender">
                  Settings
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/logout"
                className="group flex gap-4 lg:gap-6 items-center py-5 pl-4 lg:pl-8 pr-2 border-l-3 border-transparent transition ease-out duration-500 select-none hover:bg-lgray hover:bg-opacity-8 hover:border-lavender"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="shrsink-0"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V3.33333C2 2.97971 2.14048 2.64057 2.39052 2.39052C2.64057 2.14048 2.97971 2 3.33333 2H6"
                    stroke="#E81E2A"
                    strokeOpacity="0.89"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.6667 11.3332L14.0001 7.99984L10.6667 4.6665"
                    stroke="#E81E2A"
                    strokeOpacity="0.89"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14 8H6"
                    stroke="#E81E2A"
                    strokeOpacity="0.89"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <span className="text-lgray text-sm lg:text-base group-hover:text-lavender">
                  Logout
                </span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
