import { MdDashboard } from "react-icons/md";
import { BiSolidReport } from "react-icons/bi";
import { IoMdSettings } from "react-icons/io";
import { AiOutlineLogout } from "react-icons/ai";
import SidebarItem from "../SidebarItem/SidebarItem";

const Sidebar = () => {
  const sidebarItem = [
    {
      id: 1,
      name: "Dashboard",
      icon: <MdDashboard size={20} />,
      link: "/admin/dashboard",
    },
    {
      id: 2,
      name: "Report",
      icon: <BiSolidReport size={20} />,
      link: "/admin/report",
    },
    {
      id: 3,
      name: "Settings",
      icon: <IoMdSettings size={20} />,
      link: "/admin/settings",
    },
  ];

  return (
    <main className="bg-white invisible lg:visible fixed w-72 h-[90%] top-0 shadow-md rounded-2xl pt-10 mt-5 ml-5 ">
      <div className="flex justify-center items-center flex-col">
        <h1 className="lobster text-4xl text-gray-900 mb-10">EaPc</h1>
        {sidebarItem.map((item) => (
          <SidebarItem key={item.id} item={item} />
        ))}
      </div>

      <div className="flex justify-center mt-52 cursor-pointer">
        <div className=" flex justify-center w-10 items-center shadow-md bg-gray-100  p-2 rounded-full">
          <AiOutlineLogout size={20} />
        </div>
      </div>
    </main>
  );
};

export default Sidebar;
