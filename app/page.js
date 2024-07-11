"use client";
import * as React from "react";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { myProjectCards } from "@/constants/projectsCards.js";
import { useTranslation } from "react-i18next";

// Components
import { Button } from "@/components/ui/button";
import Heading from "@/components/core/Heading"


import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  CardSubtitle,
} from "@/components/ui/card";

// UI
export default function Projects() {
  // const [projects, setProjects] = useState(myprojectCards);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // <p className="basis-3/4">{t("project.Intro.title")}</p>

  return (
    <main>
      <Heading level="h1" className="">
        Página de prueba
      </Heading>

      {/* Card grid */}
      <div className="h-full m-auto pt-16 max-w-[1080px] grid grid-cols-3 gap-8">
        {myProjectCards.map((project) => (
          <Card key={project.id} className="flex flex-col min-h-[200px]">
            <CardHeader>
              <div>{project.date}</div>
            </CardHeader>

            <CardContent className="">
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.subtitle}</CardDescription>
            </CardContent>

            <CardFooter>
              <Button variant="" size="sm" className="capitalize">
                {project.category}
                <a href={project.route} target="blank">
                  Enlace
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
}

const CreateLink = (props) => {
  return props.route.match("http") ? (
    <a target="_blank" href={props.route} rel="noopener noreferrer">
      {props.children}
    </a>
  ) : (
    <Link href={props.route}>{props.children}</Link>
  );
};
