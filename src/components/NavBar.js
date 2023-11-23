import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useApp } from "../context/AppProvider";
import noUser from "../assets/images/nouser.png";
import { NavbarButtons } from "./NavbarButtons";

export const NavBar = () => {
  const navigate = useNavigate();

  const { state, dispatch } = useApp();

  const [navigationItems, setNavigationItems] = useState([]);

  const location = useLocation();

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  useEffect(() => {
    const currentPath = location.pathname;

    const updatedNavigationItems = [
      { name: "Home", href: "/", current: true },
      { name: "Discover", href: "/search", current: false },
      { name: "Community Hub", href: "/community", current: false },
      state.user && {
        name: "My Cookbooks",
        href: "/mycookbooks",
        current: false,
      },
    ].filter(Boolean);

    if (updatedNavigationItems.some((item) => item.href === currentPath)) {
      const updatedItems = updatedNavigationItems.map((item) => ({
        ...item,
        current: item.href === currentPath,
      }));

      setNavigationItems(updatedItems);
    } else {
      setNavigationItems(updatedNavigationItems);
    }
  }, [state.user, location.pathname]);

  useEffect(() => {
    !state.user && navigate("/");
  }, [state.user]);

  return (
    <Disclosure as="nav" className="bg-[#EEE0CB] h-[4rem] relative z-20">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-red-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center overflow-hidden rounded-full">
                  <img
                    className="h-10 w-auto"
                    src="https://cdn.dribbble.com/users/146798/screenshots/2818074/media/9e64567eeeb0f8ddf909507d9fe019dd.png"
                    alt="Company logo"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  {
                    <NavbarButtons
                      key={state.user ? "loggedIn" : "loggedOut"}
                      variant={false}
                      navigationItems={navigationItems}
                      navigate={navigate}
                      classNames={classNames}
                    />
                  }
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {state.user ? (
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src={state?.user?.avatarURL}
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-black"
                              )}
                            >
                              Your Profile
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-black"
                              )}
                              onClick={() => {
                                dispatch({ type: "LOGOUT" });
                              }}
                            >
                              Sign out
                            </Link>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                ) : (
                  <div className="relative ml-3">
                    <button
                      className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      onClick={() => {
                        navigate("/login");
                      }}
                    >
                      {" "}
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Redirect to Login Page</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src={noUser}
                        alt="no user"
                      />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            {
              <NavbarButtons
                key={state.user ? "loggedIn" : "loggedOut"}
                variant={true}
                navigationItems={navigationItems}
                navigate={navigate}
                classNames={classNames}
              />
            }
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
