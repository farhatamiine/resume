import React from 'react';
import { DiYeoman } from 'react-icons/di';
import { GiBookmarklet, GiMedal, GiTiedScroll } from 'react-icons/gi';
import { IoBriefcaseSharp, IoLanguageSharp } from 'react-icons/io5';
import { MdSportsEsports } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import CardButton from '../CardButton/CardButton';

const cardSection = [
  {
    icon: <DiYeoman size="30" color="#0d47a1" />,
    name: 'Personal Info',
    routeName: '/personal-info',
  },
  {
    icon: <GiTiedScroll size="30" color="#0d47a1" />,
    name: 'Summary',
    routeName: '/summary',
  },
  {
    icon: <IoBriefcaseSharp size="30" color="#0d47a1" />,
    name: 'Work Experience',
    routeName: '/work-experience',
  },
  {
    icon: <GiBookmarklet size="30" color="#0d47a1" />,
    name: 'Education',
    routeName: '/education',
  },
  {
    icon: <IoLanguageSharp size="30" color="#0d47a1" />,
    name: 'Language',
    routeName: '/language',
  },
  {
    icon: <GiMedal size="30" color="#0d47a1" />,
    name: 'Skills',
    routeName: '/skills',
  },
  {
    icon: <GiTiedScroll size="30" color="#0d47a1" />,
    name: 'Certificate',
    routeName: '/certificate',
  },
  {
    icon: <MdSportsEsports size="30" color="#0d47a1" />,
    name: 'Hobbies',
    routeName: '/hobbies',
  },
];
export default function NavigationMenu({ title, description, className }) {
  return (
    <Container
      flex="column"
      className={`${className} p-3 rounded-md  shadow-md `}
    >
      <Container flex="column">
        <Head>{title}</Head>
        <Text>{description}</Text>
      </Container>
      <div className="grid grid-cols-2 gap-2">
        {cardSection.map((e, index) => {
          return (
            <NavLink to={e.routeName} key={index}>
              <CardButton
                icon={e.icon}
                cardName={e.name}
                routeName={e.routeName}
              />
            </NavLink>
          );
        })}
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  margin: 5px 10px;
  align-items: flex-start;
  width: auto;
  height: fit-content;
  flex-direction: ${props => props.flex};
`;

const Head = styled.h1`
  font-weight: 600;
  font-size: 17;
  color: #000;
`;

const Text = styled.p`
  font-size: 14px;
  color: #9e9e9e;
`;
