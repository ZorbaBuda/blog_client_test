import { LocalePrefix, Pathnames } from "next-intl/routing"

export const defaultLocale = 'es' as const;
export const locales = ["es", "en"] as const

export type Locales = typeof locales

export const pathnames: Pathnames<Locales> = {
    "/" : "/",
    "/posts": {
        es: "/articulos",
        en: "/posts"
    },
    "/experiences": {
        es: "/experiencias",
        en: "/experiences"
    },
    "/about": {
        es: "/sobre-mi",
        en: "/about"
    }
}

export const localePrefix: LocalePrefix<Locales> = "as-needed"


export const port = process.env.PORT || 3001;
export const host = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : `http://localhost:${port}`;