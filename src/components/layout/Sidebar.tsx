import NavButton from "../common/NavButton";
import { HomeRounded, AssignmentRounded, RocketLaunchRounded, LocalFireDepartmentRounded, PersonRounded, ContactsRounded } from "@mui/icons-material";

const links = [
  { name: "Home", href: "/" , icon: <HomeRounded /> },
  { name: "Projects", href: "/projects", icon: <AssignmentRounded /> },
  { name: "Activities", href: "/activities", icon: <RocketLaunchRounded /> },
  { name: "Skills", href: "/skills", icon: <LocalFireDepartmentRounded /> },
  { name: "About", href: "/about", icon: <PersonRounded /> },
  { name: "Contact", href: "/contact", icon: <ContactsRounded /> },
];

export default function Sidebar() {
  return (
    <aside className="flex flex-col items-center gap-3 w-48 h-[100vh] p-4 bg-dark">
      {links.map((link) => (
        <NavButton
          key={link.name}
          href={link.href}
          icon={link.icon}
          label={link.name}
        />
      ))}
    </aside>
  );
}
