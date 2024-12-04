import { createSlice } from "@reduxjs/toolkit";

// ----------------------------------------------------------------------
// Initial State
const initialState = {
  allFeedbacks: [], // All feedback/complaint entries
  error: null, // Error state if needed
  isLoader: false, // Loader for async actions
};

const feedbackSlice = createSlice({
  name: "feedback",
  initialState,
  reducers: {
    startLoader(state) {
      state.isLoader = true;
    },
    hasError(state, action) {
      state.isLoader = false;
      state.error = action.payload;
    },
    addFeedback(state, action) {
      state.allFeedbacks = [...state.allFeedbacks, action.payload]; 
      state.isLoader = false;
    },
  },
});

// ----------------------------------------------------------------------
// Actions
export const { startLoader, hasError, addFeedback } = feedbackSlice.actions;

// Reducer
export default feedbackSlice.reducer;

// ----------------------------------------------------------------------
// Async Action for adding feedback/complaint

export function submitFeedback(data) {
    return async (dispatch) => {
      dispatch(startLoader());
      try {
        // Simulate async operation
        await new Promise((resolve) => setTimeout(resolve, 500));
  
        const feedbackEntry = data;
        console.log(feedbackEntry, "data");
  
        dispatch(addFeedback(feedbackEntry));
        return { success: true }; // Return success object
      } catch (error) {
        dispatch(hasError(error.message || "Failed to submit feedback"));
        return { success: false, error: error.message };
      }
    };
  }
  
