'use client'

import { ReactNode } from 'react'

export default function LoginLayout({ children }: { children: ReactNode }) {
  return (
    <main className="flex justify-center items-center bg-gradient-to-r from-blue-500 to-indigo-800 min-h-screen">
      {children}
    </main>
  )
}
