import '#/styles/globals.css'
import type { Metadata } from 'next'
import { Layout } from '#/components/Layout'
import { bodyFont, headingFont } from '#/styles/fonts'


export const metadata: Metadata = {
  title: 'Expense Easy',
  description: 'Manage your expenses with ease!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${headingFont.variable} ${bodyFont.variable}`}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  )
}
