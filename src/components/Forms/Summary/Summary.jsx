import { Button } from '@chakra-ui/button';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Box, Flex, Text } from '@chakra-ui/layout';
import { Textarea } from '@chakra-ui/textarea';
import React from 'react';
import { AiFillSave, AiOutlineClear } from 'react-icons/ai';
import { BsQuestionCircle } from 'react-icons/bs';
import { infos } from '../../../constants';
import CardInfo from '../../CardInfos/CardInfo';

export default function Summary({ title }) {
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
      <Flex align="center" justify="space-between" py="4" mb="5">
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
        <FormControl id="schoolName" mr="10px" isRequired>
          <FormLabel fontSize="sm">School Name</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl id="fieldStudy" isRequired>
          <FormLabel fontSize="sm">Field of Study</FormLabel>
          <Input type="text" />
        </FormControl>
      </Flex>
      <Flex align="center" justify="space-between" mb="2">
        <FormControl id="country" mr="10px" isRequired>
          <FormLabel fontSize="sm">Country</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl id="city" isRequired>
          <FormLabel fontSize="sm">City</FormLabel>
          <Input type="text" />
        </FormControl>
      </Flex>

      <Flex align="center" justify="space-between" mb="5">
        <FormControl id="description" isRequired>
          <FormLabel fontSize="sm">Description</FormLabel>
          <Textarea placeholder="Description" size="sm" />
        </FormControl>
      </Flex>
      <Flex align="center" justify="space-between" mb="5">
        <Button colorScheme="blue" variant="outline" leftIcon={<AiFillSave />}>
          Save Education
        </Button>
      </Flex>
      <CardInfo cardTitle="Education" infos={infos} {...infos} />
    </Box>
  );
}
