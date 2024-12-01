import { createSlice } from "@reduxjs/toolkit";

// ----------------------------------------------------------------------

const initialState = {
  error: null,
  formData: {},
  allRequests: [],
  isLoader: false,
};
const slice = createSlice({
  name: "card",
  initialState,
  reducers: {
    startLoader(state) {
      state.isLoader = true;
    },
    hasError(state, action) {
      state.isLoader = false;
      state.error = action.payload;
    },
    setFormData(state, action) {
      state.formData = action.payload;
      state.isLoader = false;
      state.error = null;
    },
    addFormDataToAllRequests(state, action) {
      console.log("Previous allRequests:", state.allRequests);
      state.allRequests = [...state.allRequests, action.payload];
      console.log("Updated allRequests:", state.allRequests);
      state.isLoader = false;
    },
    updateStatus(state, action) {
      const { id, status } = action.payload;
      // Find the request by ID and update its status
      const updatedRequests = state.allRequests.map((request) =>
        request.id === id ? { ...request, status } : request
      );
      state.allRequests = updatedRequests;
    },
    resetCard: () => initialState,
  },
});
// Actions
export const {
  startLoader,
  hasError,
  setFormData,
  addFormDataToAllRequests,
  resetCard,
} = slice.actions;
// Reducer
export default slice.reducer;

// ----------------------------------------------------------------------
// Async Action to simulate form submission
export function submitFormData(data) {
  return async (dispatch) => {
    dispatch(slice.actions.startLoader());

    try {
      await new Promise((resolve) => setTimeout(resolve, 500));

      // Extract images and create preview URLs
      const previewData = {
        name: data.name,
        id: data.id,
        rollNo: data.rollNo,
        semester: data.semester,
        location: data.location,
        status: data.status,
        previewStudentImage: data.studentImage
          ? URL.createObjectURL(data.studentImage)
          : null,
        previewChalaanImage: data.chalaanImage
          ? URL.createObjectURL(data.chalaanImage)
          : null,
      };
      // Set form data
      //   dispatch(slice.actions.setFormData(previewData));

      // Add form data to allRequests
      dispatch(slice.actions.addFormDataToAllRequests(previewData));

      return { success: true };
    } catch (error) {
      dispatch(slice.actions.hasError(error.message || "Error occurred"));
      return { success: false, error: error.message };
    }
  };
}
export function changeStatus(id, newStatus) {
  return (dispatch) => {
    dispatch(slice.actions.updateStatus({ id, status: newStatus }));
    console.log(`Status updated for ID ${id}: ${newStatus}`);
  };
}
