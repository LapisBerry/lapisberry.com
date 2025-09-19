"use client";

import Image from "next/image";
import { useLanyard } from "react-use-lanyard";
import { getAvatarURL, getAvatarDecorationURL } from "@/components/lib/api/discord";
import DiscordActivityCard from "@/components/common/DiscordActivityCard";


export default function DiscordProfile() {
  const { loading, status } = useLanyard({
    userId: "1110214078808461393",
    socket: true,
  });

  return (
    <>
      {!loading && status ? (
        <>
          <div className="flex flex-1 items-center justify-center">
            <Image
              src={getAvatarURL(status.discord_user.id, status.discord_user.avatar)}
              alt="Discord Avatar"
              draggable={false}
              width={100}
              height={100}
              className="absolute rounded-full select-none"
            />
            {status.discord_user.avatar_decoration_data && (
              <Image
                src={getAvatarDecorationURL(status.discord_user.avatar_decoration_data.asset)}
                alt="Avatar Decoration"
                draggable={false}
                width={120}
                height={120}
                className="absolute select-none"
              />
            )}
          </div>

          <div className="flex flex-col flex-1 items-center justify-center gap-1">
            <p className="text-4xl font-bold">{status.discord_user.global_name}</p>
            <p className="">{status.discord_user.username}</p>
          </div>

          <div className="flex-4 bg-mirage rounded-2xl overflow-y-auto">
            <div className="flex p-5 flex-col gap-4 w-120">
              {status.activities.map((activity) => (
                <DiscordActivityCard key={activity.id} activity={activity} />
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-6 shrink-0 items-center justify-center text-2xl">
          Loading Discord Status...
        </div>
      )}
    </>
  );
}
