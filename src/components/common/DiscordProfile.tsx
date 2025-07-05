"use client";

import Image from "next/image";
import { useLanyard } from "react-use-lanyard";
import { getAvatarURL, getAvatarDecorationURL } from "@/components/lib/api/discord";


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

          <div className="flex flex-4 items-center justify-center text-2xl">
            Unimplemented Container
          </div>
        </>
      ) : (
        <div className="flex flex-6 items-center justify-center text-2xl">
          Loading Discord Status...
        </div>
      )}
    </>
  );
}
