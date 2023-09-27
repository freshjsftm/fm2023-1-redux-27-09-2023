import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 100,
    prop1:10,
    prop2:'qwe'
  },
  reducers: {
    addCount(state, action){
      console.log('state', state);
      console.log('action', action);
      state.count+=action.payload
    },
    subCount(state, action){
      state.count--
    },
  },
});

export const {addCount, subCount} = counterSlice.actions;

export default counterSlice.reducer;
