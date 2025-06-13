import Link from "next/link";

export default function NavButton({
  href,
  icon,
  label,
}: Readonly<{
  href: string;
  icon: React.ReactNode;
  label: string;
}>) {
  return (
    <Link
      href={href}
      className="flex items-center p-3 bg-meteorite rounded-[15px] w-full"
    >
      {icon}
      <span className="ml-2">{label}</span>
    </Link>
  );
}
