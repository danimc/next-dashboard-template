'use client'

import { useState } from 'react'
import Link from 'next/link'

const UserMenu = ({isProfileOpen, setIsProfileOpen}) => {
  return (
    isProfileOpen && (
      <div className="right-0 z-10 absolute bg-white shadow-lg mt-2 py-1 rounded-md w-48">
        <Link href="#" className="block hover:bg-gray-100 px-4 py-2 text-gray-700 text-sm">
          Your Profile
        </Link>
        <Link href="#" className="block hover:bg-gray-100 px-4 py-2 text-gray-700 text-sm">
          Settings
        </Link>
        <Link href="#" className="block hover:bg-gray-100 px-4 py-2 text-gray-700 text-sm">
          Sign out
        </Link>
      </div>
    )
  )
}
export default UserMenu