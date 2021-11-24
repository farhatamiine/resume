import { Flex } from '@chakra-ui/layout';
import React from 'react';
import Education from '../../components/Forms/Education/Education';
import NavigationMenu from '../../components/NavigationMenu/NavigationMenu';

export default function Resume() {
  return (
    <Flex mx="auto" width="100%">
      <NavigationMenu
        title="Resume Sections"
        description="Fill the section one by one"
      />
      <Education />
      <NavigationMenu
        title="Parameters"
        description="Change color,fonts and template"
      />
    </Flex>
  );
}
