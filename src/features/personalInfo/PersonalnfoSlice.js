import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userInfo: {},
  education: [],
  experience: [],
  skills: [],
  summary: '',
  certifications: [],
  languages: [],
  educationToUpdate: null,
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

    //* Experience
    saveExperience: (state, action) => {
      console.log('action save Experience', action.payload);
      state.experience.push(action.payload);
    },

    updateExperience: (state, action) => {
      console.log('action update Experience', action.payload);
      state.experience[action.payload.index] = action.payload.experience;
    },

    deleteExperience: (state, action) => {
      console.log('action delete Experience', action.payload);
      state.experience.splice(action.payload, 1);
    },


    //* Education
    saveEducation: (state, action) => {
      console.log('action Save Education', action.payload);
      state.education.push(action.payload);
    },

    isUpdateEducation: (state, action) => {
      state.isUpdateEducation = action.payload;
    },

    updateEducation: (state, action) => {
      console.log('action update Education', action.payload);
      state.education[action.payload.index] = action.payload.education;
    },
    deleteEducation: (state, action) => {
      console.log('action delete Education', action.payload);
      state.education.splice(action.payload, 1);
    },

    //* Skills
    saveSkills: (state, action) => {
      console.log('action Save Skills', action.payload);
      state.skills.push(action.payload);
    },
    deleteSkill: (state, action) => {
      console.log('action delete Skill', action.payload);
      state.skills.splice(action.payload, 1);
    },

    //* Summary
    saveSummary: (state, action) => {
      console.log('action Save Summary', action.payload);
      state.summary = action.payload;
    },

    //* Certifications
    saveCertifications: (state, action) => {
      console.log('action Save Certifications', action.payload);
      state.certifications.push(action.payload);
    },
    updateCertifications: (state, action) => {
      console.log('action update Certifications', action.payload);
      state.certifications[action.payload.index] = action.payload.certifications;
    },
    deleteCertifications: (state, action) => {
      console.log('action delete Certifications', action.payload);
      state.certifications.splice(action.payload, 1);
    },

    //* Languages
    saveLanguages: (state, action) => {
      console.log('action Save Languages', action.payload);
      state.languages.push(action.payload);
    },

    updateLanguages: (state, action) => {
      console.log('action update Languages', action.payload);
      state.languages[action.payload.index] = action.payload.languages;
    },

    //* Hobbies
    saveHobbies: (state, action) => {
      console.log('action Save Hobbies', action.payload);
      state.hobbies.push(action.payload);
    },
    deleteHobby: (state, action) => {
      console.log('action delete Hobby', action.payload);
      state.hobbies.splice(action.payload, 1);
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
  updateExperience,
  isUpdateEducation,
  updateEducation,
  deleteExperience,
  deleteSkill,
  updateLanguages,
  deleteEducation,
  updateCertifications,
  deleteCertifications,
  deleteHobby,

} = personalInfoSlice.actions;

export default personalInfoSlice.reducer;
