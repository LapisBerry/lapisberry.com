import ContactCard from "@/components/common/ContactCard";
import Image from "next/image";

const contactLinks = [
  {
    href: "mailto:kittiphopkhankaew@gmail.com",
    shieldSrc: "https://img.shields.io/badge/Email-kittiphopkhankaew%40gmail.com-white?style=for-the-badge&logo=Gmail&logoColor=white&labelColor=%23EA4335",
  },
  {
    href: "https://discordapp.com/users/1110214078808461393",
    shieldSrc: "https://img.shields.io/badge/Discord-blueoflapislazuli-white?style=for-the-badge&logo=Discord&logoColor=white&labelColor=%235865F2",
  },
  {
    href: "https://www.instagram.com/mighty_ikkyu/",
    shieldSrc: "https://img.shields.io/badge/Instagram-mighty__ikkyu-white?style=for-the-badge&logo=Instagram&logoColor=white&labelColor=%23E4405F",
  },
  {
    href: "https://www.kaggle.com/kittiphopkhankaew",
    shieldSrc: "https://img.shields.io/badge/Kaggle-Kittiphop_Khankaew-white?style=for-the-badge&logo=Kaggle&logoColor=white&labelColor=%2320BEFF",
  },
  {
    href: "https://www.linkedin.com/in/kittiphop-khankaew/",
    shieldSrc: "https://img.shields.io/badge/LinkedIn-Kittiphop_Khankaew-white?style=for-the-badge&logo=LinkedIn&logoColor=white&labelColor=%230A66C2",
  },
  {
    href: "https://twitter.com/LapiXLazuliX",
    shieldSrc: "https://img.shields.io/badge/X-LapixLazulix-white?style=for-the-badge&logo=X&logoColor=white&labelColor=black",
  },
  {
    href: "https://www.facebook.com/kittiphop.khankaew.9/",
    shieldSrc: "https://img.shields.io/badge/Facebook-Kittiphop_Khankaew-white?style=for-the-badge&logo=Facebook&logoColor=white&labelColor=%231877F2",
  },
  {
    href: "https://leetcode.com/LapisBerry/",
    shieldSrc: "https://img.shields.io/badge/LeetCode-LapisBerry-white?style=for-the-badge&logo=LeetCode&logoColor=black&labelColor=%23FFA116",
  },
];

export default function ContactPage() {
  return (
    <div className="flex flex-col h-full">
      <h1 className="text-6xl font-bold text-center my-12">
        Contact Me
      </h1>

      <Image src="/ProfileChulaArtLibrary.jpg" alt="Profile Picture" width={300} height={200} className="rounded-lg m-auto" />

      <div className="flex flex-1 items-center justify-center">
        <div className="flex flex-wrap items-center justify-center gap-4 p-8">
          {contactLinks.map((link, index) => (
            <ContactCard key={index} href={link.href} shieldSrc={link.shieldSrc} />
          ))}
        </div>
      </div>
    </div>
  );
}
