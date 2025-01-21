'use client'

import { PropsWithChildren } from 'react'
import { SessionProvider } from 'next-auth/react'
import './globals.css'
import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from './theme/theme'

const RootLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="es">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <SessionProvider>{children}</SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

export default RootLayout
