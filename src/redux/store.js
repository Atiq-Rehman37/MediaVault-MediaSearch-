import { configureStore } from "@reduxjs/toolkit";
import searchreducer from "./features/searchSlice";
import collectionreducer from "./features/collectionSlice";
const store = configureStore({
  reducer: {
    search: searchreducer,
    collection: collectionreducer,
  },
});

export default store;
