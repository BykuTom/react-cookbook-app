import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-orange-200 shadow">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-black sm:text-center">
          © 2023{" "}
          <a
            href="https://github.com/BykuTom/react-cookbook-app"
            target="_blank"
            className="hover:bg-red-400 rounded-md px-3 py-2"
          >
            Rocket™
          </a>
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-black sm:mt-0">
          <p className="me-4 md:me-6">Team Members:</p>
          <li>
            <a
              href="https://github.com/BykuTom"
              target="_blank"
              className="hover:bg-red-400 rounded-md px-3 py-2 text-sm font-medium me-4 md:me-6"
            >
              Tomasz Wolak
            </a>
          </li>
          <li>
            <a
              href="https://github.com/artursrus"
              target="_blank"
              className="hover:bg-red-400 rounded-md px-3 py-2 text-sm font-medium me-4 md:me-6"
            >
              Arturs Ruskulis
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
