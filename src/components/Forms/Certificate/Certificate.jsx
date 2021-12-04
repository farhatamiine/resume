import { Button } from '@chakra-ui/button';
import { Checkbox } from '@chakra-ui/checkbox';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/input';
import { Box, Flex, Text } from '@chakra-ui/layout';
import { useToast } from '@chakra-ui/toast';
import React, { useState } from 'react';
import { AiFillSave, AiOutlineCalendar, AiOutlineClear } from 'react-icons/ai';
import { BsQuestionCircle } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { infos } from '../../../constants';
import { saveCertifications } from '../../../features/personalInfo/PersonalnfoSlice';
import CardInfo from '../../CardInfos/CardInfo';

export default function Certificate({ title }) {
  const [isExpired, setIsExpired] = useState(false);

  const [certificate, setCertification] = React.useState({});

  const handleChange = e => {
    setCertification({
      ...certificate,
      [e.target.id]: e.target.value,
    });
  };

  const dispatch = useDispatch();
  const toast = useToast();

  const saveData = () => {
    dispatch(saveCertifications(certificate));
    toast({
      title: `Certificate added !`,
      description: 'You can add more certificate later.',
      status: 'success',
      duration: 1000,
      position: 'top-right',
      isClosable: true,
    });
  };

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
        <FormControl id="certificate_name" mr="10px" isRequired>
          <FormLabel fontSize="sm">Certificate Name</FormLabel>
          <Input type="text" onChange={handleChange} />
        </FormControl>
      </Flex>
      <Flex align="center" justify="space-between" mb="5">
        <FormControl id="issuing_agency" mr="10px" isRequired>
          <FormLabel fontSize="sm">Issuing agency</FormLabel>
          <Input type="text" onChange={handleChange} />
        </FormControl>
      </Flex>

      <Flex align="center" justify="space-between" my="2">
        <FormControl id="isExpired" isRequired>
          <Checkbox
            isChecked={isExpired}
            onChange={e => setIsExpired(!isExpired)}
          >
            This Certificate does not expire
          </Checkbox>
        </FormControl>
      </Flex>

      <Flex align="center" justify="space-between" mb="2">
        <FormControl id="dateOfIssue" mr="10px" isRequired>
          <FormLabel fontSize="sm">Date of issue</FormLabel>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<AiOutlineCalendar color="gray.300" />}
            />
            <Input
              type="date"
              placeholder="Date of issue"
              onChange={handleChange}
            />
          </InputGroup>
        </FormControl>
        {!isExpired && (
          <FormControl id="expirationDate" mr="10px" isRequired>
            <FormLabel fontSize="sm">Expiration date</FormLabel>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<AiOutlineCalendar color="gray.300" />}
              />
              <Input
                type="date"
                placeholder="Expiration date"
                onChange={handleChange}
              />
            </InputGroup>
          </FormControl>
        )}
      </Flex>
      <Flex align="center" justify="space-between" my="5">
        <FormControl id="certificate_id" mr="10px" isRequired>
          <FormLabel fontSize="sm">Certificate ID</FormLabel>
          <Input type="text" onChange={handleChange} />
        </FormControl>
      </Flex>
      <Flex align="center" justify="space-between" mb="5">
        <Button
          colorScheme="blue"
          onClick={saveData}
          variant="outline"
          leftIcon={<AiFillSave />}
        >
          Save Certificate
        </Button>
      </Flex>
      <CardInfo cardTitle={title} infos={infos} {...infos} />
    </Box>
  );
}
