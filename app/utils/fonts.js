import { Source_Sans_3, Ubuntu } from "next/font/google";

export const sourceSans_init = Source_Sans_3({ subsets: ["latin"] });
export const ubuntu_init = Ubuntu({ subsets: ["latin"], weight: ["400", "700"] });

export const sourceSans = sourceSans_init.variable;
export const ubuntu = ubuntu_init.variable;