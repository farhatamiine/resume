import { Flex } from '@chakra-ui/layout';
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
          element={<Experience title="Work Experience" />}
        />
        <Route
          path="/personal-info"
          element={<PersonalInfo title="Personal Info" />}
        />
        <Route path="/language" element={<Languages title="Language" />} />
        <Route path="/skills" element={<Skills title="Skills" />} />
        <Route
          path="/certificate"
          element={<Certificate title="Certificate" />}
        />
        <Route path="/hobbies" element={<Hobbies title="Hobbies" />} />
      </Routes>
      <NavigationMenu
        title="Parameters"
        description="Change color,fonts and template"
      />
    </Flex>
  );
}
