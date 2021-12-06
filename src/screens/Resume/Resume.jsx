import { Box } from '@chakra-ui/layout';
import React from 'react';
import { Route, Routes } from 'react-router';
import Certificate from '../../components/Forms/Certificate/Certificate';
import Education from '../../components/Forms/Education/Education';
import Experience from '../../components/Forms/Experience/Experience';
import Hobbies from '../../components/Forms/Hobbies/Hobbies';
import Languages from '../../components/Forms/Languages/Languages';
import PersonalInfo from '../../components/Forms/PersonalInfo/PersonalInfo';
import Skills from '../../components/Forms/Skills/Skills';
import Summary from '../../components/Forms/Summary/Summary';
import NavigationMenu from '../../components/NavigationMenu/NavigationMenu';
import SettingsMenu from '../../components/SettingsMenu/SettingsMenu';

export default function Resume() {
  return (
    <Box mx="auto" className="grid grid-cols-12 gap-4">
      <NavigationMenu
        className="col-span-12 lg:col-span-3"
        title="Resume Sections"
        description="Fill the section one by one"
      />
      <Routes>
        <Route
          path="/"
          element={
            <PersonalInfo
              className="col-span-12 lg:col-span-6"
              title="Personal Info"
            />
          }
        />
        <Route
          path="/education"
          element={
            <Education
              className="col-span-12 lg:col-span-6"
              title="Education"
            />
          }
        />
        <Route
          path="/summary"
          element={
            <Summary className="col-span-12 lg:col-span-6" title="Summary" />
          }
        />
        <Route
          path="/work-experience"
          element={
            <Experience
              className="col-span-12 lg:col-span-6"
              title="Work Experience"
            />
          }
        />
        <Route
          path="/personal-info"
          element={
            <PersonalInfo
              className="col-span-12 lg:col-span-6"
              title="Personal Info"
            />
          }
        />
        <Route
          path="/language"
          element={
            <Languages className="col-span-12 lg:col-span-6" title="Language" />
          }
        />
        <Route
          path="/skills"
          element={
            <Skills title="Skills" className="col-span-12 lg:col-span-6" />
          }
        />
        <Route
          path="/certificate"
          element={
            <Certificate
              className="col-span-12 lg:col-span-6"
              title="Certificate"
            />
          }
        />
        <Route
          path="/hobbies"
          element={
            <Hobbies className="col-span-12 lg:col-span-6" title="Hobbies" />
          }
        />
      </Routes>
      <SettingsMenu
        className="col-span-12 lg:col-span-3"
        title="Parameters"
        description="Change color,fonts and template"
      />
    </Box>
  );
}
