"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = () => {
  const path = usePathname();

  const navLinks = [
    { name: "Target", path: "/" },
    { name: "Ripoti", path: "/tuma-ripoti" },
  ];
  return (
    <div className="ml-10 flex gap-x-2 ham-reverse">
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
  );
};

export default NavLinks;
