"use client";

import clsx from "clsx";
import React from "react";

import Heading from "../ui/Heading";
import { Button } from "../ui/button";
import { FaceIcon } from "@radix-ui/react-icons";

const Card = ({ cardType = "normal", title, buttonText }) => {
  const commonCardClasses = clsx([
    "p-4 rounded bg-snow border-1 border-primary"
  ]);

  const classesForCardNormal = clsx([commonCardClasses, "card_normal"]);
  const normalCard = (
    <article className={classesForCardNormal}>
      <div className="cardBody">
        <Heading level="h3">
          {title}
        </Heading>
      </div>
      <footer className="cardFooter">
        <Button variant="secondary" size="">
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
};

export default Card;
