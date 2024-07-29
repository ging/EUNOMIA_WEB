"use client";

import { useEffect, useState } from "react";
import Header from "@/components/core/Header";
import Footer from "@/components/core/Footer";
import { useTranslation } from "react-i18next";

// Components
import { Button, ButtonVariants } from "@/components/ui/button";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";

export default function DesignSystem(props) {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className={"page_" + currentLang}>
      <div className="standard_margin">
      <Heading level="h1">Sistema de diseño</Heading>
      <Heading level="h3">Botones</Heading>
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
          <Button
            href="#"
            className={ButtonVariants({
              variant: "default",
              size: "sm",
              radius: "rounded_sm",
            })}
            {...props}
          >
            Botón icon
          </Button>
   

        </div>
        <Heading level="h5">Radius</Heading>
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
              size: "sm",
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
              size: "sm",
              radius: "rounded_full",
            })}
            {...props}
          >
            Radius full
          </Button>
   

        </div>
      </div>
    </main>
  );
}
