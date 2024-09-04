"use client";

import clsx from "clsx";
import * as React from "react";

import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

import Heading from "../ui/Heading";
import { Badge } from "../ui/badge";
import Text from "../ui/Text";
import { Button } from "../ui/button";
import { FaceIcon, ArrowRightIcon } from "@radix-ui/react-icons";

const CardVariants = cva(
  "h-full min-w-20 p-4 inline-flex flex-col gap-4 items-center justify-between whitespace-nowrap rounded-md text-sm font-body transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary/25 text-primary-foreground shadow hover:bg-primary/40",
        project: "bg-green-50 border border-input shadow-sm hover:bg-accent hover:text-accent-foreground",
        course: "bg-purple-50",
        publication: "bg-blue-50 text-destructive-foreground shadow-sm hover:bg-destructive/90",
        team: "bg-orange-50 border border-input shadow-sm hover:bg-accent hover:text-accent-foreground",
        tool: "bg-yellow-50 text-secondary-foreground shadow-sm hover:bg-secondary/80",
      },
      direction: {
        default: "flex flex-col", // horizontal
        vertical: "flex",
      },
    },
    defaultVariants: {
      variant: "default",
      direction: "default",
    },
  }
);

const renderTags = (tags) => {
  if (!tags) return null;
  const tagsArray = tags.split(",").map((tag) => tag.trim()); // Convierte el string en array y elimina espacios
  return tagsArray.map((tag, index) => (
    <Badge key={index}>{tag}</Badge> // Añade una key a cada Label
  ));
};

const Card = React.forwardRef(
  (
    {
      variant, direction, className,
      title, subtitle, description, img, tags, date, category,
      buttonText,
      cardType, // Añadido el prop cardType
    },
    ref
  ) => {
    const globalCard = (
      <article className={cn(CardVariants({ variant, direction, className }))}>
        <header className="w-full flex gap-4 justify-start">
          <Badge>{date}</Badge>
          <Badge>{category}</Badge>
        </header>
        <img src={img} alt="" />
        <div className="h-full w-full flex flex-col justify-between">
          <Heading level="h3">{title}</Heading>
          <Heading level="h5">{subtitle}</Heading>
          <Text>{description}</Text>
          <div className="tagsContainer h-fit min-h-12 flex flex-wrap gap-2">{renderTags(tags)}</div>
        </div>
        <footer className="w-full flex flex-row-reverse gap-4">
          <Button variant="" size="" className="">
            <FaceIcon />
            {buttonText}
          </Button>
          <Button variant="secondary" size="" className="">botón de prueba</Button>
        </footer>
      </article>
    );

    const projectCard = (
      <article className={cn(CardVariants({ variant, direction, className }))}>
        <header className="flex gap-4">
          <Badge>{date}</Badge>
          <Badge>{category}</Badge>
        </header>
        <div className="h-full w-full flex flex-col justify-between">
          <Heading level="h3">{title}</Heading>
          <Heading level="h5">{subtitle}</Heading>
          <Text>{description}</Text>
          <div className="tagsContainer h-fit min-h-12 flex flex-wrap gap-2">{renderTags(tags)}</div>
        </div>
        <footer></footer>
      </article>
    );

    const courseCard = (
      <article className={cn(CardVariants({ variant, direction, className }))}>
        <header className="flex gap-4">
          <Badge>{date}</Badge>
          <Badge>{category}</Badge>
        </header>
        <div className="h-full w-full flex flex-col justify-between">
          <Heading level="h3">{title}</Heading>
          <Heading level="h5">{subtitle}</Heading> {/* autores como jerarquía subtítulo -> decidir*/}
          <Text>{description}</Text> {/* autores como jerarquía descripción*/}
          <div className="tagsContainer h-fit min-h-12 flex flex-wrap gap-2">{renderTags(tags)}</div>
        </div>
        <footer></footer>
      </article>
    );

    const publicationCard = (
      <article className={cn(CardVariants({ variant, direction, className }))}>
        <header className="w-full flex gap-4 justify-start">
          <Badge>{date}</Badge>
          <Badge>{category}</Badge>
        </header>
        <div className="h-full w-full flex flex-col justify-between">
          <Heading level="h3">{title}</Heading>
          <Heading level="h5">{subtitle}</Heading>
          <Text>{description}</Text>
        </div>
        <footer className="w-full flex gap-4 justify-end">
          <Button variant="ghost">
            leer publicación
            <ArrowRightIcon />
          </Button>
        </footer>
      </article>
    );

    const teamCard = (
      <article className={cn(CardVariants({ variant, direction, className }))}>
        <img src={img} alt={img} className="min-h-16 min-w-16 object-cover"/>
        <div className="h-full w-full flex flex-col justify-between items-center">
          <Heading level="h3">{title}</Heading>
          <Heading level="h5">{subtitle}</Heading>
          <Text>{description}</Text>
          <div className="tagsContainer h-fit flex flex-wrap gap-2">{renderTags(tags)}</div>
        </div>
        <footer></footer>
      </article>
    );

    const toolCard = (
      <article className={cn(CardVariants({ variant, direction, className }))}>
        <header className="h-fit flex gap-4">
          <Badge>{date}</Badge>
          <Badge>{category}</Badge>
        </header>
        <div className="h-full w-full flex flex-col justify-between">
          <Heading level="h3">{title}</Heading>
          <Heading level="h5">{subtitle}</Heading>
          <Text>{description}</Text>
          <div className="h-fit min-h-12 flex flex-wrap gap-2">{renderTags(tags)}</div>
        </div>
        <footer></footer>
      </article>
    );

    // Usar el prop cardType para determinar qué tipo de tarjeta renderizar
    switch (cardType) {
      default:
        return globalCard;
      case "project":
        return projectCard;
      case "course":
        return courseCard;
      case "publication":
        return publicationCard;
      case "team":
        return teamCard;
      case "tool":
        return toolCard;
    }
  }
);

Card.displayName = "Card";

export { Card, CardVariants };
