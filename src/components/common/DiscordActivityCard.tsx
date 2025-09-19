import Image from "next/image";
import { Activity } from "react-use-lanyard";
import { resolveDiscordAssetURL } from "@/components/lib/api/discord";

const types = ["Playing", "Streaming", "Listening", "Watching", "Custom", "Competing"];
export default function DiscordActivityCard({ activity }: { activity: Activity }) {
  return (
    <div className="grid grid-cols-[80px_1fr] grid-rows-[3fr_2fr_2fr_2fr_3fr] bg-meteorite h-30 rounded-2xl pt-1 pl-2">
      <h2 className="col-[1/3] row-[1]">{types[activity.type]}</h2>
      {activity.assets ? (
        <Image
          src={resolveDiscordAssetURL(activity.assets.large_image, activity.application_id)}
          alt={activity.name}
          width={64}
          height={64}
          className="col-[1] row-[2/6] rounded-2xl"
        />
      ) : null}
      <p className="col-[2] row-[2]">{activity.name}</p>
      <p className="col-[2] row-[3]">{activity.details}</p>
      <p className="col-[2] row-[4]">{activity.state}</p>
      {activity.timestamps ? (
        <p className="col-[2] row-[5]">{activity.timestamps.start} {}</p>
      ) : null}
    </div>
  );
}
