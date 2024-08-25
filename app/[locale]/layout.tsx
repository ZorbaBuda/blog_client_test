import type { Metadata } from "next";
import "../globals.css"
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/providers/theme-provider";
import TwSizeIndicator from "@/components/helpers/TwSizeIndicator";
import {getMessages, getTranslations} from 'next-intl/server'
import {NextIntlClientProvider} from 'next-intl'
import {locales} from '@/config';

type Props = {
  children: React.ReactNode,
  params: {
    locale: 'es' | 'en',
  }
}

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export async function generateMetadata({
  params: {locale}
}: Omit<Props, 'children'>) {
  const t = await getTranslations({locale, namespace: 'LocaleLayout'});

  return {
    title: t('title'),
    description: t('description')
  };
}



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
