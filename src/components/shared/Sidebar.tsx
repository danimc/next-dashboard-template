'use client'
import { useState } from 'react'
import { Home, Menu } from 'lucide-react'
import Link from 'next/link'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleSidebar = () => setIsOpen(!isOpen)

  return (
    <>
      <button
        className="top-4 left-4 z-20 fixed lg:hidden bg-red-800 p-2 rounded-md text-white"
        onClick={toggleSidebar}
      >
        <Menu size={24} />
      </button>
      <div
        className={`bg-gray-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:relative lg:translate-x-0 transition duration-200 ease-in-out z-10`}
      >
        <Link href="/home" className="flex items-center space-x-2 px-4 text-white">
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span className="font-extrabold text-2xl">Dashboard</span>
        </Link>
        <nav>
          <Link
            href="/home"
            className="block hover:bg-gray-700 px-4 py-2.5 rounded hover:text-white transition duration-200"
          >
            <Home className="inline-block mr-2" size={20} />
            Home
          </Link>
        </nav>
      </div>
    </>
  )
}

export default Sidebar
