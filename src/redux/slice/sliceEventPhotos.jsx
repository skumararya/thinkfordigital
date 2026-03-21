import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosBaseURL } from "../../apis/aclApi";

const initialState = {
  loading: false,
  loadingEventSearch: false,
  error: "",
  events: {},
  eventPhotos: {},
  eventVideos: {},
  eventAudios: {},
  eventSearchResponse: {},
};

// 0> fetching events
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

// 1> fetching event photos
export const fetchEventPhotos = createAsyncThunk(
  "aclSliceInternal/fetchEventPhotos",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axiosBaseURL.get(`/event-photos/${id}`);
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

// 2> fetching event videos
export const fetchEventVideos = createAsyncThunk(
  "aclSliceInternal/fetchEventVideos",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axiosBaseURL.get(`/event-videos/${id}`);
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

// 3> fetching event audios
export const fetchEventAudios = createAsyncThunk(
  "aclSliceInternal/fetchEventAudios",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axiosBaseURL.get(`/event-audios/${id}`);
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

// 4> fetching event search
export const fetchEventSearch = createAsyncThunk(
  "aclSliceInternal/fetchEventSearch",
  async ({ endpoint, formData }, { rejectWithValue }) => {
    try {
      const response = await axiosBaseURL.post(endpoint, formData);
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

export const sliceEventPhotos = createSlice({
  name: "eventPhotos",
  initialState,
  reducers: {
    reset: (state) => {
      state.eventSearchResponse = {};
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
      .addCase(fetchEventPhotos.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchEventPhotos.fulfilled, (state, action) => {
        state.eventPhotos = action.payload;
        state.loading = false;
      })
      .addCase(fetchEventPhotos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    builder
      .addCase(fetchEventAudios.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchEventAudios.fulfilled, (state, action) => {
        state.eventAudios = action.payload;
        state.loading = false;
      })
      .addCase(fetchEventAudios.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    builder
      .addCase(fetchEventVideos.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchEventVideos.fulfilled, (state, action) => {
        state.eventVideos = action.payload;
        state.loading = false;
      })
      .addCase(fetchEventVideos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    builder
      .addCase(fetchEventSearch.pending, (state) => {
        state.loadingEventSearch = true;
      })
      .addCase(fetchEventSearch.fulfilled, (state, action) => {
        state.eventSearchResponse = action.payload;
        state.loadingEventSearch = false;
      })
      .addCase(fetchEventSearch.rejected, (state, action) => {
        state.loadingEventSearch = false;
        state.error = action.payload;
      });
  },
});

export const { reset } = sliceEventPhotos.actions;
export default sliceEventPhotos.reducer;
