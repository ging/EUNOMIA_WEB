"use client";

import { useEffect, useState } from "react";
import Filters from "@/components/ResearchFilter";
import Link from "next/link";
import { mypublications } from "@/constants/publications";

import { useTranslation } from "react-i18next";
import { Card, CardVariants } from "@/components/core/Cards";
import { Button, ButtonVariants } from "@/components/ui/button";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import Divider from "@/components/ui/divider";


export default function Research() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const [state, setState] = useState({
    papers: mypublications,
    search: "",
    year: undefined,
    type: undefined,
    papersToShow: 6, // Number of papers to show initially
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { papers, search, year, type, papersToShow } = state;

  let papersFiltered = papers.filter((paper) => {
    return (
      (!search ||
        search
          .toLowerCase()
          .replace(new RegExp(/\s/g), "")
          .replace(new RegExp(/[àáâãäå]/g), "a")
          .replace(new RegExp(/æ/g), "ae")
          .replace(new RegExp(/ç/g), "c")
          .replace(new RegExp(/[èéêë]/g), "e")
          .replace(new RegExp(/[ìíîï]/g), "i")
          .replace(new RegExp(/ñ/g), "n")
          .replace(new RegExp(/[òóôõö]/g), "o")
          .replace(new RegExp(/œ/g), "oe")
          .replace(new RegExp(/[ùúûü]/g), "u")
          .replace(new RegExp(/[ýÿ]/g), "y")
          .replace(new RegExp(/\W/g), "")
          .split(" ")
          .every((item) =>
            paper.content
              .toLowerCase()
              .replace(new RegExp(/\s/g), "")
              .replace(new RegExp(/[àáâãäå]/g), "a")
              .replace(new RegExp(/æ/g), "ae")
              .replace(new RegExp(/ç/g), "c")
              .replace(new RegExp(/[èéêë]/g), "e")
              .replace(new RegExp(/[ìíîï]/g), "i")
              .replace(new RegExp(/ñ/g), "n")
              .replace(new RegExp(/[òóôõö]/g), "o")
              .replace(new RegExp(/œ/g), "oe")
              .replace(new RegExp(/[ùúûü]/g), "u")
              .replace(new RegExp(/[ýÿ]/g), "y")
              .replace(new RegExp(/\W/g), "")
              .includes(item)
          )) &&
      (!year ||
        (paper.date && paper.date[0] && paper.date[0].toString() === year)) &&
      (!type || (paper.type && paper.type === type))
    );
  });

  const handleLoadMore = () => {
    setState((prevState) => ({
      ...prevState,
      papersToShow: prevState.papersToShow + 3,
    }));
  };

  return (
    <div className={"research page_" + currentLang}>
      <div className="standard_margin" id="banner-publications">
        <Heading level="h1">{t("publications.title")}</Heading>
        <Text type="p">
          Este apartado es una recopilación de las publicaciones del equipo de
          la UPM y de la UC3M. Las publicaciones de la UPM están centrados en el
          tema de computación bla bla bla etc y los de la UC3M se centran en
          sistemas de redes de no se cuantitos.
        </Text>
      </div>
      <main className="research">
        <Filters
          search={search} // filtro 1: busqueda de texto
          year={year} // filtro 2: busqueda por año
          type={type} // filtro 3: busqueda por tipo de publicacion
          papers={papers} // lista de papers
          changeSearch={(search) => setState({ ...state, search: search })} // función para cambiar estado de texto de busqueda
          changeYear={(year) => setState({ ...state, year: year })} // función para cambiar estado de input del año
          changeType={(type) => setState({ ...state, type: type })} // función para cambiar estado de input del tipo de publicacion
          results={papersFiltered instanceof Array ? papersFiltered.length : 0}
        />
        <section className="flex flex-col gap-4 standard_margin">
          {papersFiltered
            .slice(0, papersToShow)
            .map(({ date, category, doi, author, title, journal }, ind) => {
              return (
                <Card
                  cardType={"publication"}
                  className={CardVariants({
                    variant: "publication",
                  })}
                  date={date}
                  category={category}
                  title={title}
                  author={author}
                  doi={doi}
                ></Card>
              );
            })}
        </section>

        <div className="mb-4 w-full flex justify-center">
          {papersFiltered.length > papersToShow && (
            <Button
              onClick={handleLoadMore}
              className={
                ButtonVariants({
                  variant: "default",
                  size: "lg",
                  radius: "rounded_sm",
                }) + " w-fit mt-4 my-auto"
              }
            >
              {t("publications.button2")}
            </Button>
          )}
        </div>
        <Divider/>
      </main>
    </div>
  );
}
