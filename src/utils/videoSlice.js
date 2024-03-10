import { createSlice } from "@reduxjs/toolkit";
import { VIDEO_COUNT } from "./constants";

const videoSlice = createSlice({
  name: "video",
  initialState: {
    records: [],
    nextPageToken: "",
  },
  reducers: {
    addVideoRecords: (state, action) => {
      if (state.records.length >= VIDEO_COUNT) state.records.splice(0, 50);
      state.records = [...state.records, ...action.payload.records];
      state.nextPageToken = action.payload.nextPageToken;
    },
    setVideoRecords: (state, action) => {
      state.records = action.payload;
      state.nextPageToken = "";
    },
  },
});

export const { addVideoRecords, setVideoRecords } = videoSlice.actions;
export default videoSlice.reducer;
