import { Flex, Text } from '@chakra-ui/layout';
import React, { useEffect } from 'react';
import { useLocation, useMatch } from 'react-router';
import styled from 'styled-components';

export default function CardButton(props) {
  const { cardName, icon, routeName } = props;
  const { pathname } = useLocation();

  let match = useMatch({ path: pathname, end: true });
  useEffect(() => {
    console.log(match);
  }, [match]);
  return (
    <CardIcon
      borderRadius="lg"
      alignItems="center"
      justifyItems="center"
      p="6"
      height="100%"
      textAlign="center"
      border="1px solid #0D47A1"
      direction="column"
      overflow="hidden"
      svgcolor={`${routeName === pathname ? 'white' : '#0D47A1'}`}
      className={`${
        routeName === pathname ? 'bg-blue text-white' : 'bg-white'
      }`}
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: auto;
  height: ${props => props.height};
  transition: all 0.5s ease-in;
  svg {
    fill: ${props => props.svgcolor};
  }
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
