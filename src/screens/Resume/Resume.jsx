import { Flex } from '@chakra-ui/layout';
import React from 'react';
import Education from '../../components/Forms/Education/Education';
import NavigationMenu from '../../components/NavigationMenu/NavigationMenu';

export default function Resume() {
  return (
    <Flex>
      <NavigationMenu />
      <Education />
    </Flex>
  );
}
