"use client";

import { useEffect, useState } from "react";
import { myteam } from "@/constants/team";
import { useTranslation } from "react-i18next";

// Components
import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import { Card, CardVariants } from "@/components/core/Cards";
import { CardStackIcon } from "@radix-ui/react-icons";


export default function Team(props) {
  const [team, setTeam] = useState(myteam);
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const renderMembers = (team) => {
    return team.map(
      ({
        name,
        description,
        position,
        img,
        github,
        email,
        center,
        roleTranslationKey,
      }) => {
        const emailAddress = email ? email.split("@") : null;
        const translatedRole = t(`${roleTranslationKey}`);
        const translatedPosition = t(position);
        return (
          <Card
            cardType={"team"}
            className={CardVariants({
              variant: "team",
            })}
            img={img}
            name={name}
            position={translatedPosition}
            role={translatedRole}
            center={center}
            email={email}
          ></Card>
        );
      }
    );
  };

  return (
    <main className={"team page_" + currentLang }>
      {/* <Header route={"/team"} />   */}
      <main className="standard_margin">
        <Heading level="h2" className="mx-auto mb-8 sm:mx-0 text-center">{t("team.title")}</Heading>
        <section className="flex flex-wrap justify-center xs:gap-x-6 md:gap-x-8 gap-y-8 md:gap-y-12 ">
          {team ? renderMembers(team) : <p>No members found.</p>}
        </section>
      </main>
    </main>
  );
}
