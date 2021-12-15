import { configureStore } from '@reduxjs/toolkit';
import personalInfoReducer from '../features/personalInfo/PersonalnfoSlice';
import resumeSettingReducer from '../features/resumeSettingSlice/ResumeSettingSlice';
export default configureStore({
  reducer: {
    personalInfo: personalInfoReducer,
    resumeSetting: resumeSettingReducer,
  },
});
