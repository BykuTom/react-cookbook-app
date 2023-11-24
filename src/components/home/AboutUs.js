import React from "react";
import noUser from "../../assets/images/nouser.png";
import tomaszImg from "../../assets/images/tomasz.png";
import pizzaIcon from "../../assets/images/pizza.png";
import cakeIcon from "../../assets/images/birthday.png";
import { CpuChipIcon, ComputerDesktopIcon } from "@heroicons/react/24/outline";

export const AboutUs = () => {
  return (
    <div className="overflow-hidden bg-orange-100 py-4 mt-4 md:mx-4 drop-shadow-lg rounded-md p-2 ">
      <div className="p-2 mb-2">
        <div className="flex flex-row align-middle justify-center items-center gap-2">
          <img src={pizzaIcon} className="w-10 h-10" alt="pizzaicon" />
          <h2 className="text-center text-4xl font-bold text-gray-900 py-4">
            About Project
          </h2>
          <img src={cakeIcon} className="w-10 h-10" alt="cakeicon" />
        </div>

        <div className="px-10 mx-auto card my-2 p-2 h-100 items-center bg-orange-200 lg:min-w-[60rem] xl:min-w-[70rem] ">
          <h3 className="text-gray-800 text-2xl font-bold py-4 px-6 text-center">
            "Cookbook App: Where Every Recipe Comes with a Side of Punnery –
            Stirring Pots and Puns Since 2023!"
          </h3>
          <p className="text-gray-600 text-lg text-center pb-4">
            Introducing our cutting-edge Cookbook App, a culinary companion that
            redefines the way you experience cooking. This project is a
            sophisticated and user-friendly application, seamlessly integrating
            an extensive library of recipes with detailed instructions and
            nutritional information for each delectable dish.
          </p>
          <p className="text-gray-600 text-lg text-center pb-4">
            Whether you're a seasoned chef or a kitchen novice, our app caters
            to all skill levels, offering a diverse range of recipes to suit
            every taste and dietary preference. Users can effortlessly search
            for recipes, explore step-by-step instructions, and access
            comprehensive nutrient details to make informed choices about their
            meals. The personalized touch extends to the ability to favorite
            recipes, allowing users to curate their digital cookbook with ease.
          </p>
        </div>
      </div>

      <div className="pt-8">
        <div className="flex flex-row gap-2 justify-center">
          <CpuChipIcon className="w-10 h-10 block text-black" />
          <h2 className="text-center text-4xl font-bold text-gray-900 mb-4">
            Meet the Team
          </h2>
          <ComputerDesktopIcon className="w-10 h-10 block text-black" />
        </div>
        <div className="flex flex-col gap-2 p-2 md:flex-row md:gap-8 md:p-0 max-w-[70rem] mx-auto">
          <div className="card bg-orange-200 my-2 p-2 h-[40rem] max-w-[unset] w-full items-center justify-around">
            <img
              src={noUser}
              className="max-w-[20rem] aspect-square mx-auto rounded-full"
              alt="Arturs"
            />
            <div className="flex flex-col items-center">
              <h4 className="text-3xl pb-1 font-bold text-gray-900 text-center justify-between">
                Arturs
              </h4>
              <p className="text-gray-600 text-lg text-center">
                Our resident creative mind, brings a unique blend of artistic
                flair and technical expertise. With a keen eye for design and an
                unwavering commitment to user experience, Arturs is on a mission
                to bridge the gap between aesthetics and functionality in the
                world of web development.
              </p>
            </div>
            <a
              href="https://github.com/artursrus"
              target="_blank"
              rel="noreferrer"
              className="bg-red-400 rounded-full aspect-square p-1 text-sm font-medium  hover:shadow-md flex items-center justify-center"
            >
              <svg
                className="h-10 w-10"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </div>
          <div className="card bg-orange-200 my-2 p-2 h-[40rem] max-w-[unset] w-full items-center justify-around">
            <img
              src={tomaszImg}
              className="max-w-[20rem] aspect-square mx-auto rounded-full"
              alt="Tomasz"
            />
            <div className="flex flex-col items-center">
              <h4 className="text-3xl pb-1 font-bold text-gray-900 text-center justify-between">
                Tomasz
              </h4>
              <p className="text-gray-600 text-lg text-center">
                The wizard behind the code, is a seasoned frontend developer
                with a passion for clean, efficient, and scalable solutions. His
                dedication to mastering the latest technologies and implementing
                best practices.
              </p>
            </div>
            <a
              href="https://github.com/BykuTom"
              target="_blank"
              rel="noreferrer"
              className="bg-red-400 rounded-full aspect-square p-1 text-sm font-medium  hover:shadow-md flex items-center justify-center"
            >
              <svg
                className="h-10 w-10"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
