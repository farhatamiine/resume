import { Button } from '@chakra-ui/button';
import React from 'react';
import { AiFillFilePdf } from 'react-icons/ai';
import { generatePdf } from '../../utils';

export default function PdfDocument() {
  return (
    <div>
      <Button
        colorScheme="blue"
        onClick={() => generatePdf(document.getElementById('myResume'))}
        variant="outline"
        leftIcon={<AiFillFilePdf />}
      >
        Generate Resume
      </Button>
    </div>
  );
}
