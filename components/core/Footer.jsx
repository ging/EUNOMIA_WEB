"use client";

import React from "react";
import clsx from "clsx";

import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function Footer(props) {
  const { t } = useTranslation();
  const routes = [
    { route: "/research", key: "nav.item" },
    { route: "/courses", key: "nav.item2" },
    { route: "/tools", key: "nav.item3" },
    { route: "/project", key: "nav.item4" },
    { route: "/team", key: "nav.item5" },
    { route: "/about", key: "nav.item6" },
  ];

  const projectLogoClasses = clsx(
    "w-full flex justify-center items-center",
  );

  const partnerLogoClasses = clsx(
    "w-full flex justify-center items-center",
  );

  const imgClasses = clsx(
    "min-h-10 max-w-[300px] md:w-1/3 img-contain",
  );

  return (
    <footer className="padding_footer flex flex-col gap-8 justify-center items-center md:flex-row bg-primary">
      {/* <div className="copyright">
            {" "}
            <a
            className="font-normal text-base"
            rel="noopener noreferrer"
            href="http://www.dit.upm.es/"
            target="_blank"
            >
            {t("footer.titleRight")}
            </a>
        </div> */}
      <div className={projectLogoClasses}> 
        <img
        className={imgClasses}
          src="assets/logos/eunomia_logo_lg_light.svg"
          alt="logo Eunomia"
        />
      </div>
      <nav
        className="text-white"
        >
          <ul>
            <li className="sections_title smallcaps text-left mb-4">
              {t("footer.title1")}
            </li>
            {routes.map((route, index) => (
              <li
                key={index}
                className={
                  route.route === props.route
                    ? "li-selected text-left mb-2 font-medium md:text-"
                    : "text-left mb-2 font-medium"
                }
              >
                <Link className="font-medium" href={route.route}>
                {t(route.key)}
                </Link>
              </li>
            ))}
          </ul>
          </nav>
      <div className="gap-6 flex justify-center items-center w-1/2">
      <div className={partnerLogoClasses}>
        <img
        className=" max-w-[75%] md:max-h-[90%]"
          src="assets/logos/upm_logo_light.svg"
          alt="logo UPM"
        />
      </div>
      <div className={partnerLogoClasses}>
        <img
    
          src="assets/logos/incibe_logo_white.png"
          alt="logo INCIBE"
        />
      </div>
      </div>
    </footer>
  );
}
