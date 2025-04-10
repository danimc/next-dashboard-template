'use client'

import { Bell, User } from 'lucide-react'
import { useState } from 'react'
import  UserMenu  from './UserMenu'

const Navbar = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md px-4 py-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <h2 className="mr-4 font-semibold text-gray-800 text-xl">Dashboard</h2>
        </div>
        <div className="flex items-center">
          <button className="mr-4 p-1 text-gray-400 hover:text-gray-600">
            <Bell size={20} />
          </button>
          <div className="relative">
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center font-medium text-gray-700 text-sm hover:text-gray-800 focus:outline-none"
            >
              <User size={20} className="mr-1" />
              <span className="md:inline hidden">Profile</span>
            </button>
              <UserMenu 
                isProfileOpen = {isProfileOpen}
              />            
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
