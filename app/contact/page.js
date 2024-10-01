"use client";

import { useTranslation } from "react-i18next";

import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";

import { EnvelopeClosedIcon } from "@radix-ui/react-icons";
import { MobileIcon } from "@radix-ui/react-icons";
import { SewingPinIcon } from "@radix-ui/react-icons";
import P5BannerLight from "@/components/P5Banner_light";

import { Banner, BannerContent, BannerTitle, BannerVariants } from "@/components/core/Banner";

export default function Contact(props) {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  return (
    <div className={"about page_" + currentLang}>
      {/* <Header route={"/about"} /> */}
      <Banner className={BannerVariants({
        size: "sm",
      })}
     {...props}>
         <P5BannerLight className="absolute top-32 z-0 max-h-[90vh]" />
        <BannerContent className=" z-10 mt-0">
          <BannerTitle level="h2" className="">
            {t("contact.title")}
          </BannerTitle>
        </BannerContent>
      </Banner>

      <main className="standard_padding ">
        <div className="banner pb-8">
          <Text>{t("contact.body")}</Text>
        </div>
        <section className="">
          <div className="">
            <ul className="contact_info grid grid-cols-1 gap-8 pb-8 lg:grid-cols-3 lg:pb-0">
              <li className="text-center min-h-40 shadow-md py-6 border rounded border-secondary">
                <div className="flex flex-col gap-2 ">
                  <span className="content-center flex justify-center items-center">
                  <EnvelopeClosedIcon className=" h-7 w-7 text-primary" />
                  </span>
                  <div>
                  <Heading level="h5">
                    Email adress
                  </Heading>
                  <Text type="p">gi.internetng@upm.es</Text>
                  </div>
                </div>
              </li>
              <li className="text-center min-h-40 shadow-md py-6 border rounded border-secondary">
                <div className="flex flex-col gap-2 ">
                  <span className="content-center flex justify-center items-center">
                  <MobileIcon className=" h-7 w-7 text-primary" />
                  </span>
                  <div>
                  <Heading level="h5">
                    Phone
                  </Heading>
                  <Text type="p">91 336 73 31</Text> 
                  </div>
                </div>
              </li>
              <li className="text-center min-h-40 shadow-md py-6 border rounded border-secondary">
                <div className="flex flex-col gap-2 ">
                  <span className="content-center flex justify-center items-center">
                  <SewingPinIcon className=" h-7 w-7 text-primary" />
                  </span>
                  <div>
                  <Heading level="h5">
                    Location
                  </Heading>
                  <Text type="p" className={"pb-1"} > {t("contact.direction1")} <br /> </Text>
                  <Text type="small" className={"block leading-5"}>  {t("contact.direction2")} <br />
                    {t("contact.direction3")} <br /></Text> 
                  </div>
                </div>
              </li>                
            </ul>
          </div>
          {/* <div className="location col2">
            <div className="location_title">
              <h4>
                {" "}
                <FontAwesomeIcon className="icon" icon={faLocationDot} />{" "}
                {t("contact.title3")}
              </h4>
            </div>
            <div className="location_info ">
              <div className="location_map map-responsive">
                <iframe
                  title="maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.0248536844406!2d-3.7286225846430923!3d40.45258687936105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422834b7a8fb4d%3A0x2a3c66a12ada73f9!2sUPM+Escuela+T%C3%A9cnica+Superior+de+Ingenieros+de+Telecomunicaci%C3%B3n!5e0!3m2!1ses!2ses!4v1561459882911!5m2!1ses!2ses"
                  width="600"
                  height="450"
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowfullscreen
                ></iframe>
              </div>
              <div className="map_info 2xl:my-20 xl:my-16 lg:my-12 md:my-8 sm:my-4 xs:my-2">
                {" "}
                <p>E.T.S. DE INGENIEROS DE TELECOMUNICACIÓN</p>
                <p>Av. Complutense, 30, 28040 Madrid Edificio B</p>
              </div>
            </div>
          </div> */}
        </section>
      </main>
    </div>
  );
}
