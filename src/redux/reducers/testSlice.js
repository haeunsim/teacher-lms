import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedTest: null
};

const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    setSelectedTest: (state, action) => {
      state.selectedTest = action.payload;
    }
  }
});

export const { setSelectedTest } = testSlice.actions;
export default testSlice.reducer;