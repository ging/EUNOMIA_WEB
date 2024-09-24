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

export default function FilterCategory( {category, changeCategory, categories } ) {
  const { t } = useTranslation();
  return (
    <>
    <Label htmlFor="search">{t("publications.filter.fieldTitle2")}</Label>
          <Select
            className="filter flex flex-col"
            onValueChange={(value) =>
              changeCategory(value === "all" ? undefined : value)
            }
          >
            <SelectTrigger className="w-full" htmlFor="publication">
              <SelectValue
                onChange={(e) =>
                  changeCategory(
                    e.target.value === "all" ? undefined : e.target.value
                  )
                }
              ></SelectValue>
            </SelectTrigger>
            <SelectContent id="publication" name="publication">
              {categories.map((category, index) => (
              <SelectItem key={index} value={category}>
                {t(`publications.filter.fieldOpt${index + 1}`)}
              </SelectItem>
              ))}
            </SelectContent>
          </Select>
      </>
  )
}