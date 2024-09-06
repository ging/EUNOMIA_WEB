"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { projects } from "@/constants/projects";

// Components
import { Button, ButtonVariants } from "@/components/ui/button";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import { Card, CardVariants } from "@/components/core/Cards";
import { Label } from "@radix-ui/react-label";
import { Badge, badgeVariants } from "@/components/ui/badge";

export default function DesignSystem(props) {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className={"page_" + currentLang + " standard_margin"}>
      <Heading level="h1">Sistema de diseño</Heading>
      <Heading level="h3">Botones</Heading>

      {/* Variant */}
      <Heading level="h5">Variante</Heading>
      <div className="flex gap-4 pb-8">
        <Button
          href="#"
          className={ButtonVariants({
            variant: "default",
            size: "default",
            radius: "rounded_sm",
          })}
          {...props}
        >
          Botón Default
        </Button>
        <Button
          href="#"
          className={ButtonVariants({
            variant: "secondary",
            size: "default",
            radius: "rounded_sm",
          })}
          {...props}
        >
          Botón Secondary
        </Button>
        <Button
          href="#"
          className={ButtonVariants({
            variant: "outline",
            size: "default",
            radius: "rounded_sm",
          })}
          {...props}
        >
          Botón Outline
        </Button>
        <Button
          href="#"
          className={ButtonVariants({
            variant: "ghost",
            size: "default",
            radius: "rounded_sm",
          })}
          {...props}
        >
          Botón Ghost
        </Button>
        <Button
          href="#"
          className={ButtonVariants({
            variant: "link",
            size: "default",
            radius: "rounded_sm",
          })}
          {...props}
        >
          Botón Link
        </Button>
      </div>

      {/* Size */}
      <Heading level="h5">Tamaño</Heading>
      <div className="flex gap-4 pb-8">
        <Button
          href="#"
          className={ButtonVariants({
            variant: "default",
            size: "lg",
            radius: "rounded_sm",
          })}
          {...props}
        >
          Botón lg
        </Button>
        <Button
          href="#"
          className={ButtonVariants({
            variant: "default",
            size: "default",
            radius: "rounded_sm",
          })}
          {...props}
        >
          Botón Default
        </Button>
        <Button
          href="#"
          className={ButtonVariants({
            variant: "default",
            size: "sm",
            radius: "rounded_sm",
          })}
          {...props}
        >
          Botón sm
        </Button>
      </div>

      {/* RADIUS */}
      <Heading level="h5">Radius</Heading>
      <div className="flex gap-4 pb-8">
        <Button
          href="#"
          className={ButtonVariants({
            variant: "default",
            size: "default",
            radius: "rounded_sm",
          })}
          {...props}
        >
          Radius sm
        </Button>
        <Button
          href="#"
          className={ButtonVariants({
            variant: "default",
            size: "default",
            radius: "rounded_md",
          })}
          {...props}
        >
          Radius md
        </Button>
        <Button
          href="#"
          className={ButtonVariants({
            variant: "default",
            size: "default",
            radius: "rounded_lg",
          })}
          {...props}
        >
          Radius lg
        </Button>
        <Button
          href="#"
          className={ButtonVariants({
            variant: "default",
            size: "default",
            radius: "rounded_full",
          })}
          {...props}
        >
          Radius full
        </Button>
      </div>
      <Heading level="h3">Badges</Heading>
      <div className="flex gap-4 pb-8">
        <Badge
          href="#"
          className={badgeVariants({
            variant: "default",
          })}
          {...props}
        >
          badge default
        </Badge>
        <Badge
          href="#"
          className={badgeVariants({
            variant: "secondary",
          })}
          {...props}
        >
          badge secondary
        </Badge>
        <Badge
          href="#"
          className={badgeVariants({
            variant: "outline",
          })}
          {...props}
        >
          badge outline
        </Badge>
      </div>
      <Heading level="h3">Cards</Heading>
      <section className="cards grid grid-cols-2 gap-4">
        {projects.map(
          ({
            id,
            date,
            route,
            title,
            subtitle,
            tags,
            category,
            name,
            position,
            center,
            mail,
          }) => {
            return (
              <Card
                key={id}
                className={CardVariants({
                  variant: "",
                })}
                date={date}
                title={t(title)}
                subtitle={t(subtitle)}
                tags={t(tags)}
                category={t(category)}
                buttonText={"texto del botón"}
              ></Card>
            );
          }
        )}
      </section>

      <Heading level="h3" className={"mt-8"}>
        Cards predefinidas
      </Heading>
      <section className="cards grid grid-cols-2 gap-4 mt-4">
        <Card
          cardType={"project"}
          className={CardVariants({
            variant: "project",
          })}
          date={"fecha"}
          title={"Utilización de escape rooms y videojuegos educativos en la Educación Universitaria"}
          subtitle={"E.T.S DE ING. DE SISTEMAS INFORMÁTICOS"}
          tags={"Aprendizaje Activo, Aprendizaje Autónomo, Investigación educativa, Aula Invertida, Gamificación"}
          description={""}
          route={"https://innovacioneducativa.upm.es/mooc/informacion-mooc?idmooc=356"}
          category={"categoría"}
          buttonText={""}
        ></Card>

        <Card
          cardType={"course"}
          className={CardVariants({
            variant: "course",
          })}
          date={"2023"}
          title={"Desarrollo de aplicaciones con React y React Native"}
          subtitle={
            "Las tecnologías de React y React Native son una manera novedosa y muy potente de desarrollar aplicaciones de cliente, tanto aplicaciones web como aplicaciones nativas Android e iOS. Son una de las tecnologías más demandadas en el mercado laboral hoy en día, y este curso te permitirá dominarlas y hacer tus propias aplicaciones de forma autónoma."
          }
          description={"2nd Edition"}
          tags={"React, Desarrollo web, Front-End"}
          category={"categoría"}
          buttonText={"curso"}
        ></Card>

        <Card
          cardType={"publication"}
          className={CardVariants({
            variant: "publication",
          })}
          date={"2024"}
          title={
            "Empowering Database Learning through Remote Educational Escape Rooms"
          }
          subtitle={
            "Enrique Barra, Sonsoles López-Pernas, Aldo Gordillo, Alejandro Pozo Huertas, Jose Muñoz, and Javier Conde"
          }
          tags={"tag, tag, tag, tag"}
          category={"article-journal"}
          buttonText={"leer publicación"}
        ></Card>

        <Card
          cardType={"team"}
          className={CardVariants({
            variant: "team",
          })}
          img={"/assets/img/courses/fondo-cursos.png"}
          name={"Nombre Apellidos"}
          // description={"napellidos@upm.es"}
          position={"Profesor Titular"}
          center={"E.T.S. de ingenieros de telecomunicacion"}
          mail={"napellidos@upm.es"}
        ></Card>
        <Card
          cardType={"tool"}
          className={CardVariants({
            variant: "tool",
          })}
          img={"/assets/img/courses/fondo-cursos.png"}
          title={"Card de herramienta"}
          description={"descripción de la herramienta"}
        ></Card>
      </section>
    </main>
  );
}
