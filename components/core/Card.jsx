"use client";

import clsx from "clsx";
import * as React from "react";

import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

import Heading from "../ui/Heading";
import Text from "../ui/Text";
import { Button } from "../ui/button";
import { FaceIcon } from "@radix-ui/react-icons";

const Card = React.forwardRef(({ cardType = "normal", title, subtitle, description, img, tags, date, category, buttonText }, ref) => {
  const commonCardClasses = clsx([
    "p-4 rounded bg-snow border-1 border-primary flex flex-col justify-between",
  ]);

  const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex flex-col space-y-1.5 p-2 ", className)}
      {...props} />
  
  ))
  CardHeader.displayName = "CardHeader"

  const renderTags = () => {
    if (!tags) return null;
    const tagsArray = tags.split(',').map(tag => tag.trim()); // Convierte el string en array y elimina espacios
    return tagsArray.map((tag, index) => (
      <span key={index} className="tag">
        {tag}
      </span>
    ));
  };

  const classesForCardNormal = clsx([commonCardClasses, "card_normal"]);
  const normalCard = (
    <article className={classesForCardNormal}>
      <CardHeader></CardHeader>
      <div className="cardBody">
        <Heading level="h3">{title}</Heading>
        <Heading level="h5">{subtitle}</Heading>
        <Text>{description}</Text>
      </div>
      <footer className="cardFooter flex">
        <div className="tagsContainer">
          {renderTags()}
        </div>
        <Button variant="secondary" size="" className="">
          <FaceIcon />
          {buttonText}
        </Button>
      </footer>
    </article>
  );

  const classesForCardSpecial = clsx([commonCardClasses, "card_special"]);
  const specialCard = (
    <article className={classesForCardSpecial}>
      <Heading>{title}</Heading>
      <Button className="m-auto" variant="">
        <FaceIcon className="" variant="destructive" />
        asdasdasdas
      </Button>
    </article>
  );

  // <Card key={project.id} className="flex flex-col min-h-[200px]">
  //   <CardHeader>
  //     <div>{project.date}</div>
  //   </CardHeader>

  //   <CardContent className="flex flex-col gap-2">
  //     <CardTitle>{project.title}</CardTitle>
  //     <CardDescription>{project.subtitle}</CardDescription>
  //   </CardContent>

  //   <CardFooter>
  //     <Button variant="" size="sm" className="capitalize">
  //       {project.category}
  //       <a href={project.route} target="blank">
  //         Enlace
  //       </a>
  //     </Button>
  //   </CardFooter>
  // </Card>

  switch (cardType) {
    case "normal":
      return normalCard;
      break;
    case "special":
      return specialCard;
      break;
    default:
      return normalCard;
      break;
  }
});

export default Card;
