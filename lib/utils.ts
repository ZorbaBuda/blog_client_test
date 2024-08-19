import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import * as fs from 'fs'
import es from 'date-fns/locale/es'
import { format } from 'date-fns'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function dateLocaleFormatted(dateString : string, lang: string = 'es'){
    const locale = es
    
    const dateFormatted = format(new Date(dateString), 'dd MMMM yyyy' )
    console.log(dateFormatted)
    return dateFormatted
}

export function createDict(data : string){
 
fs.writeFile('dict.json', data, err => {
  if (err) {
    console.error(err);
  } else {
    console.log('file written successfully')
  }
});
}


