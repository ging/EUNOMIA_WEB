import clsx from "clsx";
import React from "react";
import Heading from "./Heading";
import button from "../ui/button";
import { FaceIcon } from "@radix-ui/react-icons";
import { LapTimerIcon } from "@radix-ui/react-icons";

const Card = ({ cardType = "normal" }) => {
  const commonCardClasses = clsx([
    "p-4 rounded bg-primary border-1 border-primary"
  ]);

  const classesForCardNormal = clsx([commonCardClasses, "card_normal"]);
  const normalCard = (
    <div className={classesForCardNormal}>
      <Heading>asdasdas</Heading>
      <button>
        <LapTimerIcon />
      </button>
    </div>
  );

  const classesForCardSpecial = clsx([commonCardClasses, "card_special"]);
  const specialCard = (
    <div className={classesForCardSpecial}>
      <Heading>asdasdas</Heading>
      <button className="m-auto" variant="">
        <FaceIcon className="" variant="destructive" />
        asdasdasdas
      </button>
    </div>
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
