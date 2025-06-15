import axios from "axios";

export const spotifyApi = axios.create({
  baseURL: "https://api.spotify.com/v1",
  headers: {
    "Authorization": `Bearer ${process.env.SPOTIFY_ACCESS_TOKEN}`,
  },
});
