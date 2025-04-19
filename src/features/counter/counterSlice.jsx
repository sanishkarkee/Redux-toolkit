import { createSlice } from '@reduxjs/toolkit';

// SLICE
export const counterSlice = createSlice({
  name: 'counter', //  SLICE NAME

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

    resetCount: (state) => {
      state.value = 0;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, resetCount } =
  counterSlice.actions;

export default counterSlice.reducer;
