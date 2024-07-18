"use client";

import { useEffect, useState } from "react";
import Header from "@/components/core/Header";
import Footer from "@/components/Footer";
import { myteam } from "@/constants/team";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

// Components
import { Button } from "@/components/ui/button";
import Heading from "@/components/core/Heading";
import Text from "@/components/core/Text";


export default function Team(props) {
  const [team, setTeam] = useState(myteam);
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const renderMembers = (members) => {
    return members.map(
      ({
        name,
        description,
        role,
        position,
        photo,
        github,
        email,
        center,
        roleTranslationKey,
      }) => {
        const emailAddress = email ? email.split("@") : null;
        const translatedRole = t(`${roleTranslationKey}`);
        const translatedPosition = t(position);
        return (
          <div className="teammate flex flex-col" key={name}>
            <div className="mate_img h-60 rounded-t-xl bg-slate-600">
              <a href={github} target="_blank" rel="noopener noreferrer">
                <img 
                  alt={"Team member"}
                  src={/*process.env.PUBLIC_URL +  */photo}
                  className="grayscale rounded-t-xl h-60 w-full object-cover"
                />
              </a>
            </div>
            <div className="mate_info  p-6 pb-8 rounded-b-xl border shadow grow justify-between flex flex-col text-center">
              <div className="mate_name">
                <Heading level="h3" className="font-regular">{name}</Heading>
        
              </div>
              {/* <div className="mate_role">
                <span>
                  <small>{translatedRole}</small>{" "}
                </span>
              </div> */}
              {/* position */}
              {/* {position ? (
                <div className="mate_position">
                  <p>{center}</p>
                </div>
              ) : null} */}
              {/* mail */}
              {/* <div className="mate_email">
                <small>{email}</small>
              </div> */}
              {/* description */}
              <div className="mate_coordination">
                <span className={position === "Coordinator" ? "coordinator" : ""}>
                  {translatedRole} {translatedPosition}
                </span>
              </div>
              {/* description */}
              {/* {description ? (
                <div className="mate_description">
                  <p>{description}</p>
                </div>
              ) : null} */}
            </div>
          </div>
        );
      }
    );
  };

  return (
    <main className={"team page_" + currentLang }>
      {/* <Header route={"/team"} />   */}
      <main className="standard_margin ">
        <Heading level="h1">{t("team.title")}</Heading>
        <section className="teammates flex flex-col gap-x-6 gap-y-10 sm:grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {team["UPM Team"]?.members ? renderMembers(team["UPM Team"].members) : <p>No members found.</p>}
        </section>
      </main>
    </main>
  );
}
