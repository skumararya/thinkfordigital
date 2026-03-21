import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosBaseURL } from "../../apis/aclApi";

const initialState = {
  isCategoryLoading: false,
  isSubCategoryLoading: false,
  isSecondSubCategoryLoading: false,
  isSecondSubCategoryForMiscLoading: false,
  isThirdSubCategoryLoading: false,
  isArtNameLoading: false,
  isArtNameForMusicLoading: false,
  loading: false,
  error: "",
  categories: {},
  subCategories: {},
  secondSubCategories: {},
  secondSubCategoryForMisc: {},
  thirdSubCategories: {},
  artNames: {},
  artNamesForMusic: {},
  categoryData: {},
  artistList: {},
  artistData: {},
  categoryWiseArtistsList: {},
  subCategoryWiseArtistsList: {},
  searchArtistList: {},
  isSearchArtistListLoading: false,
  artistSearchValues: {},
  artistSearchHome: false
};

// 1> fetching categories
export const fetchCategories = createAsyncThunk(
  "aclSliceInternal/fetchCategories",
  async (originId, { rejectWithValue }) => {
    try {
      // console.log('origin id',originId);
      // if(originId === 'All')
      // originId = '1';
      const response = await axiosBaseURL.get(
        `/get-categoryByorigin/${originId}`
      );
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

// 2> fetching subCategories
export const fetchSubCategories = createAsyncThunk(
  "aclSliceInternal/fetchSubCategories",
  async ({ categoryId, originId }, { rejectWithValue }) => {
    try {
      const response = await axiosBaseURL.get(
        `/get-subCategory/${originId}/${categoryId}`
      );
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

// *> fetching second subCategories for misc
export const fetchSecondSubCategoriesForMisc = createAsyncThunk(
  "aclSliceInternal/fetchSecondSubCategoriesForMisc",
  async ({ originId, subCategoryId }, { rejectWithValue }) => {
    try {
      const response = await axiosBaseURL.get(
        `/get-subCategory/${originId}/${subCategoryId}`
      );
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

// 3 fetching secondSubCategories for Indian Dance  & Indian Music
export const fetchSecondSubCategories = createAsyncThunk(
  "aclSliceInternal/fetchSecondSubCategories",
  async ({ categoryId, subCategoryId }, { rejectWithValue }) => {
    try {
      const response = await axiosBaseURL.get(
        `/get-StateSubCategory/${categoryId}/${subCategoryId}`
      );
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

// 4 fetching thirdSubCategories
export const fetchThirdSubCategories = createAsyncThunk(
  "aclSliceInternal/fetchThirdSubCategories",
  async ({ subCategoryId, secondSubCategoryId }, { rejectWithValue }) => {
    // console.log("subCategory id iz : ", subCategoryId, "secondSubCategory id is : ",secondSubCategoryId);
    try {
      const response = await axiosBaseURL.get(
        `/get-ArtName-substate/${subCategoryId}/${secondSubCategoryId}`
      );
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

// 4 fetching artNames for dance
export const fetchArtNames = createAsyncThunk(
  "aclSliceInternal/fetchArtNames",
  async (subCategoryTwo, { rejectWithValue }) => {
    try {
      const response = await axiosBaseURL.get(`/get-ArtName/${subCategoryTwo}`);
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

// * fetching artNames for music
export const fetchArtNamesForMusic = createAsyncThunk(
  "aclSliceInternal/fetchArtNamesForMusic",
  async (subCategoryThree, { rejectWithValue }) => {
    try {
      const response = await axiosBaseURL.get(
        `/get-ArtName-sub-subcategory/${subCategoryThree}`
      );
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

// 5> sending Category Data
export const sendCategoryData = createAsyncThunk(
  "aclSliceInternal/sendCategoryData",
  async ({ id }, { rejectWithValue }) => {
    try {
      const response = await axiosBaseURL.get(`/getArtistList/${id}`);
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

// 6> fetching artist list
export const fetchArtistList = createAsyncThunk(
  "aclSliceInternal/fetchArtistList",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosBaseURL.get(`/getArtistList`);
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

// 7> fetching artist list
export const fetchArtistData = createAsyncThunk(
  "aclSliceInternal/fetchArtistData",
  async ({ uid }, { rejectWithValue }) => {
    try {
      const response = await axiosBaseURL.get(`/getProfile/${uid}`);
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

// 8> fetching categoryWise Artist List
export const fetchCategoryWiseArtistList = createAsyncThunk(
  "aclSliceInternal/fetchCategoryWiseArtistList",
  async ({ id }, { rejectWithValue }) => {
    try {
      const response = await axiosBaseURL.get(`/getArtistList/${id}`);
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

// 9> fetching subCategoryWise Artist List
export const fetchSubCategoryWiseArtistList = createAsyncThunk(
  "aclSliceInternal/fetchSubCategoryWiseArtistList",
  async ({ id, subId }, { rejectWithValue }) => {
    try {
      const response = await axiosBaseURL.get(`/getArtistList/${id}/${subId}`);
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

// 10> fetching categoryWise Artist List
export const fetchSearchArtistsList = createAsyncThunk(
  "aclSliceInternal/searchArtistsList",
  async ({ endpoint, payload }, { rejectWithValue }) => {
    try {
      const response = await axiosBaseURL.post(endpoint, payload);
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

export const artistpediaSlice = createSlice({
  name: "artistpedia",
  initialState,
  reducers: {
    updateArtistSearchValues: (state,payload) => {
      state.artistSearchValues = {...payload.payload};
    },
    setArtistSearchHome: (state, status) => {
      state.artistSearchHome = status.payload
    }
  },
  extraReducers: (builder) => {
    // 1>
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.isCategoryLoading = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.isCategoryLoading = false;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.isCategoryLoading = false;
        state.error = action.payload;
      });

    // 2>
    builder
      .addCase(fetchSubCategories.pending, (state) => {
        state.isSubCategoryLoading = true;
      })
      .addCase(fetchSubCategories.fulfilled, (state, action) => {
        state.subCategories = action.payload;
        state.isSubCategoryLoading = false;
      })
      .addCase(fetchSubCategories.rejected, (state, action) => {
        state.isSubCategoryLoading = false;
        state.error = action.payload;
      });

    // *>  for misc
    builder
      .addCase(fetchSecondSubCategoriesForMisc.pending, (state) => {
        state.isSecondSubCategoryForMiscLoading = true;
      })
      .addCase(fetchSecondSubCategoriesForMisc.fulfilled, (state, action) => {
        state.secondSubCategoryForMisc = action.payload;
        state.isSecondSubCategoryForMiscLoading = false;
      })
      .addCase(fetchSecondSubCategoriesForMisc.rejected, (state, action) => {
        state.isSecondSubCategoryForMiscLoading = false;
        state.error = action.payload;
      });

    // 3>
    builder
      .addCase(fetchSecondSubCategories.pending, (state) => {
        state.isSecondSubCategoryLoading = true;
      })
      .addCase(fetchSecondSubCategories.fulfilled, (state, action) => {
        state.secondSubCategories = action.payload;
        state.isSecondSubCategoryLoading = false;
      })
      .addCase(fetchSecondSubCategories.rejected, (state, action) => {
        state.isSecondSubCategoryLoading = false;
        state.error = action.payload;
      });

    // *>
    builder
      .addCase(fetchThirdSubCategories.pending, (state) => {
        state.isThirdSubCategoryLoading = true;
      })
      .addCase(fetchThirdSubCategories.fulfilled, (state, action) => {
        state.thirdSubCategories = action.payload;
        state.isThirdSubCategoryLoading = false;
      })
      .addCase(fetchThirdSubCategories.rejected, (state, action) => {
        state.isThirdSubCategoryLoading = false;
        state.error = action.payload;
      });

    // 4>
    builder
      .addCase(fetchArtNames.pending, (state) => {
        state.isArtNameLoading = true;
      })
      .addCase(fetchArtNames.fulfilled, (state, action) => {
        state.artNames = action.payload;
        state.isArtNameLoading = false;
      })
      .addCase(fetchArtNames.rejected, (state, action) => {
        state.isArtNameLoading = false;
        state.error = action.payload;
      });

    // *>
    builder
      .addCase(fetchArtNamesForMusic.pending, (state) => {
        state.isArtNameForMusicLoading = true;
      })
      .addCase(fetchArtNamesForMusic.fulfilled, (state, action) => {
        state.artNamesForMusic = action.payload;
        state.isArtNameForMusicLoading = false;
      })
      .addCase(fetchArtNamesForMusic.rejected, (state, action) => {
        state.isArtNameForMusicLoading = false;
        state.error = action.payload;
      });

    // 5>
    builder
      .addCase(sendCategoryData.pending, (state) => {
        state.loading = true;
      })
      .addCase(sendCategoryData.fulfilled, (state, action) => {
        state.categoryData = action.payload;
        state.loading = false;
      })
      .addCase(sendCategoryData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // 6>
    builder
      .addCase(fetchArtistList.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchArtistList.fulfilled, (state, action) => {
        state.artistList = action.payload;
        state.loading = false;
      })
      .addCase(fetchArtistList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // 7>
    builder
      .addCase(fetchArtistData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchArtistData.fulfilled, (state, action) => {
        state.artistData = action.payload;
        state.loading = false;
      })
      .addCase(fetchArtistData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // 8> fetching categoryWise Artist List
    builder
      .addCase(fetchCategoryWiseArtistList.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCategoryWiseArtistList.fulfilled, (state, action) => {
        state.categoryWiseArtistsList = action.payload;
        state.loading = false;
      })
      .addCase(fetchCategoryWiseArtistList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // 9> fetching subCategoryWise Artist List
    builder
      .addCase(fetchSubCategoryWiseArtistList.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSubCategoryWiseArtistList.fulfilled, (state, action) => {
        state.subCategoryWiseArtistsList = action.payload;
        state.loading = false;
      })
      .addCase(fetchSubCategoryWiseArtistList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // 10> fetching search artist list
    builder
      .addCase(fetchSearchArtistsList.pending, (state) => {
        state.isSearchArtistListLoading = true;
      })
      .addCase(fetchSearchArtistsList.fulfilled, (state, action) => {
        state.searchArtistList = action.payload;
        state.isSearchArtistListLoading = false;
      })
      .addCase(fetchSearchArtistsList.rejected, (state, action) => {
        state.isSearchArtistListLoading = false;
        state.error = action.payload;
      });
  },
});

export const { updateArtistSearchValues, setArtistSearchHome } = artistpediaSlice.actions;
export default artistpediaSlice.reducer;
