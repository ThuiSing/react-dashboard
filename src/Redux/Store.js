import { configureStore } from "@reduxjs/toolkit";
import BloodSlices from "./Slices/BloodSlices";

export const store = configureStore({
  reducer: {
    bloodDonations: BloodSlices,
  },
});
