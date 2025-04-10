import LinksProfile from './LinksProfile'

const UserMenu = ({isProfileOpen}) => {
  return (
    isProfileOpen && (
      <div className="right-0 z-10 absolute bg-white shadow-lg mt-2 py-1 rounded-md w-48">
        <LinksProfile text = {'Your profile'} />
        <LinksProfile text = {'Settings'} />
        <LinksProfile text = {'Sign out'} />
      </div>
    )
  )
}
export default UserMenu