import { Flex, Spacer, Text } from '@chakra-ui/layout';
import React from 'react';
import styled from 'styled-components';

export default function CardButton(props) {
  const { cardName, icon } = props;

  return (
    <Flex
      borderRadius="lg"
      alignItems="center"
      justifyItems="center"
      p="6"
      bg="gray.200"
      direction="column"
      overflow="hidden"
    >
      {icon}
      <Spacer />
      <Text fontSize="md" mt={2}>
        {cardName}
      </Text>
    </Flex>
  );
}

const F = styled.Flex;
