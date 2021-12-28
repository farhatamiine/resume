import { Button } from '@chakra-ui/button';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Box, Flex, Text } from '@chakra-ui/layout';
import {
  Checkbox,
  InputGroup,
  InputLeftElement,
  useToast,
} from '@chakra-ui/react';
import { Formik } from 'formik';
import React, { useState } from 'react';
import { AiFillSave, AiOutlineCalendar, AiOutlineClear } from 'react-icons/ai';
import { BsQuestionCircle } from 'react-icons/bs';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import 'yup-phone';
import { ErrorContainer } from '../../../assets/styles/styles';
import { saveExperience } from '../../../features/personalInfo/PersonalnfoSlice';

const validationSchemaGlobal = Yup.object({
  jobTitle: Yup.string().required('Required'),
  employer: Yup.string().required('Required'),
  country: Yup.string().required('Required'),
  city: Yup.string().required('Required'),
  start: Yup.date().required('Required'),
  end: Yup.date().required('Required'),
  description: Yup.string().required('Required'),
  isWorking: false,
});

export default function Experience({ title, className }) {
  const [isWorking, setIsWorking] = useState(false);

  const dispatch = useDispatch();
  const toast = useToast();

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
      <Formik
        initialValues={{
          jobTitle: '',
          employer: '',
          startDate: '',
          endDate: '',
          description: '',
          isWorking: false,
        }}
        validationSchema={validationSchemaGlobal}
        onSubmit={(values, { resetForm }) => {
          dispatch(saveExperience(values));
          toast({
            title: `Cool !`,
            description: `You're Experience  saved!!.`,
            status: 'success',
            duration: 1000,
            position: 'top-right',
            isClosable: true,
          });
          resetForm();
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          setFieldValue,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Flex align="center" justify="space-between" mb="5">
              <FormControl id="jobTitle" mr="10px" isRequired>
                <FormLabel fontSize="sm">Job Title</FormLabel>
                <Input
                  type="text"
                  id="jobTitle"
                  name="jobTitle"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  isInvalid={touched.jobTitle && errors.jobTitle}
                />
                {touched.jobTitle && errors.jobTitle ? (
                  <ErrorContainer>{errors.jobTitle}</ErrorContainer>
                ) : null}
              </FormControl>
              <FormControl id="employer" isRequired>
                <FormLabel fontSize="sm">Employer</FormLabel>
                <Input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.employer}
                  name="employer"
                  id="employer"
                  isInvalid={touched.employer && errors.employer}
                />
                {touched.employer && errors.employer ? (
                  <ErrorContainer>{errors.employer}</ErrorContainer>
                ) : null}
              </FormControl>
            </Flex>
            <Flex align="center" justify="space-between" mb="2">
              <FormControl id="country" mr="10px" isRequired>
                <FormLabel fontSize="sm">Country</FormLabel>
                <Input
                  type="text"
                  onChange={handleChange}
                  id="country"
                  onBlur={handleBlur}
                  value={values.country}
                />
                {touched.country && errors.country ? (
                  <ErrorContainer>{errors.country}</ErrorContainer>
                ) : null}
              </FormControl>
              <FormControl id="city" isRequired>
                <FormLabel fontSize="sm">City</FormLabel>
                <Input
                  type="text"
                  onChange={handleChange}
                  id="city"
                  onBlur={handleBlur}
                  value={values.city}
                />
                {touched.city && errors.city ? (
                  <ErrorContainer>{errors.city}</ErrorContainer>
                ) : null}
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
                    isRequired
                    onChange={handleChange}
                    id="start"
                    onBlur={handleBlur}
                    value={values.start}
                    placeholder="Start Date"
                  />
                </InputGroup>
                {touched.start && errors.start ? (
                  <ErrorContainer>{errors.start}</ErrorContainer>
                ) : null}
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
                      id="end"
                      onBlur={handleBlur}
                      value={values.end}
                      onChange={handleChange}
                      placeholder="End Date"
                    />
                  </InputGroup>
                  {touched.end && errors.end ? (
                    <ErrorContainer>{errors.end}</ErrorContainer>
                  ) : null}
                </FormControl>
              )}
            </Flex>

            <Flex align="center" justify="space-between" mb="5">
              <FormControl id="description" isRequired>
                <FormLabel fontSize="sm">Description</FormLabel>
                <ReactQuill
                  id="description"
                  name="description"
                  placeholder="Write something or insert a heart ♥"
                  value={values.description}
                  onChange={v => setFieldValue('description', v)}
                />
                {touched.firstName && errors.firstName ? (
                  <ErrorContainer>{errors.firstName}</ErrorContainer>
                ) : null}
              </FormControl>
            </Flex>
            <Flex align="center" justify="space-between" mb="5">
              <Button
                colorScheme="blue"
                type="submit"
                variant="outline"
                leftIcon={<AiFillSave />}
              >
                Save Experience
              </Button>
            </Flex>
          </form>
        )}
      </Formik>
      {/* <CardInfoEducation cardTitle={title} infos={infos} {...infos} /> */}
    </Box>
  );
}
