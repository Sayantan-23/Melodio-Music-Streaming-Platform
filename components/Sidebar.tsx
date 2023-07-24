"use client";

import { HomeIcon } from "@heroicons/react/20/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const pathname = usePathname();

  const routes = useMemo(
    () => [
      {
        icons: <HomeIcon />,
        label: "Home",
        active: pathname !== "/search",
        href: "/",
      },
      {
        icons: <MagnifyingGlassIcon /> ,
        label: "Search",
        active: pathname === "/search",
        href: "/search",
      },
    ],
    []
  );

  return (
    <div className="flex h-full">
      <div className="hidden md:flex flex-col gap-y-2 bg-black h-full w-[300px] p-2">

      </div>
    </div>
  );
};

export default Sidebar;
