import Image from "next/image";
import Link from "next/link";

export default function ContactCard({
  href,
  shieldSrc,
}: {
  href: string;
  shieldSrc: string;
}) {
  return (
    <Link href={href} target="_blank">
      <Image src={shieldSrc} alt="Badge" width={0} height={0} className="rounded-lg w-auto h-12 hover:scale-105 transition-transform duration-200" />
    </Link>
  );
}
