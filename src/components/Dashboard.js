import React, { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
const Dashboard = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <div className="min-h-screen flex bg-white relative">
      <div className="fixed h-screen bg-white flex md:w-80 text-center py-6 hidden md:block">
        <div>
          <Link to="/">
            <h2 className="text-3xl font-semibold">LOGO</h2>
          </Link>
          <div className="flex justify-center	items-center flex-col mt-12 gap-2">
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                ` w-44 p-2 rounded-xl font-medium flex items-center ${
                  isActive ? "bg-gray-200" : ""
                }`
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                />
              </svg>
              <span className="ml-2">Dashboard</span>
            </NavLink>
            <NavLink
              to="/dashboard/donors"
              className={({ isActive }) =>
                ` w-44 p-2 rounded-xl font-medium flex items-center ${
                  isActive ? "bg-gray-200" : ""
                }`
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              <span className="ml-2">Donors</span>
            </NavLink>
            <NavLink
              to="/dashboard/receiver"
              className={({ isActive }) =>
                ` w-44 p-2 rounded-xl font-medium flex items-center ${
                  isActive ? "bg-gray-200" : ""
                }`
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
                />
              </svg>
              <span className="ml-2">Receiver</span>
            </NavLink>
            <NavLink
              to="/dashboard/requested"
              className={({ isActive }) =>
                ` w-44 p-2 rounded-xl font-medium flex items-center ${
                  isActive ? "bg-gray-200" : ""
                }`
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="ml-2">Requested</span>
            </NavLink>
          </div>
        </div>
        <div className="mt-16">
          <h3 className="flex items-center rounded-xl font-medium w-44 mx-auto p-2 cursor-pointer hover:bg-gray-700 hover:text-white transition-all">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            LOGOUT
          </h3>
        </div>
      </div>
      <div
        onClick={() => setShowSideBar(true)}
        className="absolute top-6 left-3 cursor-pointer md:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </div>
      <div className="bg-gray-200 grow md:ml-80 p-6 rounded-l-3xl">
        <div className="flex justify-end items-center">
          <img
            width="30"
            src="https://www.shareicon.net/data/256x256/2015/08/29/92700_man_512x512.png"
            alt=""
          />
          <h4 className="ml-3 font-medium">Thomas Shelby</h4>
        </div>
        <Outlet />
      </div>
      {/* Side Menu bar */}
      {showSideBar && (
        <div
          className={`fixed top-0 left-0 h-screen bg-gray-100  md:hidden py-8 px-5 flex justify-between flex-col 
        ${showSideBar && "w-1/3"} transition-all`}
        >
          <div
            onClick={() => setShowSideBar(false)}
            className="absolute top-3 right-3 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div>
            <div className="text-center">
              <Link to="/">
                <h2 className="text-3xl font-semibold">LOGO</h2>
              </Link>
            </div>
            <div className="flex justify-center	items-center flex-col mt-12 gap-2">
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  ` w-44 p-2 rounded-xl font-medium flex items-center ${
                    isActive ? "bg-gray-200" : ""
                  }`
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  />
                </svg>
                <span className="ml-2">Dashboard</span>
              </NavLink>
              <NavLink
                to="/dashboard/donors"
                className={({ isActive }) =>
                  ` w-44 p-2 rounded-xl font-medium flex items-center ${
                    isActive ? "bg-gray-200" : ""
                  }`
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                <span className="ml-2">Donors</span>
              </NavLink>
              <NavLink
                to="/dashboard/receiver"
                className={({ isActive }) =>
                  ` w-44 p-2 rounded-xl font-medium flex items-center ${
                    isActive ? "bg-gray-200" : ""
                  }`
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
                  />
                </svg>
                <span className="ml-2">Receiver</span>
              </NavLink>
              <NavLink
                to="/dashboard/requested"
                className={({ isActive }) =>
                  ` w-44 p-2 rounded-xl font-medium flex items-center ${
                    isActive ? "bg-gray-200" : ""
                  }`
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="ml-2">Requested</span>
              </NavLink>
            </div>
          </div>
          <div>
            <h3 className="flex items-center rounded-xl font-medium w-44 mx-auto p-2 cursor-pointer hover:bg-gray-700 hover:text-white transition-all">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              LOGOUT
            </h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
