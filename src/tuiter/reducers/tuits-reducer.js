import { createSlice } from "@reduxjs/toolkit";
import {
  createTuitThunk,
  deleteTuitThunk,
  findTuitsThunk,
  updateTuitThunk
} from "../services/tuits-thunks";
const initialState = {
  tuits: [],
  loading: false,
};

const currentUser = {
  userName: "NASA",
  handle: "nasa",
  image: "https://imageio.forbes.com/specials-images/imageserve/6425eb0dbe1e3271c38ad239/0x0.jpg?format=jpg&width=1200",
};

const templateTuit = {
  ...currentUser,
  topic: "Space",
  time: Date(),
  liked: false,
  replies: 0,
  retuits: 0,
  likes: 0,
  dislikes: 0,
  disliked: false,
};

const tuitsSlice = createSlice({
  name: "tuits",
  initialState,
  reducers: {
    createTuit(state, action) {
      state.tuits.unshift({
        ...action.payload,
        ...templateTuit,
        _id: new Date().getTime(),
      });
    },
    deleteTuit(state, action) {
      const index = state.tuits.findIndex(
        (tuit) => tuit._id === action.payload
      );
      state.tuits.splice(index, 1);
    },
    updateTuit(state, action) {
      const index = state.tuits.findIndex(
        (tuit) => tuit._id === action.payload._id
      );
      state.tuits.splice(index, 1, action.payload);
    },
  },

  extraReducers: {
    [findTuitsThunk.pending]: (state) => {
      state.loading = true;
      state.tuits = [];
    },
    [findTuitsThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.tuits = payload;
      console.log(payload)
    },
    [findTuitsThunk.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [deleteTuitThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.tuits = state.tuits.filter((t) => t._id !== payload);
    },
    [createTuitThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      let tuit = {
        ...payload,
        ...templateTuit,
        _id: new Date().getTime(),
      };
      state.tuits.unshift(tuit);
    },
    [updateTuitThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      const tuitNdx = state.tuits.findIndex((t) => t._id === payload._id);
      state.tuits[tuitNdx] = { ...state.tuits[tuitNdx], ...payload };
    },
  },
});

export const { createTuit, deleteTuit, updateTuit } = tuitsSlice.actions;
export default tuitsSlice.reducer;
