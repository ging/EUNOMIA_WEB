import React from "react";
import clsx from "clsx";

/* 
  ------------------------------------------------------------------
  Componente para los titulos y etiquetas <h> -> jerarquías de texto 
  ------------------------------------------------------------------
*/

const Text = ({ type = "h1", children, className }) => {
  // Determinar el componente HTML según el nivel
  let Component;
  switch (type) {
    case "p":
      Component = "p";
      break;
    case "small":
      Component = "small";
      break;
    case "button":
      Component = "button";
      break;
    default:
      Component = "p"; // Por defecto, usar h1 si no se especifica nivel válido
      break;
  }

  // clsx, aplica clases según el valor del atributo level de manera dinámica
  const classes = clsx([
    "underlined",
    {
      "text-base mb-6": type === "p", // Aplicar "adasd" si el nivel es h1
      "text-sm mb-4": type === "small",
      "text-xs mb-4": type === "button", 
    },
    className
  ])

  return <Component className={classes}>{children}</Component>;
};

export default Text;
