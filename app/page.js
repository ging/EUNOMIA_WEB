"use client";
import * as React from "react";

import { useEffect, useState } from "react";
import Link from "next/link";
import { myProjectCards } from "@/constants/projectsCards.js";
import { useTranslation } from "react-i18next";
import { buttonVariants } from "@/components/ui/button";

// Layout
import Header from "@/components/core/Header";
import Footer from "@/components/Footer";

// Components
import { Button } from "@/components/ui/button";
import Heading from "@/components/core/Heading";
import Text from "@/components/core/Text";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  CardSubtitle,
} from "@/components/ui/card";

// UI
export default function Projects() {
  // const [projects, setProjects] = useState(myprojectCards);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // <p className="basis-3/4">{t("project.Intro.title")}</p>

  return (
    <main>
      <Header />
      <section className="standard_padding">
        <div className="h-64 bg-slate-300">
          Imagen hero con logo etc
          <Heading level="h2" className="">
            {t("front.title")}
          </Heading>
          <Text type="p">{t("front.description")}</Text>
        </div>
        <Link href="#" className={buttonVariants({ variant: "outline" })}>
          {t("front.action-button")}
        </Link>
      </section>
      <section className="standard_margin">
        <Heading level="h2" className="">
          {t("front.section1Title")}
        </Heading>
        <Text type="p"> {t("front.section1Description")}</Text>
        <Heading level="h4" className="">
          {t("front.section1Subtitle")}
        </Heading>
        {/* Cards con iconos */}
        <div className="flex flex-row gap-2">
          <Card cardType="normal" className="text-center content-center">
            <div className="icon flex justify-center items-center">
              <svg
                width="108"
                height="154"
                viewBox="0 0 108 154"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M105.571 89.8613C104.616 87.4691 103.18 85.2988 101.351 83.4852L80.9737 63.0975C78.2961 60.4001 74.8774 58.559 71.1513 57.8077C67.4251 57.0565 63.5599 57.4292 60.046 58.8783C57.6486 59.8681 55.4583 61.2993 53.5895 63.0975L52.2666 64.4357L50.9441 63.0975C48.2665 60.4001 44.8475 58.559 41.1213 57.8077C37.3952 57.0565 33.53 57.4292 30.016 58.8783C27.6205 59.8717 25.4309 61.3025 23.5595 63.0975L6.56827 80.1004C3.28538 83.3506 1.28288 87.6739 0.927204 92.2793C0.571525 96.8847 1.88648 101.464 4.6314 105.18L11.6234 98.1895C11.1452 97.306 10.8202 96.3479 10.6627 95.3557C10.5053 94.3754 10.5053 93.3763 10.6627 92.396C10.8416 91.3891 11.1653 90.4135 11.6234 89.4992C12.0894 88.5687 12.7005 87.7184 13.4342 86.9802L30.4412 69.8514C31.3588 68.9165 32.4717 68.1961 33.7006 67.7418C36.0509 66.8602 38.6414 66.8602 40.9918 67.7418C42.1677 68.1925 43.22 68.9155 44.0624 69.8514L61.3055 87.0905C61.5622 87.2664 61.7556 87.5203 61.8568 87.8146C61.9736 88.1212 62.0325 88.4469 62.0301 88.775C62.0426 89.1036 61.984 89.431 61.8591 89.7352C61.7341 90.0394 61.5453 90.3132 61.3055 90.5382C60.8155 90.9831 60.172 91.2202 59.5104 91.1995C59.1761 91.1976 58.8448 91.1336 58.5339 91.0105C58.2455 90.9064 57.9938 90.7204 57.8096 90.4753L42.0625 74.7319L14.0797 102.582C12.9635 103.695 12.0851 105.024 11.4973 106.486C10.8972 107.961 10.587 109.538 10.5839 111.131C10.5391 114.051 11.5706 116.887 13.4815 119.097C15.376 121.326 18.0526 122.746 20.9614 123.064C21.3166 125.632 22.4802 128.019 24.2838 129.881C26.0883 131.774 28.4914 132.987 31.0867 133.313C31.4207 135.914 32.6084 138.332 34.4634 140.186C36.3184 142.041 38.7361 143.228 41.3382 143.562C41.6983 146.457 43.1449 149.108 45.3853 150.977C47.0782 152.472 49.162 153.455 51.3931 153.809C53.6242 154.163 55.9101 153.874 57.983 152.976C59.4506 152.353 60.7824 151.449 61.904 150.316L101.461 110.957C105.078 107.346 107.116 102.45 107.13 97.3394C107.101 94.7692 106.571 92.2292 105.571 89.8613ZM96.7051 100.724C96.2468 101.946 95.5269 103.053 94.5952 103.967L55.6525 142.979L55.5579 143.074L55.353 143.247L55.18 143.389C54.9125 143.622 54.6223 143.827 54.3138 144.003C54.0162 144.155 53.6876 144.236 53.3534 144.239C53.265 144.255 53.174 144.255 53.0855 144.239C52.2168 144.332 51.3406 144.158 50.5739 143.739C49.8071 143.321 49.1865 142.678 48.7958 141.896C48.405 141.115 48.2629 140.233 48.3879 139.369C48.5129 138.504 48.899 137.699 49.4951 137.06L49.5897 136.95L65.5575 121.49L62.0771 118.042L46.4875 133.423L46.1884 133.754C45.3844 134.558 44.294 135.009 43.157 135.009C42.02 135.009 40.9295 134.558 40.1256 133.754C39.3216 132.95 38.87 131.86 38.87 130.723C38.87 129.587 39.3216 128.496 40.1256 127.693L56.4083 111.477L52.5503 108.218L37.1338 123.536L36.1573 124.497C35.3031 125.084 34.2643 125.34 33.235 125.217C32.2058 125.094 31.2566 124.602 30.5643 123.83C29.8719 123.059 29.4839 122.062 29.4728 121.026C29.4617 119.99 29.8286 118.985 30.5043 118.199L30.5985 118.121L46.5663 102.141L43.1178 99.1026L27.3706 115.098V115.192C26.6638 115.885 25.7387 116.312 24.7529 116.4C23.7671 116.487 22.7812 116.231 21.9629 115.675C21.1446 115.118 20.5446 114.296 20.2644 113.347C19.9842 112.398 20.0411 111.381 20.4259 110.469V110.328C20.4767 110.229 20.5348 110.134 20.5993 110.044C20.8554 109.715 21.1287 109.4 21.4181 109.1L21.6227 108.895L42.094 88.4286L51.1328 97.3551C52.2453 98.4646 53.5822 99.3234 55.0539 99.8741C56.562 100.449 58.1641 100.737 59.778 100.724C61.3532 100.752 62.9177 100.462 64.3784 99.8723C65.8391 99.2824 67.1662 98.4044 68.2802 97.2907C69.3942 96.177 70.2725 94.8504 70.8626 93.3901C71.4526 91.9297 71.7422 90.3655 71.7145 88.7907C71.7192 87.2254 71.4363 85.6726 70.8799 84.2094C70.3006 82.7366 69.3901 81.4168 68.2187 80.3523L59.3055 71.2998L60.6284 69.9774C61.546 69.0424 62.6593 68.322 63.8882 67.8678C66.2385 66.9861 68.8286 66.9861 71.179 67.8678C72.3832 68.3074 73.4636 69.0311 74.3284 69.9774L94.7997 90.4438C95.7462 91.3083 96.4702 92.3885 96.91 93.5925C97.353 94.7699 97.577 96.0184 97.5712 97.2764C97.4794 98.4663 97.1865 99.6321 96.7051 100.724Z"
                  fill="#24234C"
                />
                <path
                  d="M62.329 28.9806L77.6194 24.1001L73.8556 14.1188L66.2815 17.4879L60.266 20.117C60.9939 18.9107 61.3753 17.5271 61.3682 16.1182L61.447 0.04422L50.8177 0.579501L51.6523 8.82903L52.4555 16.8739C51.4981 15.3675 50.0353 14.2513 48.3295 13.7252L33.0864 8.65585L30.2991 18.9993L38.3618 20.731L46.0935 22.4313C44.4041 22.8922 42.925 23.9207 41.9049 25.3438L32.4566 38.3164L41.3694 44.1729L45.5265 37.0254L49.5894 30.0983C49.4932 31.8778 50.0161 33.6356 51.0695 35.0732L60.5178 48.1245L68.8481 41.4178L63.3051 35.2464L57.9354 29.201C59.3892 29.5665 60.9191 29.4898 62.329 28.9806Z"
                  fill="#24234C"
                />
              </svg>
            </div>
            <CardTitle> {t("front.Goals.Goal1.GoalTitle")}</CardTitle>

            <CardDescription> {t("front.section1Title")}</CardDescription>
          </Card>
          <Card cardType="normal" className="text-center content-center">
          <div className="icon flex justify-center items-center">
          <svg width="116" height="136" viewBox="0 0 116 136" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M85.989 65.9632C82.2476 62.227 77.4824 59.6836 72.2955 58.6544C67.1085 57.6252 61.7326 58.1565 56.8476 60.1811C51.9625 62.2057 47.7876 65.6327 44.8503 70.029C41.913 74.4253 40.3455 79.5934 40.3455 84.8803C40.3455 90.1671 41.913 95.3353 44.8503 99.7316C47.7876 104.128 51.9625 107.555 56.8476 109.579C61.7326 111.604 67.1085 112.135 72.2955 111.106C77.4824 110.077 82.2476 107.534 85.989 103.797C91.0009 98.7768 93.816 91.9734 93.816 84.8803C93.816 77.7871 91.0009 70.9837 85.989 65.9632ZM79.9476 97.8264C77.3997 100.376 74.1529 102.112 70.6178 102.816C67.0828 103.52 63.4182 103.16 60.0878 101.782C56.7574 100.403 53.9108 98.0682 51.908 95.072C49.9051 92.0759 48.8362 88.5532 48.8362 84.9496C48.8362 81.3459 49.9051 77.8232 51.908 74.8271C53.9108 71.831 56.7574 69.496 60.0878 68.1175C63.4182 66.7391 67.0828 66.3791 70.6178 67.0831C74.1529 67.7872 77.3997 69.5236 79.9476 72.0727C83.3408 75.4858 85.2451 80.1026 85.2451 84.9149C85.2451 89.7272 83.3408 94.344 79.9476 97.7572V97.8264Z" fill="#24234C"/>
<path d="M27.6517 86.8821C24.5823 86.4488 21.5454 85.8101 18.5615 84.9703C16.1687 84.3301 13.8473 83.4482 11.6331 82.3381C10.2191 81.7709 9.06088 80.7067 8.37657 79.3457V69.1495C9.12484 69.5513 9.9424 69.9392 10.8015 70.3271C11.6607 70.715 12.9773 71.2691 14.1551 71.7124C14.7648 71.9202 15.402 72.1003 16.0256 72.2943L16.8294 72.5575L18.6864 73.0562L20.4046 73.4718L21.0281 73.6242L21.7764 73.7628L24.1875 74.1922L25.3374 74.3723C26.1411 74.4832 26.9587 74.594 27.7762 74.6771L28.8294 74.8156H29.4529L30.7002 74.9126C32.8619 75.0788 35.0513 75.1758 37.2961 75.1758H37.6564C38.6575 72.1478 40.1203 69.2927 41.9934 66.7113C40.4137 66.836 38.8481 66.8914 37.2961 66.8914C30.9436 66.8532 24.6244 65.968 18.506 64.2592C16.1132 63.619 13.7918 62.7371 11.5776 61.627C10.1591 61.0597 8.99955 59.9894 8.32109 58.6208V48.3969C10.17 49.4232 12.1033 50.2898 14.0996 50.9875C16.367 51.7687 18.681 52.4072 21.0281 52.8993C23.606 53.4293 26.2099 53.8223 28.8294 54.0769C31.6429 54.3566 34.4687 54.4953 37.2961 54.4925C40.0727 54.4955 42.8477 54.3568 45.6102 54.0769C48.1969 53.8173 50.7686 53.4243 53.3147 52.8993C55.6605 52.4018 57.9742 51.7633 60.2432 50.9875C62.2907 50.2839 64.2783 49.4176 66.1875 48.3969V53.9383H66.9636C69.4858 53.9368 71.9989 54.2439 74.4465 54.8527V17.3372C74.4465 12.7932 70.8159 8.90502 63.5548 5.67252C56.2938 2.44002 47.5178 0.819142 37.2267 0.809906C26.9726 0.809906 18.1966 2.43079 10.8986 5.67252C3.60065 8.91425 -0.0346366 12.8025 -0.00692282 17.3372V79.3457C-0.00692282 83.9636 3.59594 87.8703 10.8015 91.0658C18.0071 94.2614 26.7832 95.8638 37.1296 95.873H37.9473C36.938 93.2027 36.3037 90.4053 36.0626 87.5609C33.2476 87.5075 30.4389 87.2808 27.6517 86.8821ZM18.9218 11.7127C30.9947 8.16635 43.8329 8.16635 55.9058 11.7127C62.0721 13.4998 65.5225 15.3977 66.2846 17.3926C65.5271 19.3875 62.049 21.2624 55.8503 23.0172C43.7858 26.49 30.9863 26.49 18.9218 23.0172C12.8941 21.2855 9.38818 19.4014 8.43205 17.3372C9.38818 15.3839 12.8941 13.5413 18.9218 11.7127ZM8.43205 27.7689C10.281 28.7952 12.214 29.6619 14.2103 30.3596C16.4776 31.1407 18.7916 31.7793 21.1387 32.2714C23.7166 32.8013 26.3209 33.1944 28.9403 33.4489C31.7538 33.7286 34.5794 33.8673 37.4067 33.8645C40.1834 33.8675 42.9584 33.7288 45.7208 33.4489C48.3076 33.1893 50.8792 32.7963 53.4254 32.2714C55.7712 31.7738 58.0848 31.1354 60.3538 30.3596C62.4013 29.6559 64.3892 28.7896 66.2985 27.7689V40.2371C64.3888 41.2531 62.4009 42.1147 60.3538 42.8139C58.0888 43.6026 55.7743 44.2412 53.4254 44.7257C50.8795 45.2554 48.3078 45.6531 45.7208 45.9171C42.9584 46.197 40.1834 46.3358 37.4067 46.3327C34.5794 46.3355 31.7538 46.1968 28.9403 45.9171C26.3206 45.6582 23.7163 45.2605 21.1387 44.7257C18.7884 44.247 16.4735 43.6082 14.2103 42.8139C12.2144 42.1207 10.2814 41.2586 8.43205 40.2371V27.7689Z" fill="#24234C"/>
<path d="M112.456 116.778L94.594 98.9208C93.305 101.439 91.678 103.77 89.7579 105.848L106.567 122.652C107.883 123.968 107.952 125.7 107.259 126.434C106.567 127.168 104.793 127.057 103.476 125.741L86.5711 108.84C84.3513 110.652 81.8885 112.144 79.2546 113.273L97.6012 131.629C99.8216 133.876 102.839 135.155 105.998 135.189C107.319 135.205 108.63 134.958 109.855 134.463C111.08 133.969 112.195 133.236 113.135 132.308C117.222 128.221 116.904 121.253 112.456 116.778Z" fill="#24234C"/>
</svg>

            </div>
            <CardTitle> {t("front.Goals.Goal2.GoalTitle")}</CardTitle>

            <CardDescription> {t("front.section1Title")}</CardDescription>
          </Card>
          <Card cardType="normal" className="text-center content-center">
          <div className="icon content-center flex justify-center items-center">
          <svg width="140" height="134" viewBox="0 0 140 134" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M29.4412 105.869L36.4815 103.617L34.7496 99.0139L31.2577 100.562L28.5117 101.773C28.8372 101.214 29.0029 100.576 28.9906 99.9289V92.5243L24.0906 92.7637L24.4708 96.5645L24.8369 100.239C24.3821 99.5666 23.7114 99.07 22.9359 98.8309L15.8956 96.5082L14.6003 101.266L18.3174 102.069L21.8517 102.843C21.0735 103.077 20.4015 103.575 19.951 104.251L15.5859 110.219L19.6832 112.922L21.6124 109.628L23.457 106.461C23.4245 107.275 23.6731 108.075 24.1611 108.727L28.4835 114.738L32.3275 111.655L29.7792 108.84L27.301 106.024C28.0131 106.197 28.7613 106.142 29.4412 105.869Z" fill="#24234C"/>
<path d="M119.444 105.869L126.484 103.617L124.752 99.0139L121.26 100.562L118.444 101.773C118.774 101.215 118.944 100.577 118.937 99.9289V92.5243L114.037 92.7637L114.431 96.5645L114.797 100.239C114.34 99.5689 113.67 99.073 112.896 98.8309L105.856 96.5082L104.574 101.266L108.292 102.069L111.826 102.843C111.048 103.077 110.376 103.575 109.925 104.251L105.56 110.219L109.658 112.922L111.572 109.628L113.431 106.461C113.399 107.275 113.647 108.075 114.135 108.727L118.458 114.738L122.302 111.655L119.739 108.84L117.275 106.024C117.996 106.203 118.755 106.148 119.444 105.869Z" fill="#24234C"/>
<path d="M73.6397 28.1497L80.68 25.8973L78.9481 21.2941L75.4561 22.8426L72.64 24.0532C72.9655 23.494 73.1312 22.8561 73.1189 22.2091V14.8046L68.2189 15.0439L68.5988 18.8588L68.9649 22.5329C68.5154 21.8619 67.8497 21.3651 67.0783 21.1252L60.0381 18.8025L58.7424 23.5605L62.4599 24.3629L65.9941 25.1372C65.216 25.371 64.5436 25.8688 64.0931 26.5449L59.7283 32.5136L63.8397 35.2164L65.7548 31.9223L67.5991 28.7691C67.5687 29.5783 67.8172 30.3735 68.3031 31.0214L72.626 37.0464L76.4699 33.9494L73.9212 31.134L71.4431 28.3186C72.1745 28.4987 72.9445 28.4395 73.6397 28.1497Z" fill="#24234C"/>
<path d="M69.7677 51.3347C74.8123 51.3375 79.7444 49.8443 83.94 47.0441C88.1356 44.2439 91.406 40.2625 93.3378 35.6035C95.2695 30.9446 95.7757 25.8175 94.7922 20.8709C93.8088 15.9243 91.3799 11.3805 87.8128 7.81431C84.2458 4.24811 79.7011 1.81979 74.7533 0.836562C69.8055 -0.146667 64.677 0.359371 60.0169 2.29067C55.3569 4.22197 51.3746 7.49174 48.5738 11.6863C45.7729 15.8809 44.2794 20.8117 44.2822 25.8551C44.2897 32.6104 46.9771 39.0869 51.7549 43.8636C56.5328 48.6404 63.0108 51.3272 69.7677 51.3347ZM69.7677 8.80773C73.1408 8.80495 76.439 9.80239 79.2449 11.6739C82.0509 13.5454 84.2385 16.2068 85.5313 19.3216C86.824 22.4363 87.1639 25.8645 86.5076 29.1723C85.8512 32.48 84.2282 35.5189 81.8441 37.9044C79.46 40.2899 76.4216 41.915 73.1136 42.5739C69.8055 43.2328 66.3762 42.896 63.2596 41.6062C60.1431 40.3163 57.4793 38.1313 55.6051 35.3276C53.7308 32.5239 52.7305 29.2274 52.7305 25.8551C52.7343 21.3374 54.5298 17.0057 57.7237 13.8099C60.9176 10.6141 65.249 8.81519 69.7677 8.80773Z" fill="#24234C"/>
<path d="M114.445 78.0812C109.401 78.0785 104.47 79.5712 100.275 82.3708C96.0794 85.1704 92.8087 89.151 90.8765 93.8091C88.9443 98.4672 88.4373 103.594 89.4197 108.54C90.402 113.486 92.8296 118.03 96.3953 121.597C99.9609 125.163 104.505 127.593 109.451 128.578C114.398 129.562 119.526 129.058 124.186 127.129C128.847 125.2 132.83 121.933 135.633 117.74C138.435 113.547 139.931 108.618 139.931 103.575C139.924 96.8182 137.237 90.3403 132.459 85.5613C127.682 80.7824 121.203 78.0924 114.445 78.0812ZM114.445 120.608C111.072 120.611 107.773 119.613 104.967 117.741C102.16 115.869 99.9726 113.207 98.6803 110.091C97.3879 106.975 97.0492 103.547 97.7067 100.238C98.3642 96.9303 99.9885 93.8914 102.374 91.5065C104.76 89.1215 107.799 87.4976 111.108 86.8403C114.417 86.183 117.847 86.5217 120.963 87.8138C124.079 89.1058 126.742 91.293 128.615 94.0985C130.487 96.9041 131.486 100.202 131.483 103.575C131.475 108.09 129.678 112.418 126.484 115.611C123.291 118.804 118.962 120.601 114.445 120.608Z" fill="#24234C"/>
<path d="M25.5691 78.0812C20.5257 78.0812 15.5954 79.5764 11.4019 82.3777C7.20853 85.179 3.94038 89.1605 2.01037 93.8189C0.0803478 98.4772 -0.424913 103.603 0.559002 108.548C1.54292 113.494 3.97185 118.036 7.53806 121.602C11.1043 125.167 15.6477 127.595 20.5941 128.579C25.5406 129.562 30.668 129.057 35.3275 127.128C39.9869 125.198 43.9693 121.931 46.7713 117.738C49.5732 113.546 51.0687 108.617 51.0687 103.575C51.0649 96.8147 48.3773 90.3324 43.596 85.5523C38.8146 80.7721 32.3309 78.085 25.5691 78.0812ZM25.5691 120.608C22.196 120.608 18.8987 119.608 16.0943 117.734C13.2899 115.86 11.1043 113.197 9.81411 110.081C8.52394 106.965 8.187 103.537 8.84608 100.23C9.50515 96.9226 11.1307 93.885 13.5168 91.5015C15.9029 89.1179 18.9425 87.4954 22.2511 86.8393C25.5597 86.1831 28.9885 86.5227 32.104 87.8151C35.2195 89.1075 37.8818 91.2947 39.7537 94.1C41.6257 96.9053 42.6231 100.203 42.6204 103.575C42.6129 108.093 40.8138 112.423 37.6172 115.616C34.4207 118.809 30.0878 120.604 25.5691 120.608Z" fill="#24234C"/>
<path d="M23.9073 73.7595C24.3867 66.9379 26.3408 60.3015 29.6347 54.3083C32.9287 48.315 37.484 43.1076 42.9865 39.0454C41.5504 36.1562 40.5991 33.0507 40.1704 29.853C32.514 34.8683 26.1907 41.6676 21.744 49.6664C17.2973 57.6652 14.8603 66.624 14.6426 75.7725C17.603 74.6093 20.731 73.9296 23.9073 73.7595Z" fill="#24234C"/>
<path d="M97.2527 37.5954C103.338 41.6222 108.41 47.0004 112.074 53.3101C115.738 59.6199 117.894 66.6906 118.373 73.9706C121.595 74.3982 124.724 75.3492 127.639 76.7861C127.577 66.9428 124.947 57.286 120.008 48.7707C115.069 40.2554 107.992 33.1765 99.4775 28.2341C99.2523 31.4551 98.5006 34.6174 97.2527 37.5954Z" fill="#24234C"/>
<path d="M89.8746 120.594C83.6571 123.284 76.9338 124.605 70.1606 124.469C63.3874 124.333 56.7228 122.743 50.6184 119.806C48.8856 122.472 46.7424 124.847 44.2681 126.844C52.2852 131.19 61.2379 133.525 70.3569 133.648C79.4758 133.77 88.4882 131.677 96.6193 127.548C94.0098 125.61 91.732 123.261 89.8746 120.594Z" fill="#24234C"/>
</svg>


            </div>
            <CardTitle> {t("front.Goals.Goal3.GoalTitle")}</CardTitle>

            <CardDescription> {t("front.section1Title")}</CardDescription>
          </Card>
        </div>
        <Heading level="h2" className="bg-slate-300">
          {t("front.latestPublicationsTitle")}
        </Heading>
        {/* Card grid Heading*/}
        {/* <Heading level="h4 bg-slate-300" className="">
          Cards con iconos?
        </Heading> */}
        {/* <Heading level="h2" className="">
          Quitar el map de proyectos
        </Heading> */}
      </section>
      {/* Card grid */}
      <div className="h-full m-auto pt-16 max-w-[1080px] grid grid-cols-3 gap-8">
        {myProjectCards.map((project) => (
          <Card key={project.id} className="flex flex-col min-h-[200px]">
            <CardHeader>
              <div>{project.date}</div>
            </CardHeader>

            <CardContent className="flex flex-col gap-2">
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.subtitle}</CardDescription>
            </CardContent>

            <CardFooter>
              <Button variant="" size="sm" className="capitalize">
                {project.category}
                <a href={project.route} target="blank">
                  Enlace
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
}

const CreateLink = (props) => {
  return props.route.match("http") ? (
    <a target="_blank" href={props.route} rel="noopener noreferrer">
      {props.children}
    </a>
  ) : (
    <Link href={props.route}>{props.children}</Link>
  );
};
