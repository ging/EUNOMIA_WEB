"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import clsx from "clsx";
import LangSwitcher from "./../LangSwitcher";

// icons
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";

export default function Header(props) {
  const [state, setState] = useState({ open: false });
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  const routes = [
    { route: "/", key: "nav.item1" },
    { route: "/project", key: "nav.item2" },
    { route: "/team", key: "nav.item3" },
    { route: "/research", key: "nav.item4" },
    { route: "/about", key: "nav.item5" },
  ];

  // classes
  const headerClasses = clsx(
    "px-8 py-4 relative",
    "flex justify-between items-center",
    "bg-primary text-white",
    `header_${currentLang}`,
    {
      "font-semibold": true,
      underlined: true,
    }
  );

  //

  const menuClasses = clsx(
    "min-w-40",
    "absolute top-7 right-0 md:static",
    "flex flex-col lg:flex-row ",
    "gap-4 md:gap-2 lg:gap-8",
    "bg-primary md:bg-none",
    {
      "block md:flex": state.open,
      "hidden md:flex": !state.open,
    }
  );

  const menuItems = clsx(
    "flex flex-col items-center md:flex-row",
    "gap-0 md:gap-4"
  );

  const menuItemClasses = clsx(
    "w-full py-2 px-2 text-center md:p-0 md:w-fit",
    "hover:underline"
  )

  return (
    
    <header className={headerClasses} id="header_home">
      <a href="/">
        <div className="imagotype">
          <div className="isotype"></div>
          <div className="logotype h-10 flex">
            <img
              className="object-contain"
              src="eunomia_logo_white.svg"
              alt="logo"
            />
          </div>
        </div>
      </a>

      {/* menu container */}
      <div className="relative flex">
        {/* menu icons */}
        <div className="block md:hidden">
          {!state.open ? (
            <HamburgerMenuIcon
              className="w-6 h-6"
              onClick={() => setState({ open: !state.open })}
            />
          ) : (
            <Cross1Icon
              className="w-6 h-6"
              onClick={() => setState({ open: !state.open })}
            />
          )}
        </div>{/* /menu icons */}

        {/* menu nav */}
        <div className={menuClasses}>
          <ul className={menuItems}>
            {routes.map((route, index) => (
              <li key={index} className={menuItemClasses}>
                <Link href={route.route} onClick={() => setState({ open: false })}>{t(route.key)}</Link>
              </li>
            ))}
          </ul>
          <LangSwitcher/>
        </div>{/* /menu nav */}

      </div>{/* menu container */}

    </header>
  );
}
