import { Metadata } from 'next'
import { PropsWithChildren } from 'react'

export const metadata: Metadata = {
  title: 'Dashboard Login',
  description: 'Login to your dashboard account'
}

const LoginLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className="flex justify-center items-center bg-gradient-to-r from-blue-500 to-indigo-800 min-h-screen">
      {children}
    </main>
  )
}

export default LoginLayout
