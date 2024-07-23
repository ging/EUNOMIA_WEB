"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
} from "@/components/ui/select";

import { useTranslation } from "react-i18next";

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
    <div className="filters">
      <div className="filter">
        <label htmlFor="search">{t("publications.filter.fieldTitle")}</label>
        <Input
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
      <label htmlFor="search">{t("publications.filter.fieldTitle2")}</label>
      <Select
        className="filter"
        onValueChange={(value) =>
          props.changeType(value === "all" ? undefined : value)
        }
      >
        <SelectTrigger className="publicationType" htmlFor="publication">
          <SelectValue  onChange={(e) =>
            props.changeType(
              e.target.value === "all" ? undefined : e.target.value)}></SelectValue>
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
      <label id="year_label" htmlFor="year">
        {t("publications.filter.fieldTitle3")}
      </label>
      <Select
        className="filter"
        id="filter_year"
		onValueChange={(value) =>
			props.changeYear(value === "all" ? undefined : value)
		  }
    
      >
        <SelectTrigger className="publicationType" htmlFor="publication">
          <SelectValue onChange={(e) =>
            props.changeYear(
              e.target.value === "all" ? undefined : e.target.value)}></SelectValue>
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
      {props.results === undefined ? null : (
        <div className="research_results">
          <p className="">
            {" "}
            {t("publications.filter.text")}
            <b> {props.results} </b>{" "}
          </p>
        </div>
      )}
    </div>
  );
}
