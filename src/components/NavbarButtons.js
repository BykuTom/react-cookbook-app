import { Disclosure } from "@headlessui/react";
import { Link } from "react-router-dom";

export const NavbarButtons = ({
  variant,
  navigationItems,
  navigate,
  classNames,
}) => {
  return variant ? (
    <div className="space-y-1 px-2 pb-3 pt-2 flex flex-col bg-orange-200">
      {navigationItems.map((item) => (
        <Disclosure.Button
          key={item.name}
          as="button"
          onClick={() => {
            navigate(item.href);
          }}
          className={classNames(
            item.current
              ? "bg-yellow-300 text-black"
              : "text-black hover:bg-red-400 hover:text-black ",
            "rounded-md px-3 py-2 text-sm font-medium"
          )}
          aria-current={item.current ? "page" : undefined}
        >
          {item.name}
        </Disclosure.Button>
      ))}
    </div>
  ) : (
    <div className="flex space-x-4">
      {navigationItems.map((item) => (
        <Link
          key={item.name}
          to={item.href}
          className={classNames(
            item.current
              ? "bg-yellow-300 text-black shadow-md"
              : "text-black hover:bg-red-400 hover:text-black hover:shadow-md",
            "rounded-md px-3 py-2 text-sm font-medium"
          )}
          aria-current={item.current ? "page" : undefined}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};
