// "use client";

// import { useEffect, useState } from "react";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";

// import Link from "next/link";
// import Heading from "@/components/core/Heading";
// // import Card from "@/components/core/Card";
// import { button } from "@/components/ui/button";
// import { card } from "@/components/ui/card";
// // icons
// import { FaceIcon, LapTimerIcon } from "@radix-ui/react-icons";

// import { useTranslation } from "react-i18next";

// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
//   CardSubtitle,
// } from "@/components/ui/card";

// export default function Home() {
//   // const [carousel, setCarousel] = useState(mycarousel);
//   const { t, i18n } = useTranslation();
//   const currentLang = i18n.language;
//   const [isHovered, setIsHovered] = useState(false);
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   return (
//     <div className="App">
//       <div className={"home_page page_" + currentLang}>
//         <Header route={"/"} />
//         <div className="">
//           <main>
//             <div className="flex flex-col gap-4">
//               <Heading level="h2" className="bg-blue-500">
//                 hola que tal...
//               </Heading>
//               <Heading level="h6" className="hola">
//                 hola asdasdasd tal...
//               </Heading>
//             </div>

//             {/* <Card cardType="normal"></Card>
//             <Card cardType="special"></Card> */}

//             <Card>
//               <CardHeader>
//                 <CardTitle>Card Title</CardTitle>
//                 <CardSubtitle>Mi Subtítulo</CardSubtitle>
//                 <CardDescription>Card Description</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <p>Hola soy en contenido de la card bla bla bla</p>
//               </CardContent>
//               <CardFooter>
//                 <p>Card Footer</p>
//               </CardFooter>
//             </Card>

//             <button className="m-auto" variant="">
//               <FaceIcon className="" variant="destructive" />
//               <LapTimerIcon />
//               asdasdasdas
//             </button>
//           </main>
//           <Footer />
//         </div>
//       </div>
//     </div>
//   );
// }
