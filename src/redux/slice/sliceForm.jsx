import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosBaseURL } from "../../apis/aclApi";

const initialState = {
  loading: false,
  error: "",
  registrationFormFirst: {},
  otp: "",
  resendOtp: "",
  registrationFormThird: {},
  regOrgThird: {},
  subscriptionForm: {},
  // defaultProfileImage: {}
};

// 1> send first registration form
export const fetchRegistrationFormFirst = createAsyncThunk(
  "catSliceInternal/fetchRegistrationFormFirst",
  async ({ endpoint, payload }, { rejectWithValue }) => {
    try {
      const response = await axiosBaseURL.post(`/${endpoint}`, payload);
      return response.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log(message);
      return rejectWithValue(message);
    }
  }
);

// 2> send otp
export const sendOtp = createAsyncThunk(
  "catSliceInternal/sendOtp",
  async ({ endpoint, payload }, { rejectWithValue }) => {
    try {
      const response = await axiosBaseURL.post(`/${endpoint}`, payload);
      return response.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log(message);
      return rejectWithValue(message);
    }
  }
);

// 3> resend OTP
export const reSendOtp = createAsyncThunk(
  "catSliceInternal/reSendOtp",
  async ({ endpoint, payload }, { rejectWithValue }) => {
    try {
      const response = await axiosBaseURL.post(`/${endpoint}`, payload);
      return response.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log(message);
      return rejectWithValue(message);
    }
  }
);

// 3> send third form for artist
export const sendRegistrationFormThird = createAsyncThunk(
  "catSliceInternal/sendRegistrationFormThird",
  async ({ endpoint, payload }, { rejectWithValue }) => {
    try {
      const response = await axiosBaseURL.post(`/${endpoint}`, payload);
      return response.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log(message);
      return rejectWithValue(message);
    }
  }
);

// 4> send third form org
export const sendRegOrgThird = createAsyncThunk(
  "catSliceInternal/sendRegOrgThird",
  async ({ endpoint, payload }, { rejectWithValue }) => {
    try {
      const response = await axiosBaseURL.post(`/${endpoint}`, payload);
      return response.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log(message);
      return rejectWithValue(message);
    }
  }
);

// 5> send subscription form
export const sendSubscriptionForm = createAsyncThunk(
  "catSliceInternal/sendSubscriptionForm",
  async ({ endpoint, payload }, { rejectWithValue }) => {
    try {
      const response = await axiosBaseURL.post(`/${endpoint}`, payload);
      return response.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log(message);
      return rejectWithValue(message);
    }
  }
);

// 6 default Profile Image
// export const sendDefaultProfileImage = createAsyncThunk(
//   "catSliceInternal/sendDefaultProfileImage",
//   async ({ endpoint, payload }, { rejectWithValue }) => {
//     try {
//       const response = await axiosBaseURL.post(`/${endpoint}`, payload);
//       return response.data;
//     } catch (error) {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString();
//       console.log(message);
//       return rejectWithValue(message);
//     }
//   }
// );

export const registrationFormFirstslice = createSlice({
  name: "form",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // first Registration form
    builder
      .addCase(fetchRegistrationFormFirst.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchRegistrationFormFirst.fulfilled, (state, action) => {
        state.registrationFormFirst = action.payload;
        state.loading = false;
      })
      .addCase(fetchRegistrationFormFirst.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    //  otp
    builder
      .addCase(sendOtp.pending, (state) => {
        state.loading = true;
      })
      .addCase(sendOtp.fulfilled, (state, action) => {
        state.otp = action.payload;
        state.loading = false;
      })
      .addCase(sendOtp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

      //  resend otp
    builder
    .addCase(reSendOtp.pending, (state) => {
      state.loading = true;
    })
    .addCase(reSendOtp.fulfilled, (state, action) => {
      state.resendOtp = action.payload;
      state.loading = false;
    })
    .addCase(reSendOtp.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // Third Registration form for artist
    builder
      .addCase(sendRegistrationFormThird.pending, (state) => {
        state.loading = true;
      })
      .addCase(sendRegistrationFormThird.fulfilled, (state, action) => {
        state.registrationFormThird = action.payload;
        state.loading = false;
      })
      .addCase(sendRegistrationFormThird.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

      // Third Registration form for Organiser
    builder
    .addCase(sendRegOrgThird.pending, (state) => {
      state.loading = true;
    })
    .addCase(sendRegOrgThird.fulfilled, (state, action) => {
      state.regOrgThird = action.payload;
      state.loading = false;
    })
    .addCase(sendRegOrgThird.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // subscriptionForm
    builder
    .addCase(sendSubscriptionForm.pending, (state) => {
      state.loading = true;
    })
    .addCase(sendSubscriptionForm.fulfilled, (state, action) => {
      state.subscriptionForm = action.payload;
      state.loading = false;
    })
    .addCase(sendSubscriptionForm.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // Default Profile Image
    // builder
    // .addCase(sendDefaultProfileImage.pending, (state) => {
    //   state.loading = true;
    // })
    // .addCase(sendDefaultProfileImage.fulfilled, (state, action) => {
    //   state.defaultProfileImage = action.payload;
    //   state.loading = false;
    // })
    // .addCase(sendDefaultProfileImage.rejected, (state, action) => {
    //   state.loading = false;
    //   state.error = action.payload;
    // });
  },
});

export default registrationFormFirstslice.reducer;
