import { createSlice } from "@reduxjs/toolkit";
// utils
import axios from "axios";

// import { machineUrl, baseUrl } from "../../config/secrets";
import { dispatch } from "../store";
import { setStorageItem } from "../../utils/helper_functions";

// ----------------------------------------------------------------------

const initialState = {
  isLoading: false,
  error: null,
  user: null,
  emailPass: null,
  addUser: null,
  totalUsers: 0,
  allUsers: {},
  bunch: [],
  crmUsers: [],
  dashboardData: {},
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // START LOADING
    startLoading(state) {
      state.isLoading = true;
    },

    resetAuth: () => initialState,

    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    // GET EVENTS
    getSigninSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      console.log("action.payload",action.payload)
      state.user = action.payload;
      console.log("state.user",state.user)
    },

    getEmailPassSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.emailPass = action.payload;
    },

    getAddUserSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.addUser = action.payload;
    },

    getAllUserSuccess(state, action) {
      state.error = null;
      (state.totalUsers = action.payload.total),
        (state.allUsers = {
          ...state.allUsers,
          [action.payload.page]: action.payload.data,
        });
      state.isLoading = false;
    },

    getDashboardDataSuccess(state, action) {
      state.error = null;
      state.isLoading = false;
      state.dashboardData = action.payload;
    },
    getCRMUsersSuccess(state, action) {
      state.error = null;
      state.isLoading = false;
      state.crmUsers = action.payload;
    },
    // addBunchData(state, action) {
    //   state.bunch = [...state.bunch, action.payload]; // Assuming action.payload contains an array of bunch rows
    // },
  },
});

// Reducer
export default slice.reducer;

// Actions
export const {
  getSigninSuccess,
  resetAuth,
  getEmailPassSuccess,
  getAddUserSuccess,
  addBunchData,
} = slice.actions;

// ----------------------------------------------------------------------

// export function signIn(user) {
//   return async () => {
//     dispatch(slice.actions.startLoading());

//     try {
//       const response = await axios.post(`${baseUrl}/auth/login`, user);
      
//       console.log("LOGIN RESPONSE", response);
//       dispatch(slice.actions.resetAuth());
      
//       dispatch(slice.actions.getSigninSuccess(response?.data?.data));
//       return response?.data;
//     } catch (error) {
//       dispatch(slice.actions.hasError(error?.response?.data));
//       return error?.response?.data;
//     }
//   };
// }

// export function forgotPass(data) {
//   return async () => {
//     dispatch(slice.actions.startLoading());

//     try {
//       const response = await axios.post(
//         `${baseUrl}/auth/forgot-password`,
//         data,
//         {
//           headers: header,
//         }
//       );
//       dispatch(slice.actions.getEmailPassSuccess(response.data));
//       return response?.data;
//     } catch (error) {
//       dispatch(slice.actions.hasError(error?.response?.data));
//       return error?.response?.data;
//     }
//   };
// }

// export function updatePass(data) {
//   return async () => {
//     console.log("data",data)
//     dispatch(slice.actions.startLoading());

//     try {
//       const response = await axios.put(
//         `${baseUrl}/auth/save-password`,
//         data
//       );
//     console.log("data response",response)

//       dispatch(slice.actions.getEmailPassSuccess(response.data));
//       return response?.data;
//     } catch (error) {
//     console.log("dataerrr",error)

//       dispatch(slice.actions.hasError(error?.response?.data));
//       return error?.response?.data;
//     }
//   };
// }

// export function addUser(data) {
//   return async () => {
//     dispatch(slice.actions.startLoading());

//     try {
//       const response = await axios.post(`${baseUrl}/auth/invite-user`, data);
//       console.log(response?.data);
//       dispatch(slice.actions.getAddUserSuccess(response.data?.data));
//       return response?.data;
//     } catch (error) {
//       dispatch(slice.actions.hasError(error?.response?.data));
//       return error?.response?.data;
//     }
//   };
// }

// export function changeStatus(data) {
//   return async () => {
//     try {
//       const response = await axios.put(
//         `${baseUrl}/auth/activate-user`,
//         data,
       
//       );
//       console.log("responseChanestatus",response)
//       return response?.data;
//     } catch (error) {
//       dispatch(slice.actions.hasError(error?.response?.data));
//       return error?.response?.data;
//     }
//   };
// }

// export function deleteUser(id) {
//   return async () => {
//     try {
//       const response = await axios.delete(`${baseUrl}/auth/delete/${id}`);
//       return response?.data;
//     } catch (error) {
//       dispatch(slice.actions.hasError(error?.response?.data));
//       return error?.response?.data;
//     }
//   };
// }

// export function editUser(data) {
//   return async () => {
//     try {
//       dispatch(slice.actions.startLoading());
//       console.log("editUser data",data);
//       const response = await axios.put(`${baseUrl}/auth/edit-data`, data);
//       console.log("response?.data editUser",response?.data);
      
//       dispatch(slice.actions.getSigninSuccess(response?.data));
//       await setStorageItem("user",response?.data?.data);


//       return response?.data;
//     } catch (error) {
//       dispatch(slice.actions.hasError(error?.response?.data));
//       return error?.response?.data;
//     }
//   };
// }

// export function getAllUsers(page = 1, limit = 10) {
//   return async () => {
//     try {
//       const response = await axios.get(
//         `${baseUrl}/auth/all-users?take=${limit}&skip=${page * 10}`
//       );
//       console.log(
//         "RESPONSE OF GET USERS",
//         page,
//         limit,
//         response?.data?.data?.users
//       );
//       if (response?.data?.statusCode === 200) {
//         await dispatch(
//           slice.actions.getAllUserSuccess({
//             page,
//             total: response?.data?.data?.total,
//             data: response?.data?.data?.users,
//           })
//         );
//         return response?.data?.data?.users;
//       }
//     } catch (error) {
//       await dispatch(slice.actions.hasError(error?.response?.data));
//       return error?.response?.data;
//     }
//   };
// }

// export function checkUserExist(data) {
//   return async () => {
//     try {
//       const response = await axios.post(
//         `${machineUrl}/user/check_user_exists`,
//         data,
//         {
//           headers: header,
//         }
//       );
//       return response?.data;
//     } catch (error) {
//       return error?.response?.data;
//     }
//   };
// }

// export function getDashboardData() {
//   return async () => {
//     try {
//       const response = await axios.get(
//         `${machineUrl}/dashboard/get_dashboard_data`,
//         {
//           headers: header,
//         }
//       );
//       // console.log("RESPONSE OF GET DASHBOARD DATA", response);

//       if (response?.data?.status === 200) {
//         await dispatch(
//           slice.actions.getDashboardDataSuccess(response?.data?.data)
//         );
//       }
//     } catch (error) {
//       await dispatch(slice.actions.hasError(error?.response?.data));
//       return error?.response?.data;
//     }
//   };
// }

