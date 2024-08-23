// https://www.youtube.com/watch?v=7C3l4wIq8vQ&t=826s

// https://www.youtube.com/watch?v=h3IA_Iax-dk

import createMiddleware from "next-intl/middleware"
import { NextRequest, NextResponse } from "next/server";


// export default createMiddleware({
//         locales: ['en', 'es'],
//         defaultLocale: 'es'
//     })

const nextIntlMiddleware =  createMiddleware({
    locales: ['en', 'es'],
    defaultLocale: 'es',
    localePrefix: "as-needed"
})

export default function(req: NextRequest): NextResponse {
    return nextIntlMiddleware(req)
}

export const config = {
    // Match only internationalized pathnames
    matcher: ['/', '/(en|es)/:path*']
  };