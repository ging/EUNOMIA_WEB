"use client";

import * as React from "react";
import clsx from "clsx";

import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"
import Heading from "@/components/ui/Heading"
import Text from "@/components/ui/Text"

const CustomCard = React.forwardRef(({ className, ...props }, ref) => (
  <article
    ref={ref}
    className={cn("p-2 h-full w-full rounded-xl border flex flex-col justify-start gap-4 overflow-hidden shadow bg-primary-200 text-primary-800", className)}
    {...props} />
))
CustomCard.displayName = "CustomCard"

const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <header
    ref={ref}
    className={cn("w-full pb-3 flex gap-2 justify-start", className)}
    {...props} />

))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <Heading
    ref={ref}
    level="h3" 
    className={cn("font-semibold tracking-tight", className)}
    {...props} 
  />
))
CardTitle.displayName = "CardTitle"

const CardSubtitle = React.forwardRef(({ className, ...props }, ref) => (
  <Heading 
    ref={ref}
    level="h6" 
    className={cn(className)}
    {...props}/>
))
CardSubtitle.displayName = "CardSubtitle"

const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <Text
    ref={ref}
    className={cn("text-muted-foreground", className)}
    {...props} />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("h-fit w-full flex flex-col", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
  <footer
    ref={ref}
    className={cn("pt-6 w-full flex gap-3 justify-end items-center", className)}
    {...props} />
))
CardFooter.displayName = "CardFooter"

export { CustomCard, CardHeader, CardFooter, CardTitle, CardSubtitle, CardDescription, CardContent }
