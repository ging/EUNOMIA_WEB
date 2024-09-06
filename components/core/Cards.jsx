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
  "h-full min-w-20 p-4 inline-flex flex-col gap-4 items-center justify-between whitespace-nowrap rounded-md font-body text-sm text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary/25 shadow hover:bg-primary/40",
        project: "bg-green-50 border border-input shadow-sm hover:bg-accent hover:text-white",
        course: "bg-purple-50",
        publication: "bg-blue-50 shadow-sm hover:bg-destructive/90",
        team: "bg-orange-50 border border-input shadow-sm hover:bg-accent hover:text-white",
        tool: "p-0 bg-yellow-50 shadow-sm hover:bg-secondary/80",
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

const classesImg = cn(
  "bg-gray-200 min-h-16 min-w-16 object-cover"
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
      title, subtitle, description, img, tags, date, category, route,
      name, position, center, mail,
      buttonText,
      cardType,
    }, ref
  ) => {
    const globalCard = (
      <article className={cn(CardVariants({ variant, direction, className }))}>
        {/* card header */}
        {( (date || category) &&
          <header className="w-full flex gap-4 justify-start">
            <Badge>{date}</Badge>
            <Badge>{category}</Badge>
          </header>
        )}
        {/* card image */}
        {( img && 
          <img src={img} alt={img} className={classesImg}/>
        )}
        {/* card body */}
        {( (title || subtitle || description || tags) &&
          <div className="h-full w-full flex flex-col justify-between">
            <Heading level="h3">{title}</Heading>
            <Heading level="h5">{subtitle}</Heading>
            <Text>{description}</Text>
            <div className="tagsContainer h-fit min-h-12 flex flex-wrap gap-2">{renderTags(tags)}</div>
          </div>
        )}
        {/* card footer 
        hay que ver cómo hacer que los botones pueda haber dos botones con textos diferentes 
        */}
        {( buttonText &&
          <footer className="w-full flex flex-row-reverse gap-4">
            <Button variant="" size="" className="">
              <FaceIcon />
              {buttonText}
            </Button>
            <Button variant="secondary" size="" className="">{buttonText}</Button>
          </footer>
        )}
      </article>
    );

    // PROJECT
    const projectCard = (
      <article className={cn(CardVariants({ variant, direction, className }))}>
        <header className="w-full flex gap-4 justify-start">
          <Badge>{date}</Badge>
          <Badge>{category}</Badge>
        </header>
        <div className="h-full w-full flex flex-col justify-between">
          <Heading level="h3">{title}</Heading>
          <Heading level="h5">{subtitle}</Heading>
          {(description && <Text>{description}</Text>)}
          <div className="h-fit min-h-12 flex flex-wrap gap-2">{renderTags(tags)}</div>
        </div>
        <footer>
          <Button href={route}>Ver proyecto</Button> {/**revisar el href que no funciona el link */}
        </footer>
      </article>
    );

    // COURSE
    const courseCard = (
      <article className={cn(CardVariants({ variant, direction, className }))}>
        <header className="flex gap-4">
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

    // PUBLICATIONS - ok
    const publicationCard = (
      <article className={cn(CardVariants({ variant, direction, className }))}>
        <header className="w-full flex gap-4 justify-start">
          <Badge>{date}</Badge>
          <Badge>{category}</Badge>
        </header>
        <div className="h-full w-full flex flex-col justify-between">
          <Heading level="h3"><i>{title}</i></Heading>
          <Heading level="h5">{subtitle}</Heading>
        </div>
        <footer className="w-full flex gap-4 justify-end">
          <Button variant="secondary">
            leer publicación
            <ArrowRightIcon />
          </Button>
        </footer>
      </article>
    );

    // TEAM - ok
    const teamCard = (
      <article className={cn(CardVariants({ variant, direction, className }))}>
        {(img && <img src={img} alt={img} className={classesImg}/>)}
        {( (name || position || description || tags) &&
          <div className="h-full w-full flex flex-col justify-between items-center">
            <Heading level="h3" className={"text-inherit"}>{name}</Heading>
            <Heading level="h5">{position}</Heading>
            <Text>{mail}</Text>
          </div>
        )}
        {/* {( mail &&    
        <footer>
          <a href={mail}>{mail}</a>
        </footer>)} */}
      </article>
    );

    // TOOL - ok
    const toolCard = (
      <article className={cn(CardVariants({ variant, direction, className}))}>
        {(img && <img src={img} alt={img} className={classesImg}/>)}
        <div className="p-4 h-full w-full flex flex-col justify-between">
          <Heading level="h3">{title}</Heading>
          <Text>{description}</Text>
        </div>
        <footer className="p-4 w-full flex gap-4 justify-center">
          <Button variant="secondary">
            GitHub
          </Button>
          <Button variant="">
              Ver herramienta<ArrowRightIcon/>
          </Button>
        </footer>
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
