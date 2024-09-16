"use client";

import React from "react";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useTranslation } from "react-i18next";
import { Badge } from "@/components/ui/badge";

export default function FilterText( {year, changeYear, items} ) {
  const { t } = useTranslation();
  function getYears(items) {
    // función para obtener todos los años de todas las
    // publicaciones, y mostrarlos en el desplegable de filtrado por fecha
    let yearSet = new Set();
    for (let i in items) {
      try {
        const date = items[i].date[0];
        yearSet.add(date.toString());
      } catch (e) {}
    }
    return Array.from(yearSet);
  }
  let years = getYears(items);

  return (
   <>
    <Label htmlFor="year">{t("publications.filter.fieldTitle3")}</Label>
    <Select
      className="filter"
      id="filter_year"
      onValueChange={(value) =>
        changeYear(value === "all" ? undefined : value)
      }
    >
      <SelectTrigger className="w-full" htmlFor="publication">
        <SelectValue
          onChange={(e) =>
            changeYear(
              e.target.value === "all" ? undefined : e.target.value
            )
          }
        ></SelectValue>
      </SelectTrigger>
      <SelectContent id="year" name="year">
        <SelectItem key={"all"} value={"all"}>
          {t("publications.filter.fieldOpt6")}
        </SelectItem>
        {years.map((y) => (
          <SelectItem key={y} value={y}>
            {y}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  </>
  )
}