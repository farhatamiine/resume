import { Button } from '@chakra-ui/button';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Box, Flex, Text } from '@chakra-ui/layout';
import { Textarea } from '@chakra-ui/textarea';
import React from 'react';
import { AiFillSave, AiOutlineClear } from 'react-icons/ai';
import { BsQuestionCircle } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { saveSummary } from '../../../features/personalInfo/PersonalnfoSlice';

export default function Summary({ title, className }) {
  const [summary, setSummary] = React.useState('');

  const handleChange = e => {
    setSummary({
      ...summary,
      [e.target.id]: e.target.value,
    });
  };

  const dispatch = useDispatch();

  const saveData = () => {
    dispatch(saveSummary(summary));
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
        <FormControl id="summary" mr="10px" isRequired>
          <FormLabel fontSize="sm">Tell us about yourself</FormLabel>
          <Textarea rows="10" onChange={handleChange} />
        </FormControl>
      </Flex>
      <Flex align="center" justify="space-between" mb="5">
        <Button
          colorScheme="blue"
          variant="outline"
          onClick={saveData}
          leftIcon={<AiFillSave />}
        >
          Save summary
        </Button>
      </Flex>
    </Box>
  );
}
