import React, { useRef, useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useLoginContext } from "../context/LoginContext";

const Navbar = () => {
  const { loginStatus, handleLogout } = useLoginContext();
  const ref = useRef();
  const [menu, setMenu] = useState("hidden")

  const menuList = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/#about" },
    { name: "Apply now", href: "/apply" },
  ];

  const menuOpen = () => {
    if (menu == "hidden") {
      setMenu("block")
    }
  };

  const menuClose = () => {
    if (menu == "block") {
      setMenu("hidden")
    }
  };

  return (
    <div className=" relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span className="sr-only">Viztech Logo</span>
              <img
                className="h-8 w-auto sm:h-10"
                src="https://tailwindui.com/img/logos/workflow-mark.svg?color=gray&shade=900"
                alt=""
              />
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <div
              onClick={menuOpen}
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-900"
            >
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" color="black" />
            </div>
          </div>
          <div as="nav" className="hidden md:flex space-x-10">
            {menuList.map((item) => (
              <Link key={item.name} href={item.href}>
                <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                  {item.name}
                </a>
              </Link>
            ))}
          </div>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            {loginStatus && (
              <>
                <Link href="/admin">
                  <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                    Dashboard
                  </a>
                </Link>
                <Link href="/">
                  <a
                    href="#"
                    className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded shadow-sm text-base font-medium text-white bg-gray-900 hover:bg-gray-900"
                    onClick={handleLogout}
                  >
                    Log out
                  </a>
                </Link>
              </>
            )}
            {!loginStatus && (
              <Link href="/signin">
                <a
                  href="#"
                  className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded shadow-sm text-base font-medium text-white bg-gray-900 hover:bg-gray-900"
                >
                  Admin Sign in
                </a>
              </Link>
            )}
          </div>
        </div>
      </div>
      <div
        ref={ref}
        focus
        className={`absolute top-0 inset-x-0 p-2 transition transform origin-top-right ${menu} md:hidden z-10`}
      >
        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
          <div className="pt-5 pb-6 px-5">
            <div className="flex items-center justify-between">
              <div>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark.svg?color=gray&shade=900"
                  alt="Workflow"
                />
              </div>
              <div className="-mr-2">
                <div
                  onClick={menuClose}
                  className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-900"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon
                    className="h-6 w-6"
                    aria-hidden="true"
                    color="black"
                  />
                </div>
              </div>
            </div>
            <div className="mt-6">
              <nav className="grid gap-y-8">
                {menuList.map((item) => (
                  <Link key={item.name} href={item.href}>
                    <div onClick={menuClose}>
                      <a className="text-base font-medium text-gray-700 hover:text-gray-900">
                        {item.name}
                      </a>
                    </div>
                  </Link>
                ))}
              </nav>
            </div>
          </div>
          <div className="py-6 px-5 space-y-6">
            {loginStatus && (
              <>
                <Link href="/admin">
                  <div onClick={menuClose}>
                    <a className="text-base font-medium text-gray-700 hover:text-gray-900">
                      Dashboard
                    </a>
                  </div>
                </Link>
                <Link href="/">
                  <div onClick={menuClose}>
                    <a
                      href="#"
                      className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded shadow-sm text-base font-medium text-white bg-gray-900 hover:bg-gray-900"
                      onClick={handleLogout}
                    >
                      Log out
                    </a>
                  </div>
                </Link>
              </>
            )}
            {!loginStatus && (
              <Link href="/signin">
                <div onClick={menuClose}>
                  <a className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded shadow-sm text-base font-medium text-white bg-gray-900 hover:bg-gray-900">
                    Admin Sign in
                  </a>
                </div>
              </Link>
            )}
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
