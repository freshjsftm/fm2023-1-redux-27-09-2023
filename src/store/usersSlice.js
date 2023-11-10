import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const USERS_SLICE_NAME = 'users';

export const getUsers = createAsyncThunk(
  `${USERS_SLICE_NAME}/getUsers`,
  async (params, thunkAPI) => {
    const { dispatch } = thunkAPI;
    const data = await fetch('https://randomuser.me/api/?results=5').then((response) => response.json());
    dispatch(loadUsers(data.results));
  }
);

const usersSlice = createSlice({
  name: USERS_SLICE_NAME,
  initialState: {
    users: [],
    error: null,
    isFetching: false,
  },
  reducers: {
    loadUsers(state, action) {
      state.users = action.payload;
    },
  },
  extraReducers: {},
});

const { loadUsers } = usersSlice.actions;

export default usersSlice.reducer;
