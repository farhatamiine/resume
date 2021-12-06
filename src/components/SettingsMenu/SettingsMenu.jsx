import React from 'react';
import styled from 'styled-components';
import ResumeColor from '../ColorsPicker/ResumeColor';
import ResumeFonts from '../FontPicker/ResumeFonts';
import PdfDocument from '../PdfDocument/PdfDocument';

const SettingSection = [
  {
    components: <ResumeColor />,
    name: 'Color Scheme',
  },
  {
    components: <ResumeFonts pickerId="header" />,
    name: 'Header Font',
  },
  {
    components: <ResumeFonts pickerId="text" />,
    name: 'Text Font',
  },
  {
    components: <PdfDocument />,
    name: 'Generate Pdf',
  },
];

export default function SettingsMenu({ title, description, className }) {
  return (
    <Container
      flex="column"
      className={`${className} p-3 rounded-md  shadow-md `}
    >
      <Container flex="column">
        <Head>{title}</Head>
        <Text>{description}</Text>
      </Container>
      <div>
        {SettingSection.map((e, index) => {
          return (
            <div className="my-5 w-full" key={index}>
              <Head1>{e.name}</Head1>
              {e.components}
            </div>
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
  width: ${props => (props.width ? props.width : 'auto')};
  height: fit-content;
  flex-direction: ${props => (props.flex ? props.flex : 'row')};
`;

const Head = styled.h1`
  font-weight: 600;
  font-size: 17;
  color: #000000;
`;

const Head1 = styled.h1`
  font-weight: 500;
  font-size: 14;
  margin-bottom: 5px;
  color: #3b3b3b;
`;

const Text = styled.p`
  font-size: 14px;
  color: #9e9e9e;
`;
