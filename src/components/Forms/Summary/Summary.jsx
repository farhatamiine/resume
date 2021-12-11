import { Button } from '@chakra-ui/button';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Box, Flex, Text } from '@chakra-ui/layout';
import React from 'react';
import { AiFillSave, AiOutlineClear } from 'react-icons/ai';
import { BsQuestionCircle } from 'react-icons/bs';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useDispatch } from 'react-redux';
import { saveSummary } from '../../../features/personalInfo/PersonalnfoSlice';

export default function Summary({ title, className }) {
  const dispatch = useDispatch();

  const [summary, setSummary] = React.useState('');

  const saveSummaryHandler = () => {
    dispatch(saveSummary({ summary }));

    setSummary('');
  };

  const handleChange = html => {
    setSummary(html);
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
        <FormControl mr="10px" isRequired>
          <FormLabel fontSize="sm">Tell us about yourself</FormLabel>
          <ReactQuill
            id="summary"
            onChange={handleChange}
            value={summary}
            placeholder="Write something or insert a heart ♥"
          />
        </FormControl>
      </Flex>
      <Flex align="center" justify="space-between" mb="5">
        <Button
          colorScheme="blue"
          variant="outline"
          onClick={saveSummaryHandler}
          leftIcon={<AiFillSave />}
        >
          Save summary
        </Button>
      </Flex>
    </Box>
  );
}
