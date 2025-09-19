const DISCORD_CDN_URL = "https://cdn.discordapp.com";

export const getAvatarURL = (userId: string, avatarId: string) => {
  return `${DISCORD_CDN_URL}/avatars/${userId}/${avatarId}`;
};

export const getAvatarDecorationURL = (assetId: string) => {
  return `${DISCORD_CDN_URL}/avatar-decoration-presets/${assetId}`;
};

export const resolveDiscordAssetURL = (imageId: string, appId: string | null = null): string => {
  // 1. Discord App Asset ID (numeric string)
  if (/^\d{16,}$/.test(imageId)) {
    if (!appId) {
      throw new Error("App ID is required to resolve a Discord asset ID.");
    }
    return `https://cdn.discordapp.com/app-assets/${appId}/${imageId}.png`;
  }

  // 2. Spotify image (starts with 'spotify:')
  if (imageId.startsWith("spotify:")) {
    const spotifyId = imageId.split(":")[1];
    return `https://i.scdn.co/image/${spotifyId}`;
  }

  // 3. Media Proxy external (mp:external/.../https/...)
  if (imageId.startsWith("mp:external/")) {
    const parts = imageId.replace("mp:external/", "").split("/https/");
    if (parts.length === 2) {
      return `https://media.discordapp.net/external/${parts[0]}/https/${parts[1]}`;
    }
  }

  // 4. Internal Discord icons (discord:soundcloud, etc.)
  // if (imageId.startsWith("discord:")) {
  //   const key = imageId.split(":")[1];
  //   // You can map known ones yourself here:
  //   const iconMap = {
  //     soundcloud: "https://cdn-icons-png.flaticon.com/512/145/145809.png",
  //     // fallback or placeholder
  //   };
  //   return iconMap[key] || null;
  // }

  // // 5. Already a direct HTTPS URL (very rare, but safe)
  // if (imageId.startsWith("http")) {
  //   return imageId;
  // }

  return "/"; // TODO: Add Fallback to Unknown format
};
