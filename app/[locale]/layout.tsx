import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "../globals.css"
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/providers/theme-provider";
import TwSizeIndicator from "@/components/helpers/TwSizeIndicator";
import {getMessages} from 'next-intl/server'
import {NextIntlClientProvider} from 'next-intl'
type Props = {
  children: React.ReactNode,
  params: {
    locale: 'en' | 'es',
  }
}

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


export default async function RootLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string}
}) {
  const messages = await getMessages()
  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`  bg-white dark:bg-black text-black  dark:text-white `}
      >
        <TwSizeIndicator />
        <ThemeProvider>
          <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main className="">{children}</main></NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
