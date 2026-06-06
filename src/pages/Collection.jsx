import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCollection } from "../redux/features/collectionSlice";
import { BsBookmarkHeart, BsTrash } from "react-icons/bs";

const Collection = () => {
  const dispatch = useDispatch();
  const storedCollection = useSelector((state) => state.collection);
  useEffect(() => {
    document.title = "MediaVault — My Collection";
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-white px-6 md:px-10 py-8">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <BsBookmarkHeart className="text-3xl text-blue-400" />
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-wide">
          My Collection
        </h1>
      </div>

      {/*Condition Check */}
      {storedCollection.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-32 text-gray-400">
          <BsBookmarkHeart className="text-7xl mb-5 opacity-30" />
          <p className="text-xl font-medium">No items saved yet</p>
          <p className="text-sm mt-2 text-gray-500">
            Save photos or videos to build your personal collection
          </p>
        </div>
      ) : (
        <>
          {/* Count */}
          <p className="text-gray-400 mb-6">
            {storedCollection.length} item
            {storedCollection.length > 1 && "s"} saved
          </p>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {storedCollection.map((item) => (
              <div
                key={item.id}
                className="group relative rounded-2xl overflow-hidden bg-gray-900 border border-gray-800 shadow-lg hover:shadow-2xl transition"
              >
                {/* Media */}
                {item.type === "photo" ? (
                  <img
                    src={item.url}
                    alt={item.title || "media"}
                    className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="relative">
                    <video
                      src={item.url}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-60 object-cover"
                    />
                  </div>
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition flex flex-col justify-end p-4">
                  <p className="text-sm mb-3 line-clamp-2">
                    {item.title || "Saved Media"}
                  </p>

                  <button
                    onClick={() => dispatch(removeFromCollection(item))}
                    className="flex items-center justify-center gap-2 text-sm bg-red-600 hover:bg-red-700 px-4 py-2 rounded-xl transition cursor-pointer"
                  >
                    <BsTrash />
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Collection;
