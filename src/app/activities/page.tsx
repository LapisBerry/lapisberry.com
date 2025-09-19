import Image from "next/image";
import DiscordProfile from "@/components/common/DiscordProfile";
export default function ActivitiesPage() {

  return (
    <main className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <div className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex flex-col bg-dark shadow-[0_0_30px_var(--color-discord-blurple)] h-180 w-144 rounded-2xl items-center">
          <Image
            src="/brand/Discord-Logo-Blurple.svg"
            priority={true}
            draggable={false}
            alt="Discord Logo"
            width={280}
            height={103}
            className="flex-1 select-none w-[280px]"
          />
          <DiscordProfile />
        </div>
      </div>
    </main>
  );
}
