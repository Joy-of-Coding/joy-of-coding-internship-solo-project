"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { AiFillBug } from "react-icons/ai";
import classnames from "classnames";

const NavBar = () => {
  const currentPath = usePathname();
  console.log(currentPath);
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Task list", href: "/issues" },
  ];

  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <AiFillBug />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link
            key={link.href} // Use both label and href for a unique key
            className={classnames("hover:text-zinc-800 transition-colors", {
              "text-zinc-900 font-bold": link.href === currentPath,
              "text-zinc-500": link.href !== currentPath,
            })}
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
