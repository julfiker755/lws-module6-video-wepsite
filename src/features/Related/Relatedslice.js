import { getRelated } from "./Relatedapi";
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
    relatedVideos: [],
    isLoading: false,
    isError: false,
    error: "",
};

// async thunk
export const fetchRelated = createAsyncThunk(
    "related/fetchRelated",
    async ({ tags, id }) => {
        const relatedVideos = await getRelated({ tags, id });
        return relatedVideos;
    }
);

const relatedVideosSlice = createSlice({
    name: "relatedVideos",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchRelated.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(fetchRelated.fulfilled, (state, action) => {
                state.isLoading = false;
                state.relatedVideos = action.payload;
            })
            .addCase(fetchRelated.rejected, (state, action) => {
                state.isLoading = false;
                state.relatedVideos = [];
                state.isError = true;
                state.error = action.error?.message;
            });
    },
});

export default relatedVideosSlice.reducer;
