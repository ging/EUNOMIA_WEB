"use client";

import React from "react";
import clsx from "clsx";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import { routes } from "@/constants/routes";

import { EnvelopeClosedIcon } from "@radix-ui/react-icons";

export default function Footer(props) {
  const { t } = useTranslation();


  const projectLogoContainerClasses = clsx(
    "flex flex-col gap-4 items-start justify-start sm:justify-center",
    "w-3/4 sm:w-2/3 md:w-1/3 ",
    "mr-2 sm:mr-3 md:mr-4 xl:mr-5 mb-6 sm:mb-0",
  );

  const partnerLogoClasses = clsx(
    "w-full flex justify-start items-center max-h-20",
  );

  const imgClasses = clsx(
   "max-w-[180px] md:max-w-[140px] lg:max-w-[180px] img-contain",
  );

  return (
    <footer className="padding_footer flex flex-wrap md:flex-nowrap md:justify-center  gap-4 sm:gap-8 lg:gap-12 items-start flex-row bg-primary">
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
      <div className={projectLogoContainerClasses}>
        <img
          className="w-fit max-h-20 sm:w-2/3 md:w-3/4 lg:w-4/5 xl:3/4"
              // alternativa para que el texto de abajo no se mueva... pero saca margenes al logo className="flex justify-start w-[350px] h-[100px] sm:w-[220px] sm:h-[40px] lg:w-4/5 xl:3/4"
          src="assets/logos/eunomia_logo_lg_light.svg"
          alt="logo Eunomia"
        />
        <div className="text-white flex items-center ">
          <EnvelopeClosedIcon className="mr-2 mb-0.5 " />
          <p className="text-white text-[14px]">Correo de contacto</p>
        </div>
      </div>
     
        <nav
          className="w-1/5 mr-8 sm:mr-0 sm:w-2/6 md:w-1/3 lg:w-1/4 inline-block text-white"
        >
          <div className=" sections_title smallcaps text-left mb-2 text-[14px] font-bold">
            {t("footer.title1")}
          </div>
          <ul className="columns-1 sm:columns-2 gap-x-3 inline-block">

            {routes.map((route, index) => (
              <li
                key={index}
                className={
                  route.route === props.route
                    ? "li-selected text-left mb-1 lg:mb-1.5 font-normal text-sm"
                    : "text-left mb-1 lg:mb-1.5 font-normal text-[14px]"
                }
              >
                <Link className="font-normal" href={route.route}>
                  {t(route.key)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="text-white w-3/5 sm:w-3/5 md:w-2/5 ">
          <div className="sections_title smallcaps text-left mb-2 text-[14px] font-bold">
            {t("footer.title3")}
          </div>
          <div className="gap-2 flex justify-center items-center flex-col sm:flex-row">

            <div className={partnerLogoClasses}>
              <img
                className={imgClasses}
                src="assets/logos/upm_logo_light.svg"
                alt="logo UPM"
              />
            </div>
            <div className={partnerLogoClasses}>
              <img
                className={imgClasses}
                src="assets/logos/incibe_logo_white.png"
                alt="logo INCIBE"
              />
            </div>
          </div>
        </div>
   
    </footer>
  );
}
