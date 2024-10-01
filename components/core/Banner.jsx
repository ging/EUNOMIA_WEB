"use client";

import * as React from "react";

import Heading from "../ui/Heading";
import Text from "../ui/Text";
import { Button, ButtonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

// la imagen de fondo del banner está enganchada en tailwind.config

const BannerVariants = cva(
  "text-white bg-main bg-cover bg-center flex gap-8 justify-start items-center",
  {
    variants: {
      size: {
        sm: 
          "min-h-[30vh] md:min-h-[30vh] ",
        default:
          "min-h-[80vh] md:min-h-[80vh]",
        lg:
          "min-h-[80vh] md:min-h-[80vh]",
      },

    },
    defaultVariants: {

      size: "default",
    },
  }
);

const Banner = React.forwardRef(({ className, size, ...props }, ref) => (
  <section
    ref={ref}
    className={cn(BannerVariants({  className, size})
    )}
    {...props}
  />
));
Banner.displayName = "Banner";

const BannerContent = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    level="h1"
    className={cn("standard_padding h-fit my-12", className)}
    {...props}
  />
));
BannerContent.displayName = "BannerContent";

const BannerTitle = React.forwardRef(({ className, ...props }, ref) => (
  <Heading
    ref={ref}
    level="h1"
    className={cn( className)}
    {...props}
  />
));
BannerTitle.displayName = "BannerTitle";

const BannerDescription = React.forwardRef(({ className, ...props }, ref) => (
    <Text
    ref={ref}
    type="short-p"
    className= {cn("text-snow mb-4", className)}
    {...props} />
    ))
BannerDescription.displayName = "BannerDescription"

const BannerButton = React.forwardRef(({ className, ...props }, ref) => (
  <Button
    href="#"
    className={`${ButtonVariants({
      variant: "primary",
      size: "default",
      radius: "rounded_sm",
    })}`}
    {...props}
  ></Button>
));
BannerButton.displayName = "BannerButton";

const BannerImg = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("hidden md:block", className)}>
    <img
      className="object-contain"
      src="assets/logos/eunomia_icon_light.svg"
      alt="icon"
    />
    
  </div>
));
BannerImg.displayName = "BannerImg";

export {
  Banner,
  BannerTitle,
  BannerDescription,
  BannerContent,
  BannerImg,
  BannerButton,
  BannerVariants
};
