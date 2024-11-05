'use client'

import { PropsWithChildren } from 'react'
import { SessionProvider } from 'next-auth/react'
import './globals.css'

const RootLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  )
}

export default RootLayout
