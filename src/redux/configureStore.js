import { configureStore } from '@reduxjs/toolkit';
import personalInfoReducer from '../features/personalInfo/PersonalnfoSlice';

export default configureStore({
  reducer: {
    personalInfo: personalInfoReducer,
  },
});
