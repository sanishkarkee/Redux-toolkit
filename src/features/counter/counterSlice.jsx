import { createSlice } from '@reduxjs/toolkit';

// SLICE
export const counterSlice = createSlice({
  name: 'counter',

  // VALUE
  initialState: {
    value: 0,
  },

  // REDUCER (functions)
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
