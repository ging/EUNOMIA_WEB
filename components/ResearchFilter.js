"use client";

import React from "react";
import { Input } from "@/components/ui/input";
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

export default function Filters(props) {
  const { t } = useTranslation();
  function getYears(papers) {
    let yearSet = new Set();
    for (let i in papers) {
      try {
        const date = papers[i].date[0];
        yearSet.add(date.toString());
      } catch (e) {}
    }
    return Array.from(yearSet);
  }

  let years = getYears(props.papers);

  return (
    <div className="filters standard_margin-xl-x">
      <div className="filter">
        <Label htmlFor="search">{t("publications.filter.fieldTitle")}</Label>
        <Input
          className="w-full"
          key={" "}
          type={"text"}
          value={props.search || ""}
          onChange={(e) =>
            props.changeSearch(
              e.target.value === "" ? undefined : e.target.value
            )
          }
        />
      </div>
      <div className="container_selects gap_div flex flex-row">
        <div className="container_select_label w-1/2">
          <Label htmlFor="search">{t("publications.filter.fieldTitle2")}</Label>
          <Select
            className="filter flex flex-col"
            onValueChange={(value) =>
              props.changeType(value === "all" ? undefined : value)
            }
          >
            <SelectTrigger className="w-full" htmlFor="publication">
              <SelectValue
                onChange={(e) =>
                  props.changeType(
                    e.target.value === "all" ? undefined : e.target.value
                  )
                }
              ></SelectValue>
            </SelectTrigger>
            <SelectContent id="publication" name="publication">
              <SelectItem key={"all"} value={"all"}>
                {t("publications.filter.fieldOpt")}
              </SelectItem>
              <SelectItem key={"journal"} value={"article-journal"}>
                {t("publications.filter.fieldOpt2")}
              </SelectItem>
              <SelectItem key={"conference"} value={"paper-conference"}>
                {t("publications.filter.fieldOpt3")}
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="container_select_label w-1/2">
          <Label htmlFor="year">{t("publications.filter.fieldTitle3")}</Label>
          <Select
            className="filter"
            id="filter_year"
            onValueChange={(value) =>
              props.changeYear(value === "all" ? undefined : value)
            }
          >
            <SelectTrigger className="w-full" htmlFor="publication">
              <SelectValue
                onChange={(e) =>
                  props.changeYear(
                    e.target.value === "all" ? undefined : e.target.value
                  )
                }
              ></SelectValue>
            </SelectTrigger>
            <SelectContent id="year" name="year">
              <SelectItem key={"all"} value={"all"}>
                {t("publications.filter.fieldOpt")}
              </SelectItem>
              {years.map((y) => (
                <SelectItem key={y} value={y}>
                  {y}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      {props.results === undefined ? null : (
        <Badge className="research_results">
          <p className="">
            {" "}
            {t("publications.filter.text")}
            <b> {props.results} </b>{" "}
          </p>
        </Badge>
      )}
    </div>
  );
}
