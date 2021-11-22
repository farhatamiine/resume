import { GridItem, SimpleGrid, Text, VStack } from '@chakra-ui/layout';
import React from 'react';
import { DiYeoman } from 'react-icons/di';
import { GiBookmarklet, GiMedal, GiTiedScroll } from 'react-icons/gi';
import { IoBriefcaseSharp, IoLanguageSharp } from 'react-icons/io5';
import { MdSportsEsports } from 'react-icons/md';
import CardButton from '../CardButton/CardButton';

const cardSection = [
  {
    icon: <DiYeoman size="30" color="#0d47a1" />,
    name: 'Personal Info',
  },
  {
    icon: <GiTiedScroll size="30" color="#0d47a1" />,
    name: 'Summary',
  },
  {
    icon: <IoBriefcaseSharp size="30" color="#0d47a1" />,
    name: 'Work Experience',
  },
  {
    icon: <GiBookmarklet size="30" color="#0d47a1" />,
    name: 'Education',
  },
  {
    icon: <IoLanguageSharp size="30" color="#0d47a1" />,
    name: 'Language',
  },
  {
    icon: <GiMedal size="30" color="#0d47a1" />,
    name: 'Skills',
  },
  {
    icon: <GiTiedScroll size="30" color="#0d47a1" />,
    name: 'Certificate',
  },
  {
    icon: <MdSportsEsports size="30" color="#0d47a1" />,
    name: 'Hobbies',
  },
];
export default function NavigationMenu() {
  return (
    <VStack w="50%" h="full" p={10} spacing={6} align="flex-start">
      <VStack alignItems="flex-start" spacing={3}>
        <Text>If the price is too hard on your eyes, </Text>
      </VStack>

      <SimpleGrid columns={2} columnGap={3} rowGap={6} spacing={4} w="full">
        {cardSection.map(e => {
          return (
            <GridItem colSpan={1}>
              <CardButton cardName={e.name} icon={e.icon} />
            </GridItem>
          );
        })}
      </SimpleGrid>
    </VStack>
  );
}
