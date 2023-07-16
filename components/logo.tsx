import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Logo({ className }: any) {
  return (
    <Link href={`/`} className="flex items-center gap-4 py-2">
      <Image
        src="/logo.png"
        alt="logo"
        width={50}
        height={50}
        className={clsx([className])}
      />
    </Link>
  );
}
