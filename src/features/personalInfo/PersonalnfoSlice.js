import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userInfo: {},
  education: [],
  experience: [],
  skills: [],
  summary: '',
  certifications: [],
  languages: [],
  hobbies: [],
};

export const personalInfoSlice = createSlice({
  name: 'personalInfo',
  initialState,
  reducers: {
    savePersonalInfo: (state, action) => {
      console.log('action save Personal Info', action.payload);
      state.userInfo = action.payload;
    },

    saveExperience: (state, action) => {
      console.log('action save Experience', action.payload);
      state.experience.push(action.payload);
    },

    saveEducation: (state, action) => {
      console.log('action Save Education', action.payload);
      state.education.push(action.payload);
    },

    saveSkills: (state, action) => {
      console.log('action Save Skills', action.payload);
      state.skills.push(action.payload);
    },

    saveSummary: (state, action) => {
      console.log('action Save Summary', action.payload);
      state.summary = action.payload;
    },

    saveCertifications: (state, action) => {
      console.log('action Save Certifications', action.payload);
      state.certifications.push(action.payload);
    },

    saveLanguages: (state, action) => {
      console.log('action Save Languages', action.payload);
      state.languages.push(action.payload);
    },

    saveHobbies: (state, action) => {
      console.log('action Save Hobbies', action.payload);
      state.hobbies.push(action.payload);
    },
  },
});

export const {
  savePersonalInfo,
  saveExperience,
  saveEducation,
  saveSkills,
  saveSummary,
  saveCertifications,
  saveLanguages,
  saveHobbies,
} = personalInfoSlice.actions;

export default personalInfoSlice.reducer;
