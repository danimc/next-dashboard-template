import React, { PropsWithChildren } from 'react'

const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return <main>{children}</main>
}

export default MainLayout
