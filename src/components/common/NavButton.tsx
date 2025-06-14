"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavButton({
  href,
  icon,
  label,
}: Readonly<{
  href: string;
  icon: React.ReactNode;
  label: string;
}>) {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={`flex items-center p-3 rounded-[15px] w-full hover:bg-dark ${
        pathname === href ? "bg-meteorite" : ""
      }`}
    >
      {icon}
      <span className="ml-2">{label}</span>
    </Link>
  );
}
