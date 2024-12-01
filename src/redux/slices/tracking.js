import { createSlice } from "@reduxjs/toolkit";
// utils
import axios from "axios";
import { dispatch } from "../store";

// ----------------------------------------------------------------------

const initialState = {
  error: null,
  points: [],
  isLoader: false
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // START LOADING
    startLoader(state) {
      state.isLoader = true;
    },

    // HAS ERROR
    hasError(state, action) {
      state.isLoader = false;
      state.error = action.payload;
    },

    // GET EVENTS
    getSigninSuccess(state, action) {
      state.isLoader = false;
      state.error = null;
      state.user = action.payload;
    },

    getSignUpSuccess(state, action) {
      state.isLoader = false;
      state.error = null;
      state.signup = action.payload;
    },

    resetTracking: () => initialState
  }
});

// Reducer
export default slice.reducer;

// Actions
export const { getSigninSuccess, resetAuth } = slice.actions;

// ----------------------------------------------------------------------

export function signUp(user) {
  return async (dispatch) => {
    dispatch(slice.actions.startLoader());

    try {
      // Simulated mock response
      const mockResponse = {
        id: "12345",
        email: user.email,
        role: user.role || "student",
        name: user.name || "John Doe",
      };

      // Simulate delay
      await new Promise((resolve) => setTimeout(resolve, 500));

      dispatch(slice.actions.getSignUpSuccess(mockResponse));
      return mockResponse;
    } catch {
      const error = { message: "Simulated error occurred" };
      dispatch(slice.actions.hasError(error));
      return error;
    }
  };
}

