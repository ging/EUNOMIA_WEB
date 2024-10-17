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
          {/* <Heading level="h4">{t("contact.title2")}</Heading> */}
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
                  {t("contact.email")}
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
                  {t("contact.phone")}
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
                  {t("contact.location")}
                  </Heading>
                  <Text type="p" className={"pb-1"} > {t("contact.direction1")} <br /> </Text>
                  <Text type="small" className={"block leading-5"}>  {t("contact.direction2")} <br />
                    {t("contact.direction3")} <br /></Text> 
                  </div>
                </div>
              </li>                
            </ul>
          </div>
      
        </section>
      </main>
    </div>
  );
}
