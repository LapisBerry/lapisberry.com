"use client";

import { useLanyard } from "react-use-lanyard";
import { getAppAssetURL } from "@/components/lib/api/discord";
import Image from "next/image";

export default function ActivitiesPage() {
  const { loading, status } = useLanyard({
    userId: "1110214078808461393",
    socket: true,
  });

  return (
    <main className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <div className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {!loading && status ?
          <div className="text-lg">
            <h1 className="text-4xl">Discord</h1>
            <p>Global name: {status.discord_user.global_name}</p>
            <p>discord_status: {status.discord_status}</p>
            <p>Activities:</p>
            <ul className="pl-5">
              {status.activities.map((activity) => (activity.name !== "Spotify") && (
                <li key={activity.id + activity.name}>
                  <p>{activity.name} =&gt; {activity.state}</p>
                  <ul className="pl-5">
                    <li key={activity.id + "-large-image"}>Large Image: <Image width={64} height={64} src={getAppAssetURL(activity.application_id || "", activity.assets?.large_image || "")} alt={`${activity.application_id}${activity.assets?.large_image}`} /></li>
                    <li key={activity.id + "-large-text"}>Large Text: {activity.assets?.large_text}</li>
                    <li key={activity.id + "-small-image"}>Small Image: <Image width={64} height={64} src={getAppAssetURL(activity.application_id || "", activity.assets?.small_image || "")} alt={`${activity.application_id}${activity.assets?.small_image}`} /></li>
                    <li key={activity.id + "-small-text"}>Small Text: {activity.assets?.small_text}</li>
                  </ul>
                </li>
              ))}
            </ul>
          </div>
          :
          <p>Loading...</p>
        }
      </div>
    </main>
  );
}
