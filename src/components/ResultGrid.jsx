import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUnsplashPhotos, fetchPexelsVideos } from "../api/mediaApi";
import { setResults } from "../redux/features/searchSlice";
import ResultCard from "./ResultCard";

const ResultGrid = () => {
  const { query, activeTab, results, loading } = useSelector(
    (store) => store.search,
  );
  const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      if (!query) return;

      if (activeTab === "Photos") {
        const photos = await fetchUnsplashPhotos(query);
        const formatted = photos.map((photo) => ({
          id: photo.id,
          type: "photo",
          url: photo.urls.small,
          alt: photo.alt_description || photo.description || "Unsplash image",
        }));
        dispatch(setResults(formatted));
      } else {
        const videos = await fetchPexelsVideos(query);
        const formatted = videos.map((video) => ({
          id: video.id,
          type: "video",
          url: video.video_files?.[0]?.link,
          alt: video.user?.name || "Pexels video",
        }));
        dispatch(setResults(formatted));
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [activeTab, query]);

  return (
    <div className="bg-gray-950 min-h-screen px-4 sm:px-6 lg:px-10">
      {loading ? (
        <div className="flex justify-center items-center h-64 text-gray-400 text-lg">
          Loading results...
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-8">
          {results.map((item) => (
            <ResultCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ResultGrid;
