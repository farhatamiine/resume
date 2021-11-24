import { Button } from '@chakra-ui/button';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Box, Flex, Text } from '@chakra-ui/layout';
import { Tag, TagCloseButton, TagLabel } from '@chakra-ui/tag';
import React, { useEffect, useState } from 'react';
import { AiFillSave, AiOutlineClear } from 'react-icons/ai';
import { BsQuestionCircle } from 'react-icons/bs';
import styled from 'styled-components';

export default function Hobbies({ title }) {
  const [hobbies, setHobbie] = useState([]);

  const [hobby, setHobby] = useState('');

  const addHobby = event => {
    if (event.key === 'Enter') {
      hobbies.push(hobby);
      setHobby('');
    }
  };

  useEffect(() => {}, [hobbies]);

  return (
    <Box
      width="50%"
      borderBottomWidth="1px"
      as="section"
      className="shadow-md "
      bg="white"
      px={{
        md: '5',
      }}
    >
      <Flex align="center" justify="space-between" py="4" mb="1">
        <Text as="h3" fontWeight="bold" fontSize="lg">
          {title}
        </Text>
        <Box>
          <Button
            variant="outline"
            minW="20"
            mr="3"
            leftIcon={<BsQuestionCircle color="#0d47a1" />}
          >
            Info
          </Button>
          <Button
            variant="outline"
            minW="20"
            leftIcon={<AiOutlineClear color="#0d47a1" />}
          >
            Clear
          </Button>
        </Box>
      </Flex>
      <Flex align="center" justify="space-between" mb="5">
        <FormControl id="languages" mr="10px" isRequired>
          <FormLabel fontSize="sm">Hobbies</FormLabel>
          <Input
            type="text"
            value={hobby}
            onKeyDown={addHobby}
            onInput={e => setHobby(e.target.value)}
          />
        </FormControl>
      </Flex>
      <Flex align="center" justify="space-between" mb="5">
        <TagContainer>
          {hobbies.map((hobby, index) => (
            <Tag
              size="lg"
              key={index}
              mr="5px"
              mb="5px"
              borderRadius="full"
              variant="solid"
              colorScheme="blue"
            >
              <TagLabel>{hobby}</TagLabel>
              <TagCloseButton />
            </Tag>
          ))}
        </TagContainer>
      </Flex>

      <Flex align="center" justify="space-between" mb="5">
        <Button colorScheme="blue" variant="outline" leftIcon={<AiFillSave />}>
          Save Hobbies
        </Button>
      </Flex>
    </Box>
  );
}

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-items: center;
  align-items: center;
`;