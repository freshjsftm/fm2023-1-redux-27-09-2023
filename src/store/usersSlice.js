import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    error: null,
    isFetching: false,
  },
  reducers: {},
  extraReducers: {},
});

export default usersSlice.reducer;
