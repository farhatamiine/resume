import { Flex } from '@chakra-ui/layout';
import React from 'react';
import { Route, Routes } from 'react-router';
import Education from '../../components/Forms/Education/Education';
import Summary from '../../components/Forms/Summary/Summary';
import NavigationMenu from '../../components/NavigationMenu/NavigationMenu';

export default function Resume() {
  return (
    <Flex mx="auto" width="100%">
      <NavigationMenu
        title="Resume Sections"
        description="Fill the section one by one"
      />
      <Routes>
        <Route path="/education" element={<Education title="Education" />} />
        <Route path="/summary" element={<Summary title="Summary" />} />
        <Route
          path="/work-experience"
          element={<Summary title="Work Experience" />}
        />
        <Route
          path="/personal-info"
          element={<Summary title="Personal Info" />}
        />
        <Route path="/language" element={<Summary title="Language" />} />
        <Route path="/skills" element={<Summary title="Skills" />} />
        <Route path="/certificate" element={<Summary title="Certificate" />} />
        <Route path="/hobbies" element={<Summary title="Hobbies" />} />
      </Routes>
      <NavigationMenu
        title="Parameters"
        description="Change color,fonts and template"
      />
    </Flex>
  );
}
