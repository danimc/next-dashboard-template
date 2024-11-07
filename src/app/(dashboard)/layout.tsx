import React, { PropsWithChildren } from 'react'

import Navbar from '@/components/shared/Navbar'
import Sidebar from '@/components/shared/Sidebar'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Dashboard for the authenticated user'
}

const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex bg-gray-100 h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Navbar />
        <main className="flex-1 bg-gray-100 p-4 text-gray-950 overflow-x-hidden overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  )
}

export default MainLayout
