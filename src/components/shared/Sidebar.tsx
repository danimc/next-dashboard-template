'use client'
import { useState } from 'react'
import Link from 'next/link'
import { CheckCheckIcon, Menu } from 'lucide-react'
import { links } from '@/lib/menuLinks'
import { usePathname } from 'next/navigation'

const Sidebar = () => {
  const pathname = usePathname()
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
          <CheckCheckIcon /> <span className="font-extrabold text-2xl">Dashboard</span>
        </Link>
        <nav>
          {links.map(({ name, path, icon: Icon }) => (
            <Link
              key={name}
              href={path}
              className={`block hover:bg-gray-700 px-4 py-2.5 rounded hover:text-white transition duration-200 ${
                pathname === path ? 'bg-gray-700 text-white' : ''
              }`}
            >
              <Icon className="inline-block mr-2" size={20} />
              {name}
            </Link>
          ))}
        </nav>
      </div>
    </>
  )
}

export default Sidebar
