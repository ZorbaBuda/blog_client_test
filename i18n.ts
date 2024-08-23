import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
 
// Can be imported from a shared config
//  config.ts   export const locales = ["en","de"] as const
const locales = ['en', 'es'];
 
export default getRequestConfig(async ({locale}) => {
 
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();
 
  return {
    messages: (await import(`./messages/${locale}.json`)).default
  };
});