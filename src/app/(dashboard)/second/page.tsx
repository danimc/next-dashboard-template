import UserTable from "@/components/shared/UserTable";

const SecondPage = () => {
  return (
    <div className="justify-items-center items-center gap-16 grid grid-rows-[20px_1fr_20px] p-8 sm:p-20 pb-20 min-h-screen font-[family-name:var(--font-geist-sans)]">
      <p> Second page </p>
      <UserTable />   
    </div>
  )
}

export default SecondPage
