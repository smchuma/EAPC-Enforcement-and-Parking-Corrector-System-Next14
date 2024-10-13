"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const SidebarItem = ({ item }) => {
  const path = usePathname();

  const isActive = path === item.link;

  return (
    <Link href={item.link} className="w-full">
      <div
        className={`flex bg-gray-100 hover:bg-gray-900 text-gray-900 hover:text-white mb-2 w-full p-3 gap-2 items-center cursor-pointer ease-in-out
        ${isActive ? "bg-gray-900 text-white" : ""}
        `}
      >
        <div className=" ">{item.icon}</div>
        <div className="">{item.name}</div>
      </div>
    </Link>
  );
};

export default SidebarItem;
