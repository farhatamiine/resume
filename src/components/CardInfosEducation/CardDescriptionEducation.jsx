import {
  Box,
  HStack,
  IconButton, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay,
  useColorModeValue as mode, useDisclosure,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { HiLocationMarker, HiPencilAlt, HiTrash } from 'react-icons/hi';
import { useDispatch } from 'react-redux';
import { deleteEducation, isUpdateEducation } from '../../features/personalInfo/PersonalnfoSlice';
import { useToast } from '@chakra-ui/toast';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Button } from '@chakra-ui/button';

export default function CardDescriptionEducation(props) {

  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef();
  const finalRef = React.useRef();
  const { education, index, setEducation } = props;
  const { country, city, schoolName, fieldStudy } = education;

  const toast = useToast();

  function updateEducationData() {
    //TODO: update education data
  }

  return (
    <Box position='relative'>
      <Box fontWeight='bold' maxW='xl' className='apply-font-header'>
        {fieldStudy}
      </Box>
      <HStack
        fontSize='sm'
        fontWeight='medium'
        color={mode('gray.500', 'white')}
        mt='1'
      >
        <Box as={HiLocationMarker} fontSize='md' color='gray.400' />
        <span>{country}{city}</span>
      </HStack>
      <Box
        mt='3'
        maxW='xl'
        color={mode('gray.600', 'gray.200')}
        className='apply-font-text'
      >
        {schoolName}
      </Box>
      <HStack
        position={{
          sm: 'absolute',
        }}
        top={{
          sm: '0',
        }}
        insetEnd={{
          sm: '0',
        }}
        mt={{
          base: '4',
          sm: '0',
        }}
      >
        <IconButton
          aria-label='Edit'
          icon={<HiPencilAlt />}
          rounded='full'
          onClick={onOpen}
          size='sm'
        />
        <IconButton
          aria-label='Delete'
          onClick={() => {
            console.log('delete', index);
            dispatch(deleteEducation(index));
            toast({
              title: 'Education Deleted',
              description: 'Education Deleted Successfully',
              status: 'success',
              duration: 5000,
              isClosable: true,
            });
          }}
          icon={<HiTrash />}
          rounded='full'
          size='sm'
        />
      </HStack>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>First name</FormLabel>
              <Input ref={initialRef} value={schoolName} placeholder='First name' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Last name</FormLabel>
              <Input placeholder='Last name' />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={updateEducationData}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
