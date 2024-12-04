import { createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  pointLocation: [
    { id: "point1", location: null },
    { id: "point2", location: null },
    { id: "point3", location: null },
    { id: "point4", location: null },
    { id: "point5", location: null },
    { id: "point6", location: null },
    { id: "point7", location: null },
    { id: "point8", location: null },
    { id: "point9", location: null },
    { id: "point10", location: null },
  ],
  isLoading: false,
  error: null,
};

const slice = createSlice({
  name: "tracking",
  initialState,
  reducers: {
    // Start loading
    startLoading(state) {
      state.isLoading = true;
      state.error = null;
    },

    // Handle error
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    // Update a specific point's location
    updatePointLocation(state, action) {
      const { id, location } = action.payload;
      const point = state.pointLocation.find((p) => p.id === id);
      if (point) {
        point.location = location;
      }
      state.isLoading = false;
    },

    // Reset pointLocation to initial state
    resetpointLocation() {
      return initialState;
    },
  },
});

// Reducer
export default slice.reducer;

// Actions
export const { startLoading, hasError, updatePointLocation, resetpointLocation } =
  slice.actions;

// Async function to simulate fetching location data and updating the point
export function setPointLocation(id, latitude, longitude) {
  return async (dispatch) => {
    dispatch(startLoading());
    try {
      // Simulate an API call delay
      await new Promise((resolve) => setTimeout(resolve, 500));
      dispatch(updatePointLocation({ id, location: [latitude, longitude] }));
    } catch (error) {
      dispatch(hasError(error.message || "Failed to update point location"));
    }
  };
}
