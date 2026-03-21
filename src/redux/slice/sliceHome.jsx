import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosBaseURL } from "../../apis/aclApi";

const initialState = {
  fontSize: 16,
  loading: false,
  error: "",
  events: {},
  gallery: {},
  aboutUs: {},
  noticeTenders: {},
  banner: {},
};

// 1> fetching events
export const fetchEvents = createAsyncThunk(
  "aclSliceInternal/fetchEvents",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosBaseURL.get(`/get-news`);
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

// 2> fetching gallery
export const fetchGallery = createAsyncThunk(
  "aclSliceInternal/fetchGallery",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosBaseURL.get(`/get-gallery`);
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

// 3> fetching about us (read more)
export const fetchAboutUs = createAsyncThunk(
  "aclSliceInternal/fetchAboutUs",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosBaseURL.get(`/get-page/about-us`);
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

// 4> Notices and Tenders
export const fetchNoticeAndTenders = createAsyncThunk(
  "aclSliceInternal/fetchNoticeAndTenders",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosBaseURL.get(`/get-notice`);
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

// 4> Banner
export const fetchBanner = createAsyncThunk(
  "aclSliceInternal/fetchBanner",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosBaseURL.get(`/get-banners`);
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

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    fontSizeIncrease: (state) => {
      state.fontSize += 1;
    },
    fontSizeDecrease: (state) => {
      state.fontSize -= 1;
    },
    fontSizeOriginal: (state) => {
      state.fontSize = 16;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEvents.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchEvents.fulfilled, (state, action) => {
        state.events = action.payload;
        state.loading = false;
      })
      .addCase(fetchEvents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    builder
      .addCase(fetchGallery.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchGallery.fulfilled, (state, action) => {
        state.gallery = action.payload;
        state.loading = false;
      })
      .addCase(fetchGallery.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    builder
      .addCase(fetchAboutUs.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAboutUs.fulfilled, (state, action) => {
        state.aboutUs = action.payload;
        state.loading = false;
      })
      .addCase(fetchAboutUs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    builder
      .addCase(fetchNoticeAndTenders.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchNoticeAndTenders.fulfilled, (state, action) => {
        state.noticeTenders = action.payload;
        state.loading = false;
      })
      .addCase(fetchNoticeAndTenders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    builder
      .addCase(fetchBanner.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBanner.fulfilled, (state, action) => {
        state.banner = action.payload;
        state.loading = false;
      })
      .addCase(fetchBanner.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { fontSizeIncrease, fontSizeDecrease, fontSizeOriginal } =
  homeSlice.actions;
export default homeSlice.reducer;
