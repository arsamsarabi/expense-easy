import { Inter, Montserrat } from 'next/font/google'

export const headingFont = Inter({
  subsets: ['latin'],
  variable: '--font-heading',
})

export const bodyFont = Montserrat({
  subsets: ['latin'],
  variable: '--font-body',
})
