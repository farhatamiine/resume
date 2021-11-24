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
import CardDescription from './CardDescription';

export default function CardInfo({ cardTitle, infos }) {
  return (
    <Box as="section" my="3">
      <Box
        maxW={{
          base: 'xl',
          md: '7xl',
        }}
        mx="auto"
      >
        <Box
          rounded={{
            lg: 'lg',
          }}
          bg={mode('white', 'gray.700')}
          maxW="3xl"
          mx="auto"
          shadow="base"
          overflow="hidden"
        >
          <Flex align="center" justify="space-between" px="6" py="4">
            <Text as="h3" fontWeight="bold" fontSize="lg">
              {cardTitle}
            </Text>
            <Text as="h4" fontWeight="bold" color="green.500" fontSize="lg">
              2/3
            </Text>
          </Flex>
          <Divider />
          <Stack spacing="6" py="5" px="8" divider={<StackDivider />}>
            {infos.map((info, index) => (
              <CardDescription
                key={index}
                title={info.title}
                location={info.location}
                description={info.description}
              />
            ))}
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
