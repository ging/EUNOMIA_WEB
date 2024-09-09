"use client";

import React, { useState } from "react";
import Link from "next/link";
import { projects } from "@/constants/projects";
import { useTranslation } from 'react-i18next';
import { Card , CardVariants } from "@/components/core/Cards";

export default function projectCards(props) {
  const [projectCards, setProjectCards] = useState(projects);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { t } = useTranslation();

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === "all") {
      setProjectCards(projects); // Si la categoría seleccionada es "all", se restablecen todas las tarjetas (myProjectCards
    } else {
      const filteredCards = projects.filter(
        (card) => card.category === category // Si no, se filtran las tarjetas de acuerdo a la categoría seleccionada.
      // se accede a la categoría de la card. Si esta es igual que la categoría seleccionada, se añade al array nuevo de "filteredCards"
      );
      setProjectCards(filteredCards);
      
    }
  };
  console.log(projects)


  return (
    <div>
      <div className="filter_options flex">
        <button className={`button_filter ${selectedCategory === "all" ? "selected" : ""}`} onClick={() => handleCategoryChange("all")}>{t('projects.filterTitle1')}</button>
        <button className={`button_filter ${selectedCategory === "ind" ? "selected" : ""} `} onClick={() => handleCategoryChange("ind")}>
          {t('projects.filterTitle2')}
        </button>
        <button className={`button_filter ${selectedCategory === "erg" ? "selected" : ""}`} onClick={() => handleCategoryChange("erg")}>
        {t('projects.filterTitle3')}
        </button>
        <button className={`button_filter ${selectedCategory === "other" ? "selected" : ""}`} onClick={() => handleCategoryChange("other")}>{t('projects.filterTitle4')}</button>
      </div>
      <div className="project_cards my-4 sm:my-6 lg:my-10 sm:grid sm:grid-cols-2 sm:gap-4">
        {projectCards.map(
          ({ date, route, title, subtitle, tags, category }, index) => (
            <Card
            key={index}
          cardType={"project"}
          className={CardVariants({
            variant: "publication",
          })}
          date={date}
          category={category}
          title={title}
          subtitle={subtitle}
          tags={tags}
          route={route}
        ></Card>         
          )    
        )}
      </div>
    </div>
  );
}
