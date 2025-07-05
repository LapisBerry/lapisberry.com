const DISCORD_CDN_URL = "https://cdn.discordapp.com";

export const getAvatarURL = (userId: string, avatarId: string) => {
  return `${DISCORD_CDN_URL}/avatars/${userId}/${avatarId}`;
};

export const getAvatarDecorationURL = (assetId: string) => {
  return `${DISCORD_CDN_URL}/avatar-decoration-presets/${assetId}`;
}

export const getAppAssetURL = (applicationId: string, imageId: string) => {
  return `${DISCORD_CDN_URL}/app-assets/${applicationId}/${imageId}`;
};
