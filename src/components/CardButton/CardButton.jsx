import { Flex, Text } from '@chakra-ui/layout';
import React from 'react';
import styled from 'styled-components';

export default function CardButton(props) {
  const { cardName, icon } = props;

  return (
    <CardIcon
      borderRadius="lg"
      alignItems="center"
      justifyItems="center"
      p="6"
      textAlign="center"
      border="1px solid #0D47A1"
      direction="column"
      overflow="hidden"
      className="cursor-pointer"
    >
      {icon}
      <Text fontSize="md" mt={2}>
        {cardName}
      </Text>
    </CardIcon>
  );
}

const CardIcon = styled(Flex)`
  border-width: 2px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: auto;
  height: ${props => props.height}px;
  transition: all 0.5s ease-in;
  &:hover {
    background-color: #0d47a1;
    svg {
      fill: #ffff;
    }
    p {
      color: #ffff;
    }
  }
`;
