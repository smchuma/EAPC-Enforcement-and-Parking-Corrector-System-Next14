"use client";
import { IoMdNotificationsOutline } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegUser } from "react-icons/fa";
import { Avatar, AvatarImage } from "../ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const path = usePathname();

  const navLinks = [
    { name: "Target", path: "/" },
    { name: "Tuma Ripoti", path: "/tuma-ripoti" },
  ];

  return (
    <nav className="flex items-center justify-between px-5 bg-gray-50 rounded-lg py-5 fixed w-[80%] mt-2 top-0 shadow-lg z-[99] ">
      <div className="flex items-center">
        <div className="flex gap-x-2">
          <GiHamburgerMenu size={24} className="ham" />
          <span className="text-xl font-bold text-gray-800">EAPC</span>
        </div>
        <div className="ml-10 flex gap-x-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                path === link.path
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-700 hover:text-blue-500"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center cursor-pointer">
        <div className="bg-white shadow-md mr-2 p-2 rounded-full">
          <IoMdNotificationsOutline size={24} />
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <div className="flex gap-x-2 items-center">
                <FaRegUser />

                <p>Profile</p>
              </div>
            </DropdownMenuItem>

            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;
