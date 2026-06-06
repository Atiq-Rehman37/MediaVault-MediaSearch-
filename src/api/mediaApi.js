import axios from "axios";

const API_KEY = import.meta.env.VITE_UNSPLASH_KEY;
const PIXEL_API_KEY = import.meta.env.VITE_PIXEL_KEY;

export const fetchUnsplashPhotos = async (query, page = 1, per_page = 20) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    params: { query, page, per_page },
    headers: { Authorization: `Client-ID ${API_KEY}` },
  });
  return response.data.results;
};

export const fetchPexelsVideos = async (query, page = 1, per_page = 12) => {
  const response = await axios.get("https://api.pexels.com/videos/search", {
    params: { query, page, per_page },
    headers: { Authorization: PIXEL_API_KEY },
  });
  return response.data.videos;
};
