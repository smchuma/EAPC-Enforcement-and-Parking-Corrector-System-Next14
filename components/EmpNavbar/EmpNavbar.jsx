import { IoMdNotificationsOutline } from "react-icons/io";

import SidebarDrawer from "../SidebarDrawer/SidebarDrawer";
import ProfileAvatar from "../ProfileAvatar/ProfileAvatar";
import NavLinks from "../NavLinks/NavLinks";

const EmpNavbar = () => {
  return (
    <nav className="flex items-center justify-between px-5 bg-gray-50 rounded-lg py-5 fixed w-full md:w-[80%] top-0 shadow-lg z-[50] ">
      <div className="flex items-center">
        <div className="flex gap-x-2 items-center">
          <SidebarDrawer />

          <span className="text-xl font-bold text-gray-800">EAPC</span>
        </div>
        <NavLinks />
      </div>
      <div className="flex justify-between items-center cursor-pointer">
        <div className="bg-white shadow-md mr-2 p-2 rounded-full">
          <IoMdNotificationsOutline size={24} />
        </div>
        <ProfileAvatar />
      </div>
    </nav>
  );
};

export default EmpNavbar;
