import { Button } from '@chakra-ui/button';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Box, Flex, Text } from '@chakra-ui/layout';
import { Select } from '@chakra-ui/select';
import React from 'react';
import { AiFillSave, AiOutlineClear } from 'react-icons/ai';
import { BsQuestionCircle } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { infos } from '../../../constants';
import { saveLanguages } from '../../../features/personalInfo/PersonalnfoSlice';
import CardInfo from '../../CardInfos/CardInfo';

export default function Languages({ title, className }) {
  const [language, setLanguage] = React.useState({});

  const handleChange = e => {
    setLanguage({
      ...language,
      [e.target.id]: e.target.value,
    });
  };

  const dispatch = useDispatch();

  const saveData = () => {
    dispatch(saveLanguages(language));
  };

  return (
    <Box
      borderBottomWidth="1px"
      as="section"
      className={`${className} p-3 rounded-md  shadow-md `}
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
          <FormLabel fontSize="sm">language</FormLabel>
          <Input type="text" onChange={handleChange} />
        </FormControl>
      </Flex>

      <Flex align="center" justify="space-between" my="5">
        <FormControl id="level" mr="10px" isRequired>
          <FormLabel fontSize="sm">language level</FormLabel>
          <Select onChange={handleChange} placeholder="Select option">
            <option value="Notions">Notions</option>
            <option value="1">Intermediate(B1) </option>
            <option value="2">Upper-intermediate(B2)</option>
            <option value="3">Advanced (C1)</option>
            <option value="4">Proficient(C2).</option>
            <option value="5">Native </option>
          </Select>
        </FormControl>
      </Flex>
      <Flex align="center" justify="space-between" mb="5">
        <Button
          colorScheme="blue"
          onClick={saveData}
          variant="outline"
          leftIcon={<AiFillSave />}
        >
          Save Languages
        </Button>
      </Flex>
      <CardInfo cardTitle={title} infos={infos} {...infos} />
    </Box>
  );
}
