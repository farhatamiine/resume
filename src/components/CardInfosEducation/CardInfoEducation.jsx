import {
  Box,
  Divider,
  Flex,
  Stack,
  StackDivider,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import React from 'react';
import CardDescriptionEducation from './CardDescriptionEducation';
import { useSelector } from 'react-redux';

export default function CardInfoEducation({ type, infos, setEducation }) {

  const educations = useSelector(state => state.personalInfo.education);
  return (
    <Box as='section' my='3'>
      <Box
        maxW={{
          base: 'xl',
          md: '7xl',
        }}
        mx='auto'
      >
        <Box
          rounded={{
            lg: 'lg',
          }}
          bg={mode('white', 'gray.700')}
          maxW='3xl'
          mx='auto'
          shadow='base'
          overflow='hidden'
        >
          <Flex align='center' justify='space-between' px='6' py='4'>
            <Text as='h3' fontWeight='bold' fontSize='lg'>
              {type}
            </Text>
            <Text as='h4' fontWeight='bold' color={educations.length >= 3 ? 'red.500' : 'green.500'} fontSize='lg'>
              {educations.length}/3
            </Text>
          </Flex>
          <Divider />
          <Stack spacing='6' py='5' px='8' divider={<StackDivider />}>
            {educations.map((education, index) => (
              <CardDescriptionEducation
                key={index}
                index={index}
                setEducation={setEducation}
                education={education}
              />
            ))}
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
