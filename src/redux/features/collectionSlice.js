import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("collection")) || [];

const collectionSlice = createSlice({
  name: "collection",
  initialState,
  reducers: {
    addToCollection: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("collection", JSON.stringify(state));
    },

    removeFromCollection: (state, action) => {
      const updated = state.filter((item) => item.id !== action.payload.id);
      localStorage.setItem("collection", JSON.stringify(updated));
      return updated;
    },
  },
});

export const { addToCollection, removeFromCollection } =
  collectionSlice.actions;

export default collectionSlice.reducer;
