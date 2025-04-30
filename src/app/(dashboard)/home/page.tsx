import React from "react";
import { FaTicketSimple, FaClipboardCheck } from "react-icons/fa6";
import { MdOutlinePendingActions } from "react-icons/md";
import { TbUserQuestion } from "react-icons/tb";

const HomePage = () => {
  return (
    <section className="grid grid-rows-[20px_1fr_20px] pb-20 min-h-screen font-[family-name:var(--font-geist-sans)]">
      <div className="justify-items-center items-center font-bold w-full h-fit text-xl">
        <h2>Bienvenido</h2>
      </div>
      <div className="p-6">
        <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
          <Card
            title="Tickets Reportados"
            subtitle="0"
            href="#"
            Icon={FaTicketSimple}
          />
          <Card title="Tickets Abiertos" subtitle="0" href="#" Icon={MdOutlinePendingActions} />
          <Card title="Tickets Atendidos" subtitle="2" href="#" Icon={FaClipboardCheck} />
          <Card
            title="Tickets sin Asignar"
            subtitle="10"
            href="#"
            Icon={TbUserQuestion}
          />
        </div>
      </div>
    </section>

  )
}

const Card = ({ title, subtitle, Icon, href }) => {
  return (
    <a
      href={href}
      className="w-full p-4 rounded border-[1px] border-slate-300 relative overflow-hidden group bg-white"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-black translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />

      <Icon className="absolute z-10 -top-12 -right-12 text-9xl text-slate-100 group-hover:text-cyan-500 group-hover:rotate-12 transition-transform duration-300" />
      <Icon className="mb-2 text-2xl text-cyan-500 group-hover:text-white transition-colors relative z-10 duration-300" />
      <h3 className="font-medium text-lg text-slate-950 group-hover:text-white relative z-10 duration-300">
        {title}
      </h3>
      <p className="text-slate-400 group-hover:text-violet-200 relative z-10 duration-300">
        {subtitle}
      </p>
    </a>
  );
};

export default HomePage
