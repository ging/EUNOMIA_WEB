"use client";

import { useTranslation } from "react-i18next";

import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";

import { FaceIcon } from "@radix-ui/react-icons";


export default function About(props) {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  return (
    <div className={"about page_" + currentLang}>
      {/* <Header route={"/about"} /> */}

      <main className="standard_padding ">
        <div className="banner py-8">
          <Heading level="h1" className="">
            {t("contact.title")}
          </Heading>

          <Text>
            Si quieres más información sobre nuestro proyecto o te gustaría
            unirte a la comunidad Eunomia para participar en nuestras
            actividades, puedes enviar un correo electónico o llamar a las
            direcciones que te incluimos a continuación.
          </Text>
        </div>
        <section className="">
          <div className="">
            <ul className="contact_info grid grid-cols-1 gap-8 pb-8 lg:grid-cols-3 lg:pb-0">
              <li className="text-center min-h-40">
                <h5 className="flex flex-col gap-2  ">
                  <span className="content-center flex justify-center items-center">
                    <svg
                      width="66"
                      height="66"
                      viewBox="0 0 66 66"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M33.3889 11.7856C45.5258 11.7856 54.2142 19.5241 54.2142 31.0789C54.2142 39.4196 50.4793 44.8835 44.3071 44.8835C41.2735 44.8835 38.7573 43.184 38.3424 40.5958H38.0831C36.9941 43.2358 34.6594 44.6996 31.6245 44.6996C26.2314 44.6996 22.6002 40.2564 22.6002 33.6151C22.6002 27.2626 26.2573 22.8701 31.522 22.8701C34.2964 22.8701 36.7608 24.308 37.7449 26.5567H38.0313V23.3934H42.4144V38.2434C42.4144 39.9676 43.3219 41.145 45.1887 41.145C48.068 41.145 50.1682 37.5374 50.1682 31.2097C50.1682 21.6939 43.2441 15.3933 33.1036 15.3933C23.041 15.3933 15.8317 22.975 15.8317 33.746C15.8317 45.2748 23.457 51.7593 33.9852 51.7593C37.2015 51.7593 40.4945 51.3149 42.1032 50.6349V54.2425C39.8993 54.9744 36.9682 55.3928 33.8037 55.3928C20.9926 55.3928 11.7856 47.4457 11.7856 33.5892C11.7856 20.5695 20.6556 11.7856 33.3889 11.7856ZM32.4814 26.8714C29.291 26.8714 27.3723 29.4324 27.3723 33.746C27.3723 38.0077 29.291 40.6218 32.4554 40.6218C35.7236 40.6218 37.8238 37.9546 37.8238 33.746C37.8238 29.5373 35.7495 26.8714 32.4814 26.8714Z"
                        fill="#9CD7F5"
                      />
                    </svg>
                  </span>
                  <p>gi.internetng@upm.es</p>
                </h5>
              </li>
              <li className="text-center min-h-40">
                <h5 className="flex flex-col gap-2">
                  <span className="content-center flex justify-center items-center">
                    <svg
                      width="66"
                      height="66"
                      viewBox="0 0 48 47"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_1653_218)">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M16.5035 30.9985C24.0333 38.5283 31.0109 39.3528 33.0593 39.4292C35.5346 39.5193 38.0609 37.4983 39.1536 35.4283C37.4107 33.3838 35.141 31.7975 32.6559 30.0781C31.1891 31.543 29.3815 34.265 26.9747 33.2898C25.6059 32.7395 22.2258 31.1826 19.2726 28.2275C16.3195 25.2724 14.7626 21.8943 14.2084 20.5273C13.2331 18.1166 15.963 16.3052 17.4298 14.8384C15.7104 12.3121 14.1516 9.98367 12.111 8.32888C10.0117 9.42554 7.97892 11.9322 8.07096 14.4408C8.14733 16.4893 8.97179 23.4668 16.5035 30.9985ZM32.9144 43.3439C30.0944 43.2401 22.1024 42.1356 13.7325 33.7676C5.36454 25.3977 4.262 17.4077 4.15625 14.5858C3.99958 10.2853 7.2935 6.10813 11.0985 4.47684C11.5567 4.27898 12.0585 4.20365 12.5546 4.25824C13.0507 4.31283 13.5241 4.49546 13.9283 4.78821C17.0773 7.08534 19.2491 10.5653 21.1154 13.2913C21.5037 13.8581 21.6815 14.5429 21.6182 15.227C21.5549 15.9111 21.2544 16.5516 20.7688 17.0376L18.1133 19.695C18.7302 21.0561 19.9855 23.4022 22.0417 25.4584C24.098 27.5147 26.444 28.77 27.807 29.3868L30.4606 26.7313C30.9478 26.2436 31.5911 25.9428 32.2778 25.8816C32.9645 25.8204 33.6508 26.0026 34.2167 26.3965C36.9975 28.3235 40.264 30.4639 42.6453 33.513C42.9619 33.9202 43.1632 34.4049 43.2283 34.9165C43.2934 35.428 43.2199 35.9477 43.0155 36.4212C41.3763 40.2458 37.2286 43.5025 32.9144 43.3439Z"
                          fill="#9CD7F5"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1653_218">
                          <rect
                            width="47"
                            height="47"
                            fill="white"
                            transform="translate(0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  <p>91 336 73 31</p>
                </h5>
              </li>
              <li className="text-center min-h-40">
                <h5 className="flex flex-col gap-2">
                  {/* {" "} */}
                  <span className="content-center flex justify-center items-center">
                    <svg
                      width="66"
                      height="66"
                      viewBox="0 0 53 53"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M26.5 29.8125C24.8621 29.8125 23.261 29.3268 21.8992 28.4169C20.5373 27.5069 19.4759 26.2136 18.8491 24.7004C18.2223 23.1872 18.0583 21.5221 18.3779 19.9157C18.6974 18.3093 19.4861 16.8337 20.6443 15.6755C21.8024 14.5174 23.278 13.7287 24.8844 13.4091C26.4908 13.0896 28.1559 13.2536 29.6691 13.8804C31.1823 14.5072 32.4757 15.5686 33.3856 16.9304C34.2956 18.2923 34.7813 19.8934 34.7813 21.5313C34.7786 23.7268 33.9053 25.8316 32.3528 27.3841C30.8004 28.9365 28.6955 29.8099 26.5 29.8125ZM26.5 16.5625C25.5173 16.5625 24.5566 16.8539 23.7395 17.3999C22.9224 17.9459 22.2856 18.7219 21.9095 19.6298C21.5334 20.5377 21.435 21.5368 21.6267 22.5006C21.8184 23.4645 22.2917 24.3498 22.9866 25.0447C23.6815 25.7396 24.5668 26.2128 25.5307 26.4045C26.4945 26.5963 27.4935 26.4979 28.4015 26.1218C29.3094 25.7457 30.0854 25.1089 30.6314 24.2917C31.1773 23.4746 31.4688 22.514 31.4688 21.5313C31.4674 20.2139 30.9435 18.9508 30.012 18.0193C29.0805 17.0877 27.8174 16.5638 26.5 16.5625Z"
                        fill="#9CD7F5"
                      />
                      <path
                        d="M26.5 49.6875L12.5279 33.2095C12.3337 32.962 12.1416 32.713 11.9515 32.4625C9.56603 29.3179 8.27682 25.4782 8.28126 21.5312C8.28126 16.6993 10.2007 12.0653 13.6174 8.64865C17.0341 5.23197 21.6681 3.3125 26.5 3.3125C31.3319 3.3125 35.9659 5.23197 39.3826 8.64865C42.7993 12.0653 44.7188 16.6993 44.7188 21.5312C44.7226 25.4764 43.434 29.3141 41.0502 32.4575L41.0485 32.4625C41.0485 32.4625 40.5516 33.1151 40.4771 33.2028L26.5 49.6875ZM14.5965 30.4667C14.5965 30.4667 14.9824 30.9768 15.0702 31.0862L26.5 44.5664L37.9447 31.0679C38.0176 30.9768 38.4051 30.4634 38.4068 30.4618C40.3566 27.8932 41.4102 24.756 41.4063 21.5312C41.4063 17.5779 39.8358 13.7864 37.0403 10.9909C34.2449 8.19548 30.4534 6.625 26.5 6.625C22.5466 6.625 18.7552 8.19548 15.9597 10.9909C13.1642 13.7864 11.5938 17.5779 11.5938 21.5312C11.5897 24.7581 12.6446 27.8972 14.5965 30.4667Z"
                        fill="#9CD7F5"
                      />
                    </svg>
                  </span>
                  <p>
                    E.T.S. DE INGENIEROS DE TELECOMUNICACIÓN <br/>
                    Av. Complutense, 30 <br/>
                    28040 Madrid Edificio B
                  </p>
                </h5>
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
