import { Button } from '@chakra-ui/button';
import {
  FormControl,
  FormHelperText,
  FormLabel,
} from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Box, Flex, Text } from '@chakra-ui/layout';
import { Tag, TagCloseButton, TagLabel } from '@chakra-ui/tag';
import { useToast } from '@chakra-ui/toast';
import React, { useEffect, useState } from 'react';
import { AiOutlineClear } from 'react-icons/ai';
import { BsQuestionCircle } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { saveHobbies } from '../../../features/personalInfo/PersonalnfoSlice';

export default function Hobbies({ title, className }) {
  const hobbies = useSelector(state => state.personalInfo.hobbies);
  const toast = useToast();

  const [hobby, setHobby] = useState('');

  const dispatch = useDispatch();

  const addHobby = event => {
    if (event.key === 'Enter') {
      dispatch(saveHobbies(hobby));
      toast({
        title: `${hobby} added !`,
        description: 'You can add more hobbies later.',
        status: 'success',
        duration: 1000,
        position: 'top-right',
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    if (hobbies.length > 0) {
      setHobby('');
    }
  }, [hobbies]);

  return (
    <Box
      className={`${className} p-3 rounded-md  shadow-md `}
      borderBottomWidth="1px"
      as="section"
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
          <FormHelperText>🪂 Tap enter to add the hobby </FormHelperText>
        </FormControl>
      </Flex>
      <Flex align="center" justify="space-between" mb="5">
        <TagContainer>
          {hobbies.length > 0 &&
            hobbies.map((hobby, index) => (
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
                <TagCloseButton onClick={e => console.log(index)} />
              </Tag>
            ))}
        </TagContainer>
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
