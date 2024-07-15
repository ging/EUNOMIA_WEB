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
    "px-8 py-4",
    "flex justify-between items-center",
    "bg-primary text-white",
    `header_${currentLang}`,
    {
      "font-semibold": true,
      "underlined": true,
    }
  );

  const menuClasses = clsx(
    "hidden",
    "md:flex md:flex-col md:gap-4",
    "lg:flex-row lg:gap-8",
    { "responsive-shown": state.open, "responsive-hidden": !state.open }
  );

  const menuItemClasses = clsx(
    "w-fit justify-end",
    "hover:underline",
  );

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

      {/* menu icons */}
      <div className="block md:hidden">
        {!state.open ? (
          <HamburgerMenuIcon
            className={clsx("show", {
              "responsive-hidden": state.open,
              "responsive-shown": !state.open,
            })}
            onClick={() => setState({ open: !state.open })}
          />
        ) : (
          <Cross1Icon
            className={clsx("close", {
              "responsive-hidden": state.open, 
              "responsive-shown": !state.open,
            })}
            onClick={() => setState({ open: !state.open })}
          />
        )}
      </div>{/* /menu icons */}

      <div className={menuClasses}>
        <ul className="flex items-center gap-4">
          {routes.map((route, index) => (
            <li
              key={index}
              className={clsx(
                menuItemClasses, 
              )}
            >
              <Link href={route.route}>{t(route.key)}</Link>
            </li>
          ))}
        </ul>
        <LangSwitcher/>
      </div>
    </header>
  );
}
