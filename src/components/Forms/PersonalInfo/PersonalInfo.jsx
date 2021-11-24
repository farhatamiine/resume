import { Button } from '@chakra-ui/button';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Box, Flex, Text } from '@chakra-ui/layout';
import React from 'react';
import { AiFillSave, AiOutlineClear } from 'react-icons/ai';
import { BsQuestionCircle } from 'react-icons/bs';

export default function PersonalInfo({ title }) {
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
        <FormControl id="first_name" mr="10px" isRequired>
          <FormLabel fontSize="sm">First Name</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl id="last_name" isRequired>
          <FormLabel fontSize="sm">Last Name</FormLabel>
          <Input type="text" />
        </FormControl>
      </Flex>
      <Flex align="center" justify="space-between" mb="5">
        <FormControl id="email" mr="10px" isRequired>
          <FormLabel fontSize="sm">Email</FormLabel>
          <Input type="email" />
        </FormControl>
        <FormControl id="phone" isRequired>
          <FormLabel fontSize="sm">Phone Number</FormLabel>
          <Input type="tel" />
        </FormControl>
      </Flex>
      <Flex align="center" justify="space-between" mb="5">
        <FormControl id="profession" isRequired>
          <FormLabel fontSize="sm">Profession</FormLabel>
          <Input type="text" />
        </FormControl>
      </Flex>
      <Flex align="center" justify="space-around" mb="2">
        <FormControl id="city" isRequired mr="10px">
          <FormLabel fontSize="sm">City</FormLabel>
          <Input type="text" />
        </FormControl>
        <Flex align="center" justify="space-between">
          <FormControl id="state" mr="10px" isRequired>
            <FormLabel fontSize="sm">Province</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl id="zipcode" isRequired>
            <FormLabel fontSize="sm">Zip Code</FormLabel>
            <Input type="text" />
          </FormControl>
        </Flex>
      </Flex>
      <Flex align="center" justify="space-between" my="5">
        <Button colorScheme="blue" variant="outline" leftIcon={<AiFillSave />}>
          Save my Information
        </Button>
      </Flex>
    </Box>
  );
}