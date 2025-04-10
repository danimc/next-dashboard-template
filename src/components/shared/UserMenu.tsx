import Navbar from "./Navbar"


    <div className="relative">
    <button
    onClick={() => setIsProfileOpen(!isProfileOpen)}
    className="flex items-center font-medium text-gray-700 text-sm hover:text-gray-800 focus:outline-none"
    >
    <User size={20} className="mr-1" />
    <span className="md:inline hidden">Profile</span>
    </button>
    {isProfileOpen && (
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
    )}
    </div>
