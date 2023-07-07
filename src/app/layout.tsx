import '@/styles/normalize.css'
import '@/styles/globals.css'

import { Inter } from 'next/font/google'
import type { FC, ReactNode } from 'react'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Comrades',
  description: 'Generated by create next app',
}

interface RootLayoutProps {
  children: ReactNode
}

const RootLayout: FC<RootLayoutProps> = (props) => {
  const { children } = props
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className='mr-auto ml-auto max-w-[500px] md:max-w-[768px] lg:max-w-[1024px] 2xl:max-w-[1440px]'>
          {children}
        </main>
      </body>
    </html>
  )
}

export default RootLayout
