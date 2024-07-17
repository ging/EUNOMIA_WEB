import React from "react";
import clsx from "clsx";

/* 
  ------------------------------------------------------------------
  Componente para los titulos y etiquetas <h> -> jerarquías de texto 
  ------------------------------------------------------------------
*/

const Heading = ({ level = "h1", children, className }) => {
  // Determinar el componente HTML según el nivel
  let Component;
  switch (level) {
    case "h1":
      Component = "h1";
      break;
    case "h2":
      Component = "h2";
      break;
    case "h3":
      Component = "h3";
      break;
    case "h4":
      Component = "h4";
      break;
    case "h5":
      Component = "h5";
      break;
    case "h6":
      Component = "h6";
      break;
    default:
      Component = "h1"; // Por defecto, usar h1 si no se especifica nivel válido
      break;
  }

  // clsx, aplica clases según el valor del atributo level de manera dinámica
  const classes = clsx([
    "font-bold",
    "underlined",
  
    {
      "text-4xl mb-6": level === "h1", // Aplicar "adasd" si el nivel es h1
      "text-3xl mb-4": level === "h2",
      "text-2xl mb-4": level === "h3",
      "text-xl mb-2": level === "h4",
      "text-base mb-2": level === "h5",
      "text-sm mb-2": level === "h6",
    },
    className
  ])

  return <Component className={classes}>{children}</Component>;
};

export default Heading;
