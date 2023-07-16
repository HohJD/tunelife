"use client";

import { FC } from "react";
import Logo from "./logo";
import Coin from "./3d/coin";
import clsx from "clsx";
import { mono } from "@/lib/fonts";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface NavProps {}

const Nav: FC<NavProps> = () => {
  // const router = useRouter();
  const pathname = usePathname();

  return (
    <nav className="justify-between layout">
      <Logo />
    </nav>
  );
};

export default Nav;
