'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function HomeRedirect() {
  const { status } = useSession()
  const router = useRouter()

  useEffect(() => {
    console.log(status, { router })

    if (status === 'authenticated') {
      router.push('/home')
    } else if (status === 'unauthenticated') {
      router.replace('/login')
    }
  }, [status, router])

  return null
}
