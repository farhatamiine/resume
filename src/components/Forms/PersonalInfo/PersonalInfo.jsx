import { Button } from '@chakra-ui/button';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Box, Flex, Text } from '@chakra-ui/layout';
import { useToast } from '@chakra-ui/react';
import { useFormik } from 'formik';
import React from 'react';
import { AiOutlineClear } from 'react-icons/ai';
import { BsQuestionCircle } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import 'yup-phone';
import { ErrorContainer } from '../../../assets/styles/styles';
import { savePersonalInfo } from '../../../features/personalInfo/PersonalnfoSlice';

const validationSchemaGlobal = Yup.object({
  firstName: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
  profession: Yup.string()
    .max(25, 'Must be 15 characters or less')
    .required('Required'),
  city: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
  phone: Yup.string().phone('Invalid phone number').required('Required'),
  country: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
  lastName: Yup.string()
    .max(20, 'Must be 20 characters or less')
    .required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
});

export default function PersonalInfo({ title, className }) {
  //const currentPersonlInfo = useSelector(state => state.personalInfo.userInfo);

  const dispatch = useDispatch();
  const toast = useToast();
  const formik = useFormik({
    initialValues: {
      city: '',
      country: '',
      email: '',
      firstName: '',
      lastName: '',
      phone: '',
      profession: '',
    },
    validationSchema: validationSchemaGlobal,
    onSubmit: (values, { resetForm }) => {
      dispatch(savePersonalInfo(values));
      toast({
        title: `Cool !`,
        description: `You're personal Info saved!!.`,
        status: 'success',
        duration: 1000,
        position: 'top-right',
        isClosable: true,
      });
      resetForm();
    },
  });

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
      <form onSubmit={formik.handleSubmit}>
        <Flex align="center" justify="space-between" mb="5">
          <FormControl id="firstName" mr="10px">
            <FormLabel htmlFor="firstName">First Name</FormLabel>
            <Input
              isInvalid={formik.touched.firstName && formik.errors.firstName}
              id="firstName"
              name="firstName"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <ErrorContainer>{formik.errors.firstName}</ErrorContainer>
            ) : null}
          </FormControl>
          <FormControl id="lastName">
            <FormLabel htmlFor="firstName" fontSize="sm">
              Last Name
            </FormLabel>
            <Input
              isInvalid={formik.touched.lastName && formik.errors.lastName}
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <ErrorContainer>{formik.errors.lastName}</ErrorContainer>
            ) : null}
          </FormControl>
        </Flex>
        <Flex align="center" justify="space-between" mb="5">
          <FormControl id="email" mr="10px">
            <FormLabel htmlFor="email" fontSize="sm">
              Email
            </FormLabel>
            <Input
              isInvalid={formik.touched.email && formik.errors.email}
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <ErrorContainer>{formik.errors.email}</ErrorContainer>
            ) : null}
          </FormControl>
          <FormControl id="phone">
            <FormLabel htmlFor="phone" fontSize="sm">
              Phone Number
            </FormLabel>
            <Input
              isInvalid={formik.touched.phone && formik.errors.phone}
              type="tel"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
            />
            {formik.touched.phone && formik.errors.phone ? (
              <ErrorContainer>{formik.errors.phone}</ErrorContainer>
            ) : null}
          </FormControl>
        </Flex>
        <Flex align="center" justify="space-between" mb="5">
          <FormControl id="profession">
            <FormLabel htmlFor="profession" fontSize="sm">
              Profession
            </FormLabel>
            <Input
              isInvalid={formik.touched.profession && formik.errors.profession}
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.profession}
            />
            {formik.touched.profession && formik.errors.profession ? (
              <ErrorContainer>{formik.errors.profession}</ErrorContainer>
            ) : null}
          </FormControl>
        </Flex>
        <Flex align="center" justify="space-between" mb="2">
          <FormControl id="country" mr="10px">
            <FormLabel htmlFor="country" fontSize="sm">
              Country
            </FormLabel>
            <Input
              isInvalid={formik.touched.country && formik.errors.country}
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.country}
            />
            {formik.touched.country && formik.errors.country ? (
              <ErrorContainer>{formik.errors.country}</ErrorContainer>
            ) : null}
          </FormControl>
          <FormControl id="city" mr="10px">
            <FormLabel htmlFor="city" fontSize="sm">
              City
            </FormLabel>
            <Input
              isInvalid={formik.touched.city && formik.errors.city}
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.city}
            />
            {formik.touched.city && formik.errors.city ? (
              <ErrorContainer>{formik.errors.city}</ErrorContainer>
            ) : null}
          </FormControl>
        </Flex>
        <Flex align="center" justify="space-between" my="5">
          <Button colorScheme="blue" variant="outline" type="submit">
            Save my information
          </Button>
        </Flex>
      </form>
    </Box>
  );
}
