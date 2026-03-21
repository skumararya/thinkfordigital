import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosBaseURL } from "../../apis/aclApi";

const initialState = {
  loading: false,
  error: "",
  accessibility: {},
  archives: {},
  copyrightPolicy: {},
  help: {},
  hyperlinkPolicy: {},
  privacyPolicy: {},
  rti: {},
  statement: {},
  tenders: {},
  termsConditions: {},
  contactUs: {},
  getVisitors: {},
  addVisitors: {},
  lastUpdated: {},
  socialLinks: {},
};

// 1> fetching banner
export const fetchAccessibility = createAsyncThunk(
  "aclSliceInternal/fetchAccessibility",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosBaseURL.get(`/get-page/accessibility`);
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

// 2> fetching archives
export const fetchArchives = createAsyncThunk(
  "aclSliceInternal/fetchArchives",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosBaseURL.get(`/get-page/archives`);
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

// 3> fetching copyrightPolicy
export const fetchCopyrightPolicy = createAsyncThunk(
  "aclSliceInternal/fetchCopyrightPolicy",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosBaseURL.get(`/get-page/copyright-policy`);
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

// 4> fetching help
export const fetchHelp = createAsyncThunk(
  "aclSliceInternal/fetchHelp",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosBaseURL.get(`/get-page/help`);
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

// 5> fetching hyperlinkPolicy
export const fetchHyperlinkPolicy = createAsyncThunk(
  "aclSliceInternal/fetchHyperlinkPolicy",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosBaseURL.get(`/get-page/hyperlinkpolicy`);
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

// 6> fetching privacyPolicy
export const fetchPrivacyPolicy = createAsyncThunk(
  "aclSliceInternal/fetchPrivacyPolicy",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosBaseURL.get(`/get-page/privacy-policy`);
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

// 7> fetching rti
export const fetchRti = createAsyncThunk(
  "aclSliceInternal/fetchRti",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosBaseURL.get(`/get-page/rti`);
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

// 8> fetching statement
export const fetchStatement = createAsyncThunk(
  "aclSliceInternal/fetchStatement",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosBaseURL.get(`/get-page/statement`);
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

// 9> fetching tenders
export const fetchTenders = createAsyncThunk(
  "aclSliceInternal/fetchTenders",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosBaseURL.get(`/get-page/tenders`);
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

// 10> fetching termsConditions
export const fetchTermsConditions = createAsyncThunk(
  "aclSliceInternal/fetchTermsConditions",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosBaseURL.get(`/get-page/termsconditions`);
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

// 11> fetching contactUs
export const fetchContactUs = createAsyncThunk(
  "aclSliceInternal/fetchContactUs",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosBaseURL.get(`/get-page/contact-us`);
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

// 12> Last Updated
export const fetchLastUpdated = createAsyncThunk(
  "aclSliceInternal/fetchLastUpdated",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosBaseURL.get(`getlastupdate`);
      return response.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return rejectWithValue(message);
    }
  }
);

// 13> getting visitors
export const fetchGetVisitors = createAsyncThunk(
  "catSliceInternal/fetchGetVisitors",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosBaseURL.get("getVisitor");
      return response.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return rejectWithValue(message);
    }
  }
);

const getIP = async () => {
  try {
    const res = await axios.get("https://geolocation-db.com/json/");
    return   res.data.IPv4;
  } catch (error) {
    console.log(error);
  }
};

// 14> Adding Visitors
export const fetchAddVisitors = createAsyncThunk(
  "catSliceInternal/fetchAddVisitors",
  async (_, { rejectWithValue }) => {
    try {
      const ip = await getIP();
      const response = await axiosBaseURL.get(`addVisitor/${ip}`);
      return response.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return rejectWithValue(message);
    }
  }
);

// 14> Social Media
export const fetchSocialLinks = createAsyncThunk(
  "catSliceInternal/fetchSocialLinks",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosBaseURL.get("get-social_link");
      return response.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return rejectWithValue(message);
    }
  }
);

export const footerSlice = createSlice({
  name: "footer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAccessibility.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAccessibility.fulfilled, (state, action) => {
        state.accessibility = action.payload;
        state.loading = false;
      })
      .addCase(fetchAccessibility.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    builder
      .addCase(fetchArchives.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchArchives.fulfilled, (state, action) => {
        state.archives = action.payload;
        state.loading = false;
      })
      .addCase(fetchArchives.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    builder
      .addCase(fetchCopyrightPolicy.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCopyrightPolicy.fulfilled, (state, action) => {
        state.copyrightPolicy = action.payload;
        state.loading = false;
      })
      .addCase(fetchCopyrightPolicy.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    builder
      .addCase(fetchHelp.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchHelp.fulfilled, (state, action) => {
        state.help = action.payload;
        state.loading = false;
      })
      .addCase(fetchHelp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    builder
      .addCase(fetchHyperlinkPolicy.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchHyperlinkPolicy.fulfilled, (state, action) => {
        state.hyperlinkPolicy = action.payload;
        state.loading = false;
      })
      .addCase(fetchHyperlinkPolicy.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    builder
      .addCase(fetchPrivacyPolicy.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPrivacyPolicy.fulfilled, (state, action) => {
        state.privacyPolicy = action.payload;
        state.loading = false;
      })
      .addCase(fetchPrivacyPolicy.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    builder
      .addCase(fetchRti.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchRti.fulfilled, (state, action) => {
        state.rti = action.payload;
        state.loading = false;
      })
      .addCase(fetchRti.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    builder
      .addCase(fetchStatement.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchStatement.fulfilled, (state, action) => {
        state.statement = action.payload;
        state.loading = false;
      })
      .addCase(fetchStatement.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    builder
      .addCase(fetchTenders.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTenders.fulfilled, (state, action) => {
        state.tenders = action.payload;
        state.loading = false;
      })
      .addCase(fetchTenders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    builder
      .addCase(fetchTermsConditions.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTermsConditions.fulfilled, (state, action) => {
        state.termsConditions = action.payload;
        state.loading = false;
      })
      .addCase(fetchTermsConditions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    builder
      .addCase(fetchContactUs.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchContactUs.fulfilled, (state, action) => {
        state.contactUs = action.payload;
        state.loading = false;
      })
      .addCase(fetchContactUs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // get visitors
    builder
      .addCase(fetchGetVisitors.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchGetVisitors.fulfilled, (state, action) => {
        state.getVisitors = action.payload;
        state.loading = false;
      })
      .addCase(fetchGetVisitors.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // add visitors
    builder
      .addCase(fetchAddVisitors.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAddVisitors.fulfilled, (state, action) => {
        state.addVisitors = action.payload;
        state.loading = false;
      })
      .addCase(fetchAddVisitors.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // last Updated on
    builder
      .addCase(fetchLastUpdated.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchLastUpdated.fulfilled, (state, action) => {
        state.lastUpdated = action.payload;
        state.loading = false;
      })
      .addCase(fetchLastUpdated.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    // social links
    builder
      .addCase(fetchSocialLinks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSocialLinks.fulfilled, (state, action) => {
        state.socialLinks = action.payload;
        state.loading = false;
      })
      .addCase(fetchSocialLinks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default footerSlice.reducer;
