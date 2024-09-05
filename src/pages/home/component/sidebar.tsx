import { AppRoutes } from "../../../../utils/routes";
import { NavLink } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import { useState } from "react";

const SideBar = () => {
  const [open, setOpen] = useState(true);

  const myArray = [
    { name: "Credentials", logoFill: "/Key.svg", logo: "/KeyFill.svg", links: AppRoutes.credentials },
    { name: "Webhooks", logoFill: "/webFill.svg", logo: "/web.svg", links: AppRoutes.webHook },
    { name: "Delivery Simulator", logoFill: "/PackageFill.svg", logo: "/Package.svg", links: AppRoutes.delivery },
  ];

  return (
    <aside className={`border-r relative ${open ? "" : ""} duration-500 min-h-screen border-borderCol text-lightText py-7 pl-7 pr-14`}>
      <section className="flex justify-between items-center">
        <NavLink to={AppRoutes.home}>
          {!open ? <img src="/smalLogo.svg" /> : <img src="/Logo.svg" />}
        </NavLink>
       
      </section>

      <div className="text-lg font-bold  flex-col gap-4 flex relative mt-10 ">
        <NavLink
          to={AppRoutes.home}
          
        >
          {({ isActive }) => (
            <div className="flex items-center font-bold gap-2 ">
              <img src={isActive ? "/IconSet.svg" : "/IconSetFill.svg"} alt="iconset" />
              <p className={`${!open ? "opacity-0 hidden" : ""} ${isActive ? "text-primaryCol" : ""} duration-300`}>
                Dashboard
              </p>
            </div>
          )}
        </NavLink>
      </div>

      <div className="mt-12">
        <p className={`mb-6 font-semibold text-[#757575] ${!open ? "hidden": ""}`}>General</p>
        {myArray.map((data) => (
          <NavLink
            to={data.links}
            key={data.name}
          >
            {({ isActive }) => (
              <div className="flex items-center font-bold my-2 py-1 gap-3">
                <img src={isActive ? data.logoFill : data.logo} alt={data.name} />
                <p className={`${!open ? "opacity-0 hidden" : ""} ${isActive ? "text-primaryCol" : ""}  whitespace-pre duration-300`}>
                  {data.name}
                </p>
              </div>
            )}
          </NavLink>
        ))}
      </div>

      <NavLink to={AppRoutes.home}>
        <div className="absolute bottom-10 flex gap-3 text-textRed font-bold">
          <img src="/SignOut.svg" />
          <p className={!open ? "opacity-0 hidden" : ""}>Log out</p>
        </div>
      </NavLink>
    </aside>
  );
};

export default SideBar;
