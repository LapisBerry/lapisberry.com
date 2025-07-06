import Eclipse from "@/components/common/Eclipse";
import NavButton from "@/components/common/NavButton";
import {
  HomeRounded,
  AssignmentRounded,
  RocketLaunchRounded,
  LocalFireDepartmentRounded,
  PersonRounded,
  ContactsRounded,
} from "@mui/icons-material";

const links = [
  { name: "Home", href: "/", icon: <HomeRounded /> },
  { name: "Projects", href: "/projects", icon: <AssignmentRounded /> },
  { name: "Activities", href: "/activities", icon: <RocketLaunchRounded /> },
  { name: "Skills", href: "/skills", icon: <LocalFireDepartmentRounded /> },
  { name: "About", href: "/about", icon: <PersonRounded /> },
  { name: "Contact", href: "/contact", icon: <ContactsRounded /> },
];

export default function Sidebar() {
  return (
    <aside className="relative bg-mirage">
      <div className="absolute top-0 right-0 w-full h-full z-5 overflow-hidden">
        <Eclipse className="absolute top-10 bg-[#332FD0] left-full" />
        <Eclipse className="absolute top-40 bg-[#FB2576] left-full" />
        <Eclipse className="absolute top-80 bg-[#332FD0]" />
        <Eclipse className="absolute top-110 bg-[#FB2576]" />
      </div>

      <div className="h-[50px]"></div>

      <div className="flex flex-col sticky top-0 z-10 items-center gap-3 p-4">
        {links.map((link) => (
          <NavButton
            key={link.name}
            href={link.href}
            icon={link.icon}
            label={link.name}
          />
        ))}
      </div>
    </aside>
  );
}
