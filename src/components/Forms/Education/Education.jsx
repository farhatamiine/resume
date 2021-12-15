import { Button } from '@chakra-ui/button';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Box, Flex, Text } from '@chakra-ui/layout';
import { Checkbox, InputGroup, InputLeftElement } from '@chakra-ui/react';
import React, { useState } from 'react';
import { AiFillSave, AiOutlineCalendar, AiOutlineClear } from 'react-icons/ai';
import { BsQuestionCircle } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { infos } from '../../../constants';
import { saveEducation } from '../../../features/personalInfo/PersonalnfoSlice';
import CardInfo from '../../CardInfos/CardInfo';

export default function Education({ title, className }) {
  const [education, setEducation] = useState({});
  const [isWorking, setIsWorking] = useState(false);

  const handleChange = e => {
    setEducation({
      ...education,
      [e.target.id]: e.target.value,
    });
  };

  const dispatch = useDispatch();

  const saveData = () => {
    dispatch(saveEducation(education));
  };

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
          <Input type="text" onChange={handleChange} />
        </FormControl>
        <FormControl id="fieldStudy" isRequired>
          <FormLabel fontSize="sm">Field of Study</FormLabel>
          <Input type="text" onChange={handleChange} />
        </FormControl>
      </Flex>
      <Flex align="center" justify="space-between" mb="2">
        <FormControl id="country" mr="10px" isRequired>
          <FormLabel fontSize="sm">Country</FormLabel>
          <Input type="text" onChange={handleChange} />
        </FormControl>
        <FormControl id="city" isRequired>
          <FormLabel fontSize="sm">City</FormLabel>
          <Input type="text" onChange={handleChange} />
        </FormControl>
      </Flex>

      <Flex align="center" justify="space-between" my="3">
        <FormControl id="isExpired" isRequired>
          <Checkbox
            isChecked={isWorking}
            onChange={e => setIsWorking(!isWorking)}
          >
            You still working here
          </Checkbox>
        </FormControl>
      </Flex>
      <Flex align="center" justify="space-between" mb="2">
        <FormControl id="start" mr="10px" isRequired>
          <FormLabel fontSize="sm">Start Date</FormLabel>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<AiOutlineCalendar color="gray.300" />}
            />
            <Input
              type="month"
              onChange={handleChange}
              placeholder="Start Date"
            />
          </InputGroup>
        </FormControl>
        {!isWorking && (
          <FormControl id="end" mr="10px" isRequired>
            <FormLabel fontSize="sm">End Date</FormLabel>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<AiOutlineCalendar color="gray.300" />}
              />
              <Input
                type="month"
                onChange={handleChange}
                placeholder="End Date"
              />
            </InputGroup>
          </FormControl>
        )}
      </Flex>
      <Flex align="center" justify="space-between" my="5">
        <Button
          colorScheme="blue"
          onClick={saveData}
          variant="outline"
          leftIcon={<AiFillSave />}
        >
          Save Education
        </Button>
      </Flex>
      <CardInfo cardTitle="Education" infos={infos} {...infos} />
    </Box>
  );
}
