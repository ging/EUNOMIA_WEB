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

  const logoClasses = clsx(
    "w-full flex justify-center items-center img-contain",
  );
  const imgClasses = clsx(
    "min-h-10 max-w-[300px] md:max-w-full",
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
      <div className={logoClasses + " mt-10"}>
        <img
        className={imgClasses}
          src="assets/logos/eunomia_logo_lg_light.svg"
          alt="logo Eunomia"
        />
      </div>
      <div className={logoClasses}></div> 
      <div className={logoClasses}>
        <img
        className={imgClasses + " max-w-[75%] md:max-h-[90%]"}
          src="assets/logos/upm_logo_light.svg"
          alt="logo UPM"
        />
      </div>
      <div className={logoClasses + " mb-6"}>
        <img
        className={imgClasses}
          src="assets/logos/incibe_logo_white.png"
          alt="logo INCIBE"
        />
      </div>
    </footer>
  );
}
