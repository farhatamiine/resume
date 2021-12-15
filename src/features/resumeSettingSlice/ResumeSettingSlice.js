import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  color: '#003147',
};

export const ResumeSettingSlice = createSlice({
  name: 'resumeSetting',
  initialState,
  reducers: {
    changeColor: (state, action) => {
      console.log('action change Color', action.payload);
      state.color = action.payload;
    },
  },
});

export const { changeColor } = ResumeSettingSlice.actions;

export default ResumeSettingSlice.reducer;
