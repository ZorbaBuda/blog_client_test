import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "@/styles/globals.css"
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/providers/theme-provider";
import TwSizeIndicator from "@/components/helpers/TwSizeIndicator";

const firaCode = Fira_Code({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   metadataBase: new URL("https://next-cms-blog-ce.vercel.app/"),
//   // title: "Dev Blook - A blog for developers",
//   title: {
//     default: "Dev Blook - A blog for developers",
//     template: '%s | Dev Blook - A blog for developers'
//   },
//   description: "A blog for developers by developers!",
//   openGraph: {
//     title: "Dev Blook - A blog for developers",
//     description: "A blog for developers by developers!",
//     type: "website",
//     locale: "en_US",
//     url: "https://next-cms-blog-ce.vercel.app/",
//     siteName: "DevBlook"
//   },
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={` h-full bg-white dark:bg-black text-black  dark:text-white `}
      >
        <TwSizeIndicator />
        <ThemeProvider>
          <Navbar />
          <main className="">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
