import {
  Box,
  HStack,
  IconButton,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import React from 'react';
import { HiLocationMarker, HiPencilAlt, HiTrash } from 'react-icons/hi';

export default function CardDescription(props) {
  const { title, description, location } = props;
  return (
    <Box position="relative">
      <Box fontWeight="bold" maxW="xl" className="apply-font-header">
        {title}
      </Box>
      <HStack
        fontSize="sm"
        fontWeight="medium"
        color={mode('gray.500', 'white')}
        mt="1"
      >
        <Box as={HiLocationMarker} fontSize="md" color="gray.400" />
        <span>{location}</span>
      </HStack>
      <Box
        mt="3"
        maxW="xl"
        color={mode('gray.600', 'gray.200')}
        className="apply-font-text"
      >
        {description}
      </Box>
      <HStack
        position={{
          sm: 'absolute',
        }}
        top={{
          sm: '0',
        }}
        insetEnd={{
          sm: '0',
        }}
        mt={{
          base: '4',
          sm: '0',
        }}
      >
        <IconButton
          aria-label="Edit"
          icon={<HiPencilAlt />}
          rounded="full"
          size="sm"
        />
        <IconButton
          aria-label="Delete"
          icon={<HiTrash />}
          rounded="full"
          size="sm"
        />
      </HStack>
    </Box>
  );
}
